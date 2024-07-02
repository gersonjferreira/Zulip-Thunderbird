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
