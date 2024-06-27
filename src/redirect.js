async function onGot(item) {
  // get url
  let url = item.zulip_url
  // check if url is valid
  if (/^(http|https):\/\/[^ "]+$/.test(url)) {
    console.log("Valid URL"); // go on
  } else {
    // if invalid, log it
    console.log("Invalid URL. Reseting to default.");
    // and reset to default
    url = 'https://zulip.com/accounts/go/'
    await browser.storage.sync.set({
        zulip_url: 'https://zulip.com/accounts/go/'
    });
  }

  browser.spacesToolbar.addButton('Zulip', {
    title: "Zulip",
    defaultIcons: "zulip.svg",
    url: url
  });
}

function onError(error) {
  console.log(error)
}

let res = browser.storage.sync.get('zulip_url');
res.then(onGot, onError);
