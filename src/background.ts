chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (sender.tab && sender.tab.id) {
    chrome.pageAction.show(sender.tab.id);
    sendResponse(null);
  }
});
