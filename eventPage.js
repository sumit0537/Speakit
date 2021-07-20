var menuItem = {
    "id": "Speak",
    "title": "Speak",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);
chrome.contextMenus.onClicked.addListener(function(selectedData){
    if(selectedData.menuItemId == "Speak" && selectedData.selectionText){
        chrome.tts.speak(selectedData.selectionText,
            {
                'rate':0.7
            });
    }
})

// chrome.contextMenus.onClicked.addListener(function (clickData) {
//     if (clickData.menuItemId == "Speak" && clickData.selectionText) {
//         chrome.tts.speak(clickData.selectionText,
//             {
//                 'rate': 0.7
//             });
//     }
// });