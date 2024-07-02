
// Following suggestion from John Bieling at
// https://thunderbird.topicbox.com/groups/addons/Te7f4be38fca0c57e/how-to-control-link-targets

browser.runtime.onMessage.addListener(function (message) {
  prefix = browser.storage.sync.get('zulip_url');
  prefix.then(function(result) {
    let prefix = result.zulip_url;
    href = message.data;
    if (href.startsWith("/user_uploads")) {
      href = prefix + href;
    }
    browser.windows.openDefaultBrowser(href);
  });
});
