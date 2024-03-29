// grouper.js
// avery wald

// simple error logger
function onError(e) { console.log(e); }

// sorts tabs by url and reorders them in the browser
    // grouping similar domains, thus organizing them for easy tab cycling
function grouper(windowInfo) {

    // if no open tabs
    if (windowInfo.tabs.length == 0) {
        // handle error
        onError('No active tabs...nothing for me to do');
    }

    // sort tabs by url & recursively move all tabs to front in sorted order
    browser.tabs.move([...windowInfo.tabs].sort((a, b) => {
        // strip http protocol from url strings
        let c = a.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
        let d = b.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
        // compare and return sort protocol
        return (c > d) ? 1 : -1;
    }).map(t => t.id), { index: -1 });

}

// browser tabs API hook
    // calls grouper function
function driver() {

    // get current window and call grouper() on it
    browser.windows.getCurrent({ populate: true }).then(grouper, onError);

}

// execute grouper() upon button click
browser.browserAction.onClicked.addListener(driver);

// execute grouper() upon key combo
browser.commands.onCommand.addListener((cmd) => (cmd == 'toggle-feature') ? driver() : null);

// only call grouper() when new tab is finished loading
browser.tabs.onUpdated.addListener(driver, { properties: ['status'] });