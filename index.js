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


