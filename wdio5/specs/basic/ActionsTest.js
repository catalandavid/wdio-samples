let expect = require('chai').expect;

describe.only("actions", () => {

    before(function() {
        browser.url("/dnd.html");
    });

    // * Only works on FF for now
    // * Requires a web page with drag and drop elements
    it('should execute a sequence of mouse actions', function () {
        let dragElementLocation = $(".drag-element").getLocation();
        let dropElementLocation = $(".drop-element").getLocation();

        browser.performActions([{
            "type": "pointer",
            "id": "drag-n-drop",
            "parameters": {"pointerType": "mouse"},
            "actions": [
                {"type": "pointerMove", "duration": 0, "x": dragElementLocation.x+10, "y": dragElementLocation.y+10},
                {"type": "pointerDown", "button": 0},
                {"type": "pause", "duration": 500},
                {"type": "pointerMove", "duration": 1000, "origin": "pointer", "x": dropElementLocation.x+10, "y": dropElementLocation.y+10},
                {"type": "pointerUp", "button": 0}
            ]
        }]);

        // Release actions
        browser.releaseActions();

        expect($(".drop-element").getText()).to.equal("Dropped");

        let dragElementNewLocation = $(".drag-element").getLocation();

        expect(dragElementNewLocation.x).to.be.gt(dragElementLocation.x);
        expect(dragElementNewLocation.y).to.be.gt(dragElementLocation.y);
    });

});
