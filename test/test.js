var expect = chai.expect;

describe('Overlay', function() {
    
  it('does cretate', function() {
	var ol = new Overlay();
	expect(ol.el).to.equal(document.getElementsByClassName('cl-overlay')[0]);
	ol.remove();
  });
});
