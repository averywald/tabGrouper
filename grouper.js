// grouper.js
// avery wald

// simple error logger
function onError(error) { console.log(`Error: ${error}`); }

// sorts tabs by url and reorders them in the browser
    // grouping similar domains, thus organizing them for easy tab cycling
function grouper(windowInfo) {

    // if no open tabs
    if (windowInfo.tabs.length == 0) {
        // handle error
        onError('No active tabs...nothing for me to do');
    }

    // sort tab objects
    var newTabs = [...windowInfo.tabs].sort((a, b) => (a.url > b.url) ? 1 : -1);

    // recursively move all tabs to front in sorted order
    browser.tabs.move(newTabs.map(t => t.id), { index: -1 });

}

// browser tabs API hook
    // calls grouper function
function driver() {

    // get current tab
    var current = browser.windows.getCurrent({ populate: true });
    // call grouper function
    current.then(grouper, onError);

}

// execute grouping on button click
browser.browserAction.onClicked.addListener(() => driver);

// execute grouping on key combo
browser.commands.onCommand.addListener((cmd) => (cmd == 'toggle-feature') ? driver() : null);