// Following suggestion from John Bieling at
// https://thunderbird.topicbox.com/groups/addons/Te7f4be38fca0c57e/how-to-control-link-targets

window.addEventListener("click", clickhandler);
    
function clickhandler(event) {
    event.preventDefault();
    event.stopPropagation();

    const anchor = event.target.closest("a");
    if (!anchor) return;
    browser.runtime.sendMessage({
        data: anchor.getAttribute('href')
    });
};
