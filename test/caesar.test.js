// Write your tests here!
const {caesar} = require('../src/caesar')
const expect = require("chai").expect

describe("caesar", () => {
    describe("shift values", () => {
        it("should return false if the shift value is equal to 0", () => {
            const expected = false;
            const actual = caesar("input", 0, true);
            expect(actual).to.equal(expected);
        })

        it("should return false if the shift value is less than -25", () => {
            const expected = false;
            const actual = caesar("input", -26, true);
            expect(actual).to.equal(expected);
        })

        it("should return false if the shift value is greater 25", () => {
            const expected = false;
            const actual = caesar("input", 26, true);
            expect(actual).to.equal(expected);
        })
    });

    describe("encoding a message", () => {
        it("should encode a message by shifting the letters", () => {
            const expected = "phvvdjh";
            const actual = caesar("message", 3);
            expect(actual).to.equal(expected);
        })

        it("should ignore capital letters", () => {
            const expected = "phvvdjh";
            const actual = caesar("MeSsaGe", 3);
            expect(actual).to.equal(expected)
        })

        it("should maintain space and other nonalphabetic symbols in the message", () => {
            const expected = "d phvvdjh.";
            const actual = caesar("a message.", 3);
            expect(actual).to.equal(expected);
        })

        it("should appropriately handle letters at the end of the alphabet", () => {
            const actual = caesar("zebra magazine", 3);
            const expected = "cheud pdjdclqh";
            expect(actual).to.equal(expected);
        });

        it("should allow for a negative shift that will shift to the left", () => {
            const actual = caesar("zebra magazine", -3);
            const expected = "wbyox jxdxwfkb";
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by shifting the letters in the opposite direction", () => {
            const message = "phvvdjh";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "message";
        
            expect(actual).to.equal(expected);
        });
        
        it("should leaves spaces and other symbols as is", () => {
            const message = "d phvvdjh.";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "a message.";
        
            expect(actual).to.equal(expected);
        });
        
        it("should ignore capital letters", () => {
            const message = "D pHvvdjh";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "a message";
        
            expect(actual).to.equal(expected);
        });
        
        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "cheud pdjdclqh";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "zebra magazine";
        
            expect(actual).to.equal(expected);
        });
        
        it("should allow for a negative shift that will shift to the left", () => {
            const message = "wbyox jxdxwfkb";
            const shift = -3;
            const actual = caesar(message, shift, false);
            const expected = "zebra magazine";
        
            expect(actual).to.equal(expected);
        });
    });
})