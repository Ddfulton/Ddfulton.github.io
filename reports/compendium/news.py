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

# Headline, source
content_rows = "var content_rows = ["
for article in x:
    title = article['title'].replace("'", "")
    source = article['source']['name'].replace("'", "")
    link = article['url']
    addn = "{" + "'title':'{}','source':'{}', 'link':'{}'".format(title, source, link) + "},"
    content_rows = content_rows + addn

content_rows = content_rows[:-1] + "];\n"


with open('news.js', 'w') as f:
    f.write(content_rows)
    with open('news_code.js', 'r') as f2:
        f.write(f2.read())
