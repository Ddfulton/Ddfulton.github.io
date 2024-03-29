import requests
import json
import pprint

api_key = 'c896cfe3e5394b958cf5b231253153ae'

#query = "Societe%20Generale"
query = "fintechs"

url = 'https://newsapi.org/v2/everything?' + \
       'qInTitle={}&'.format(query) + \
       'from=2021-10-20&' +  \
       'sortBy=popularity&' +  \
       'language=en&' +  \
       'apiKey={}'.format(api_key)
print(url)

x = requests.get(url).json()
x = x['articles'][:20]

