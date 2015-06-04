(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Css = require('cl-css');

/**
 * @param {Number} zIndex Description
 * @return {Element} description
 */
function createOverlay(zIndex){
    var CSS = {
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        'background':'rgba(0,0,0,.6)',
        'z-index':zIndex || 200,
        position:'fixed',
        display:'none'
    };
    var el = document.createElement('div')
    Css(el,CSS);
    return el;
};

/**
 * Constrcutor
 * @param {Number} zIndex Description
 * @return {Element} description
 */
function Overlay(zIndex){
    var ol = this.el =  document.body.appendChild(createOverlay(zIndex));
    ol.addEventListener('touchstart touchmove touchend',function(e){
        e.preventDefault();
    });

    ol.addEventListener('touchstart click',function(e){ 
    	this.hide();
    }.bind(this));
}


/**
 * @return {void} description
 */
Overlay.prototype.show = function(){
    Css(this.el,{display:'block'});
};

/**
 * @return {void} description
 */
Overlay.prototype.hide = function(){
    Css(this.el,{display:'none'});
};

module.exports = Overlay;



},{"cl-css":2}],2:[function(require,module,exports){
/**
 * author:Vi
 * waring: getcomputedstyle is not supported under IE8
 * check http://caniuse.com/#feat=getcomputedstyle
 */


/**
 * @param {Element} el Description
 * @param {String} prop Description
 * @param {String} val Description
 * @return {void} description
 */
function Css(el, prop, val) {
    if (!el) return;
    else if (arguments.length == 2) {
        if (typeof prop == 'object') {
            setCssObj(el, prop)
        } else {
            return getCss(el, prop)
        }
    } else {
        setCss(el, prop, val)
    }
}

/**
 * @param {Element} el Description
 * @param {String} prop Description
 * @return {void} description
 */
function getCss(el, prop) {
    return getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : false;
}

/**
 * @param {Element} el Description
 * @param {String} prop Description
 * @param {String} val Description
 * @return {void} description
 */
function setCss(el, prop, val) {
    if (typeof(val) == 'string') {
        var css = prop + ":" + val + ';';
        el.style.cssText += css;
    }
}

/**
 * @param {Element} el Description
 * @param {Object} obj Description
 * @return {void} description
 */
function setCssObj(el, obj) {
    for (var key in obj) {
        setCss(el, key, obj[key]);
    }
}

typeof module != 'undefined' ? module.exports = Css : this[Css] = Css;

},{}],3:[function(require,module,exports){
var Overlay = require('../index');

var btn = document.getElementById('btn');

btn.onclick = function(){
	var ol = new Overlay();
	ol.show();
}



},{"../index":1}]},{},[3]);
