(function (win, doc) {
    'use strict';

    var type,
        title,
        actions = {
            'fb': {
                fn: share,
                path: 'https://www.facebook.com/sharer/sharer.php?u='
            },
            'tw': {
                fn: shareWithTitle,
                path: 'http://twitter.com/intent/tweet?'
            },
            'vk': {
                fn: share,
                path: 'http://vk.com/share.php?url='
            }
        };

    doc.querySelector('.js-social')
        .addEventListener('click', clickHandler);

    function clickHandler(e) {
        type = e.target.dataset.type;
        title = e.currentTarget.dataset.title;

        if (actions[type]) {
            actions[type].fn(window.location.href, actions[type].path, title);
        }
    }

    function share(url, path) {
        openPopup(path + url);
    }

    function shareWithTitle(url, path, title) {
        openPopup(path + 'text=' + encodeURIComponent(title) + ' ' + url + ' @instanceofpro');
    }

    function openPopup(url) {
        var point = {
            x: screen.width / 2 - 300,
            y: screen.height / 2 - 200
        };

        var win = window.open(url, doc.title, 'left=' + point.x + ',top=' + point.y + ',width=600,height=400,scrollbars=1,resizable=1');
        win.focus();
    }

})(window, document);