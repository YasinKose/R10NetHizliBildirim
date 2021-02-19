// This is the background page.
// it keeps track of prefrences/settings in localStorage

if (typeof chrome !== "undefined") {
  var browser = chrome;
}

browser.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://www.r10.net";
    browser.tabs.create({ url: newURL });
});