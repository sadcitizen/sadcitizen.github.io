(function (win, doc) {
    'use strict';

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
            },
            win = window.open(url, '', 'left=' + point.x + ',top=' + point.y + ',width=600,height=400,scrollbars=1,resizable=1');

        win.focus();
    }

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

    function clickHandler(e) {
        if (e.target.dataset !== undefined) { // standart
            type = e.target.dataset.type;
            title = e.currentTarget.dataset.title;
        } else { // IE sucks!
            type = e.target.getAttribute('data-type');
            title = e.currentTarget.getAttribute('data-title');
        }

        if (actions[type]) {
            actions[type].fn(window.location.href, actions[type].path, title);
        }
    }

    doc.querySelector('.js-social')
        .addEventListener('click', clickHandler);
})(window, document);