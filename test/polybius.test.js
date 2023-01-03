// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number parts", () => {
      const expected = "23513434112251";
      const actual = polybius("message");
      expect(actual).to.equal(expected);
    });
    
    it("should translate both 'i' and 'j' to 42", () => {
      const expected = "424222221351";
      const actual = polybius("jiggle");
      expect(actual).to.equal(expected);
    })
    
    it("should leave spaces as is", () => {
      const expected = "2345 23513434112251";
      const actual = polybius("my message");
      
      expect(actual).to.equal(expected);
    })
  })
       
  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const expected = "message"
      const actual = polybius("23513434112251", false)
      
      expect(actual).to.equal(expected);
    })
    
    it("should translate 42 to both 'i' and 'j'", () => {
      const actual = polybius("424222221351", false);
      
      expect(actual).to.include("i");
      expect(actual).to.include("j");
    })
       
    it("should leave spaces as is", () => {
      const expected = "my message";
      const actual = polybius("2345 23513434112251", false);
      
      expect(actual).to.equal(expected);
    })
    
    it("should return false if the length of all numbers is odd", () => {
      const actual = polybius("345 23513434112251", false);
      
      expect(actual).to.be.false;
    })
  })
})
