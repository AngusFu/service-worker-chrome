
chrome.browserAction.onClicked.addListener(function updateIcon() {
    chrome.tabs.query({
        url: 'chrome://serviceworker-internals/'
    }, function (tabs) {
        if (!tabs.length) {
            chrome.tabs.create({
                url: 'chrome://serviceworker-internals/'
            });
        } else {
            chrome.tabs.update(tabs[0].id, { selected : true });
        }
    });
});

chrome.runtime.onMessage.addListener(function(message) {
    if (message.type === 'swOk') {
        chrome.tabs.query({
            url: message.url
        }, function (tabs) {
            if (tabs.length) {
                console.log(tabs);
                chrome.browserAction.setIcon({
                    path: './img/sword_64_active.png',
                    tabId: tabs[0].id
                });
            }
        });
    }
});
