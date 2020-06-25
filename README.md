# facebook-messenger-restaurant-chat-bot
A  restaurant chatbot uses Facebook Messenger Platform, building from scratch with Node.js Platform.

## Video demo the bot: https://youtu.be/sLdrrZLxIgU

- Feel free to test my bot👉:  https://m.me/restaurantHaryPhamDev
- The Facebook Page I embed that bot: https://www.facebook.com/restaurantHaryPhamDev

## What can this bot do:

- Showing menu (lunch, dinner, pub menu), showing rooms.
- Take a reservation.
- Call the phone number, persistent menu (link to view Facebook Fan Page,  Youtube channel).
- Automatic understand a message is a datetime or a phone number (use for taking reservation).
- Whenever a reservation is done, a message notification will be automatically push to a group Telegram.

### How to setup this bot for your own Facebook Page without any cost ?

#### 1. Clone this project
#### 2. Create a Heroku app
#### 3. Deploy this project to your Heroku app
#### 4. Create a Facebook Developer App, A Facebook Page (to embed this bot)
#### 5. Going to Facebook Developer App, add the Messenger Product, generate FACEBOOK_PAGE_ACCESS_TOKEN, config the webhook (default, the url for the webhook is: <the_domain_your_herokuapp>/webhook ) . 
#### Remember to update the config variables on Heroku as well.
#### 6. Enable the option: Build-in NLP on Messenger Product (Natural Laguage Processing) to make the bot understand the sentences with the meaning "datetime" and "phone_number"
#### 7.(Optional) If you want to push a notificaton to a group Telegram (when a customer is finish the process of "Reserve a table"), create a Telegram Bot and a group Telegram.
#### 8. Enjoy!

### Several errors you may encouter:
- Forgetting to update the environment variables on Heroku : go to "Settings option", then "Reveal Congfig Var"
- The bot only works with the admin account, doesn't reply the others Facebook accounts: need to be approved the "pages_messaging" permission. 
For detail, watch this video: https://youtu.be/0VRQRHnrGxg

### Wonder how to build this bot and want to make it yourself, watch my video to build this bot from scratch:

### Find me here:
- Youtube Channel: https://bit.ly/subscribe-haryphamdev
- Facebook Fanpage: https://facebook.com/haryphamdev
- Patreon: https://www.patreon.com/haryphamdev
- Twitter: https://twitter.com/haryphamdev
- GitHub: https://github.com/haryphamdev
