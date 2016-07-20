
console.log(location.href);
chrome.runtime.sendMessage(null, {
    type: 'swOk',
    url: location.href
});
