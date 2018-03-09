import html2text
import os
from pprint import pprint

# get list of htmls file
def getHTMLpath(directory):
  newHTML = []
  convertedHTML = []
  for root, dirs, fileNames in os.walk(directory):
    for fileName in fileNames:
      name, ext = os.path.splitext(fileName)
      if ext == '.html':
        filePath = os.path.join(root, fileName)
        # if already converted
        if name+'.md' in fileNames:
          convertedHTML.append(filePath)
        else:
          newHTML.append(filePath)
  return newHTML, convertedHTML

newHTML, convertedHTML= getHTMLpath('.')

if len(convertedHTML) > 0:
  print('Skipping HTML files associated with markdown files:')
  pprint(convertedHTML)
  print('\n')

if len(newHTML) > 0:
  print('Converting new HTML files:')
  pprint(newHTML)
else:
  print('No new HTML files to convert.')

# do the conversions and save to file
for filePath in newHTML:
  fHtml = open(filePath)
  html = fHtml.read()
  fHtml.close()

  md = html2text.html2text(html)
  with open(os.path.splitext(filePath)[0]+'.md', 'w+') as fMd:
    fMd.write(md)
