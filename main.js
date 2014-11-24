var addOverlay = function(data, callback) {
  chrome.tabs.executeScript(null, { file: "js/jquery-2.1.1.min.js" }, function() {
    chrome.tabs.executeScript(null, {code: 'var config = ' + JSON.stringify(data)}, function() {
        chrome.tabs.executeScript(null, { file: "js/content.js" });
    });
  });
};

chrome.browserAction.onClicked.addListener(function(tab) {
  addOverlay({tab: tab});
});

