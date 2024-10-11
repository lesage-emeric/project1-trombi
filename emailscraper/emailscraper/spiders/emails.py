import scrapy
import re



# settings.py

BOT_NAME = 'pizzeria_scraper'

SPIDER_MODULES = ['pizzeria_scraper.spiders']
NEWSPIDER_MODULE = 'pizzeria_scraper.spiders'

# Désactive l'obéissance aux fichiers robots.txt
ROBOTSTXT_OBEY = False

# Changer le User-Agent pour simuler un vrai navigateur
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'

# Ajouter un délai pour ne pas surcharger le serveur
DOWNLOAD_DELAY = 1

# Encodage des fichiers CSV en UTF-8
FEED_EXPORT_ENCODING = 'utf-8'

# Désactiver la gestion des cookies (optionnel)
COOKIES_ENABLED = False


class PizzeriasSpider(scrapy.Spider):
    name = "pizzeriaspider"
    
    # URL de départ pour trouver des pizzerias dans le Nord (59)
    start_urls = [
        'https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=pizzeria&ou=nord-59',
    ]

    # Ajoute un User-Agent personnalisé pour imiter un navigateur
    custom_settings = {
        'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'ROBOTSTXT_OBEY': False,  # Désactive le respect du fichier robots.txt
        'DOWNLOAD_DELAY': 1,  # Ajoute un délai de 1 seconde entre les requêtes pour éviter de surcharger le serveur
        'FEED_EXPORT_ENCODING': 'utf-8',  # Assure que le CSV soit encodé correctement
    }

    def parse(self, response):
        # Pour chaque pizzeria listée sur la page
        for pizzeria in response.css('li.bi-bloc'):
            # Extraire les informations
            marque = pizzeria.css('a.denomination-links::text').get()
            domaine = pizzeria.css('a.denomination-links::attr(href)').get()
            telephone = pizzeria.css('strong.tel-zone::text').get()

            # Extraire l'email avec l'expression régulière
            email = pizzeria.xpath("//a[contains(@href,'mailto:')]/@href").get()
            if email:
                email = email.replace('mailto:', '')

            # Retourner les informations sous forme de tableau
            yield {
                'MARQUE': marque.strip() if marque else 'N/A',
                'NOM DE DOMAINE': response.urljoin(domaine) if domaine else 'N/A',
                'E-MAIL': email if email else 'N/A',
                'TÉLÉPHONE': telephone.strip() if telephone else 'N/A',
            }

        # Pagination : suivre les liens vers les pages suivantes
        next_page = response.css('a.pagination-next::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)
