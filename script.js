document.addEventListener('DOMContentLoaded', function () {
    chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
        const bookmarks = bookmarkTreeNodes[0].children;
        const grid = document.getElementById('bookmark-grid');
        
        bookmarks.forEach(folder => {
            folder.children.forEach(bookmark => {
                if (bookmark.url) {
                    const bookmarkElement = document.createElement('div');
                    bookmarkElement.className = 'bookmark';

                    // ファビコンを取得
                    const faviconUrl = `https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=128`;

                    bookmarkElement.innerHTML = `
                        <a href="${bookmark.url}" target="_blank">
                        <br>
                            <img src="${faviconUrl}" alt="favicon">
                        </a>
                        <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
                    `;

                    grid.appendChild(bookmarkElement);
                }
            });
        });
    });
});
