var Css = require('cl-css');

/**
 * Constrcutor
 * @param {Number} zIndex Description
 * @return {Element} description
 */
function Overlay(opt) {
    var opt = opt || {};
    opt.zIndex = opt.zIndex || '200';
    opt.trans = opt.trans || '0.6';
    if(document.getElementsByClassName('cl-overlay').length > 0) return;
    var ol = this.el = document.body.appendChild(createOverlay(opt.zIndex, opt.trans));
    ol.addEventListener('touchstart touchmove touchend', function(e) {
        e.preventDefault();
    });

    ol.addEventListener('touchstart click', function(e) {
        this.hide();
    }.bind(this));
    this.show();
}

/**
 * @param {Number} zIndex Description
 * @return {Element} description
 */
function createOverlay(zIndex, trans) {
    var CSS = {
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        'background': 'rgba(0,0,0,' + trans + ')',
        'z-index': zIndex,
        position: 'fixed',
        display: 'none'
    };
    var el = document.createElement('div');
    el.classList.add('cl-overlay');
    Css(el, CSS);
    return el;
};


/**
 * @return {void} description
 */
Overlay.prototype.show = function() {
    Css(this.el, {
        display: 'block'
    });
};

/**
 * @return {void} description
 */
Overlay.prototype.hide = function() {
    Css(this.el, {
        display: 'none'
    });
};

module.exports = {
    Overlay: Overlay
};
