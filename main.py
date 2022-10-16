import os
from time import sleep

print('\ndeploying commands to development server...')
os.system("node /home/garlicbread/code/Jungle-Bot-3/deployment/deploy-commands-development.js")

print('\ndeploying commands to testing server...')
os.system("node /home/garlicbread/code/Jungle-Bot-3/deployment/deploy-commands-testing.js")

print('\ndeploying commands to production server 1 (jungle)...')
os.system("node /home/garlicbread/code/Jungle-Bot-3/deployment/deploy-commands-production.js")

print('\ndeploying commands to production server 2 (104)...')
os.system("node /home/garlicbread/code/Jungle-Bot-3/deployment/deploy-commands-104.js")

print('\nrunning script')
while True:
    os.system("node /home/garlicbread/code/Jungle-Bot-3/index.js")
    print("\n\n\nThe discord bot crashed! restarting...\n\n")
    sleep(1)