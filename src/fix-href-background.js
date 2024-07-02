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
