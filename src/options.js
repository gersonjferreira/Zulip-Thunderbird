async function resetOptions() {
    // sets the default url
    await browser.storage.sync.set({
        zulip_url: 'https://zulip.com/accounts/go/'
    });
    // update the options window
    restoreOptions();
}

async function saveOptions(e) {
    // saves the new ulr
    e.preventDefault();
    await browser.storage.sync.set({
        zulip_url: document.querySelector("#zulip_url").value
    });
    // update the options window
    restoreOptions();
}

async function restoreOptions() {
    // reads current url and sets the options window
    let res = await browser.storage.sync.get('zulip_url');
    document.querySelector("#current_url").innerText = res.zulip_url;
    document.querySelector("#zulip_url").value = '';
    // updates the button url
    browser.spacesToolbar.updateButton('Zulip', {
        title: "Zulip",
        defaultIcons: "zulip.svg",
        url: res.zulip_url
    });
}

// call restore options on load
document.addEventListener('DOMContentLoaded', restoreOptions);
// and adds listeners
document.querySelector("form").addEventListener("submit", saveOptions);
document.querySelector("form").addEventListener("reset", resetOptions);

