let sendCategoriesTemplate = () =>{
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Headphones",
                        "image_url": "https://bit.ly/imageHeadphones",
                        "subtitle": "Bose Noise Cancelling Wireless Bluetooth Headphones",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/webHeadphones",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/webHeadphones",
                                "title": "View on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Show Headphones",
                                "payload": "SHOW_HEADPHONES"
                            }
                        ]
                    },
                    {
                        "title": "TV",
                        "image_url": "https://bit.ly/imageTV",
                        "subtitle": "Master of quality & Incredible clarity",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/webTelevision",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/webTelevision",
                                "title": "View on Website"
                            }, {
                                "type": "postback",
                                "title": "Show TVs",
                                "payload": "SHOW_TV"
                            }
                        ]
                    },
                    {
                        "title": "Playstation",
                        "image_url": "https://bit.ly/imagePlaystation",
                        "subtitle": "Incredible games & Endless entertainment",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/webPlaystation",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/webPlaystation",
                                "title": "View on Website"
                            }, {
                                "type": "postback",
                                "title": "Show Playstation",
                                "payload": "SHOW_PLAYSTATION"
                            }
                        ]
                    },
                ]
            }
        }
    };
};

let sendHeadphonesTemplate = () =>{
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Sony Noise Cancelling Headphones WH1000XM3",
                        "image_url": "https://bit.ly/imageHeadphone1a",
                        "subtitle": "$348.00",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/viewHeadphone1",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/viewHeadphone1",
                                "title": "Order now"
                            },
                            {
                                "type": "postback",
                                "title": "Back to categories",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Sony WI-1000XM2 Industry Leading Noise Canceling Wireless Behind-Neck",
                        "image_url": "https://bit.ly/imageHeadphone1b",
                        "subtitle": "$298.00",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/viewHeadphone2",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/viewHeadphone2",
                                "title": "Order now"
                            },
                            {
                                "type": "postback",
                                "title": "Back to categories",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Sony Wireless in-Ear Headset",
                        "image_url": "https://bit.ly/imageHeadphone1c",
                        "subtitle": "$38.00",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/viewHeadphone3",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/viewHeadphone3",
                                "title": "Order now"
                            },
                            {
                                "type": "postback",
                                "title": "Back to categories",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                ]
            }
        }
    };
};

let sendLookupOrderTemplate = () =>{
    return {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"button",
                "text":"OK. Let's set info about your order, so I won't need to ask for them in the future.",
                "buttons":[
                    {
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_ORDER}`,
                        "title": "Set info",
                        "webview_height_ratio": "tall",
                        "messenger_extensions": true //false: open the webview in new tab
                    },
                    {
                        "type": "postback",
                        "title": "Main menu",
                        "payload": "BACK_TO_MAIN_MENU"
                    }
                ]
            }
        }
    };
};

let backToMainMenuTemplate = ()=>{
    return {
        "text": "What can I do to help you today?",
        "quick_replies": [
            {
                "content_type": "text",
                "title": "Categories",
                "payload": "CATEGORIES",
            },
            {
                "content_type": "text",
                "title": "Lookup Order",
                "payload": "LOOKUP_ORDER",
            },
            {
                "content_type": "text",
                "title": "Talk to an agent",
                "payload": "TALK_AGENT",
            },
        ]
    };
};

let setInfoOrderTemplate = ()=>{
    return {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"button",
                "text":"We're checking your order. We will send you a message when the process is complete." +
                    "\nThank you!",
                "buttons":[
                    {
                        "type": "postback",
                        "title": "Main menu",
                        "payload": "BACK_TO_MAIN_MENU"
                    }
                ]
            }
        }
    };
};

module.exports = {
    sendCategoriesTemplate: sendCategoriesTemplate,
    sendHeadphonesTemplate: sendHeadphonesTemplate,
    sendLookupOrderTemplate: sendLookupOrderTemplate,
    backToMainMenuTemplate: backToMainMenuTemplate,
    setInfoOrderTemplate: setInfoOrderTemplate
};
