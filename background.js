chrome.runtime.onInstalled.addListener(() => {
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
      chrome.storage.local.set({ bookmarks: bookmarkTreeNodes });
    });
  });
  