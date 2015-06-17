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
}

/**
 * @param {Number} zIndex Description
 * @return {Element} description
 */
function createOverlay(zIndex, trans) {
    var CSS = {
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'background': 'rgba(0,0,0,' + trans + ')',
        'z-index': zIndex,
        'position': 'fixed'
    };
    var el = document.createElement('div');
    el.classList.add('cl-overlay');
    Css(el, CSS);
    return el;
};

/**
 * @return {void} description
 */
Overlay.prototype.remove = function() {
    document.body.removeChild(this.el)
};

module.exports = {
    Overlay: Overlay
};
