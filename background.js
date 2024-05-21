chrome.omnibox.onInputEntered.addListener(async (input) => {
    let urlMap = {
        "miles": "https://my.milesweb.com/index.php?rp=/login",
        "ca": "https://carealign.atlassian.net/secure/RapidBoard.jspa?rapidView=3&projectKey=CA&selectedIssue=CA-5"
    };

    if (urlMap[input]) {
        chrome.tabs.create({ url: urlMap[input] });
    } else {
        chrome.tabs.create({ url: "https://www.google.com/search?q=" + encodeURIComponent(input) });
    }
});
