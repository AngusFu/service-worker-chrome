chrome.runtime.sendMessage(null, {
    type: 'swOk',
    url: location.href
    // sw: navigator.serviceWorker && navigator.serviceWorker.controller
});
