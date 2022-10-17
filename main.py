import os
from time import sleep
while True:

    print('\nPYTHON --- deploying commands to development server...')
    os.system("node /home/garlicbread/code/Jungle-Bot-3/deployment/development.js")

    print('\nPYTHON --- deploying commands to testing server...')
    os.system("node /home/garlicbread/code/Jungle-Bot-3/deployment/test.js")

    print('\nPYTHON --- deploying commands to jungle server...')
    os.system("node /home/garlicbread/code/Jungle-Bot-3/deployment/jungle.js")

    print('\nPYTHON --- deploying commands to 104 server...')
    os.system("node /home/garlicbread/code/Jungle-Bot-3/deployment/104.js")

    print('\nPYTHON --- running script')
    while True:
        os.system("node /home/garlicbread/code/Jungle-Bot-3/index.js")
        print("\n\n\nThe discord bot crashed! restarting...\n\n")
        sleep(1)
    
    print('PYTHON --- quitted again, redeploying commands')

    sleep(1)