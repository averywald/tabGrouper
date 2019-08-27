// grouper.js
// avery wald

// simple error logger
function onError(error) {
    console.log(`Error: ${error}`);
}

// sorts tabs by url and reorders them in the browser
    // grouping similar domains, thus organizing them for easy tab cycling

function grouper(windowInfo) {

    // if no open tabs
    if (windowInfo.tabs.length == 0) {
        return;
    }

    // sort tab objects
    var newTabs = [...windowInfo.tabs].sort((a, b) => (a.url > b.url) ? 1 : -1);

    // move all tabs to front in sorted order
    let moving = browser.tabs.move(newTabs.map(t => t.id), { index: -1 });
    moving.then((newTabs) => {
        console.log('grouped tabs');
    }, onError);

}

// event-driven 'on click' function
    // handles states and calls functions
browser.browserAction.onClicked.addListener(() => {

    // get current tab
    var current = browser.windows.getCurrent({ populate: true });
    // call grouper function
    current.then(grouper, onError);

});