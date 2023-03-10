"use strict";
const assert = require("assert");
const expect = require("chai").expect;
const { numberToString } = require("../index");

describe("Number to String Tests", () => {
  it("should be able to process a string", async () => {
    const result = numberToString("1");
    expect(result).to.equal("one");
  });
  it("Converts 0 to zero", async () => {
    const result = numberToString(0);
    expect(result).to.equal("zero");
  });
  it("Converts 5 to five", async () => {
    const result = numberToString(5);
    expect(result).to.equal("five");
  });
  it("Converts 10 to ten", async () => {
    const result = numberToString(10);
    expect(result).to.equal("ten");
  });
  it("Converts 11 to eleven", async () => {
    const result = numberToString(11);
    expect(result).to.equal("eleven");
  });
  it("Converts 15 to fifteen", async () => {
    const result = numberToString(15);
    expect(result).to.equal("fifteen");
  });
  it("Converts 50 to fifty", async () => {
    const result = numberToString(50);
    expect(result).to.equal("fifty");
  });
  it("Converts 55 to fifty-five", async () => {
    const result = numberToString(55);
    expect(result).to.equal("fifty-five");
  });
  it("Converts 74 to seventy-four", async () => {
    const result = numberToString(74);
    expect(result).to.equal("seventy-four");
  });
  it("Converts 500 to five-hundred", async () => {
    const result = numberToString(500);
    expect(result).to.equal("five-hundred");
  });
  it("Converts 550 to five-hundred-fifty", async () => {
    const result = numberToString(550);
    expect(result).to.equal("five-hundred-fifty");
  });
  it("Converts 101 to one-hundred-one", async () => {
    const result = numberToString(101);
    expect(result).to.equal("one-hundred-one");
  });
  it("Converts 112 to one-hundred-twelve", async () => {
    const result = numberToString(112);
    expect(result).to.equal("one-hundred-twelve");
  });
  it("Converts 110 to one-hundred-ten", async () => {
    const result = numberToString(110);
    expect(result).to.equal("one-hundred-ten");
  });
  it("Converts 201 to two-hundred-one", async () => {
    const result = numberToString(201);
    expect(result).to.equal("two-hundred-one");
  });
  it("Converts 213 to two-hundred-thirteen", async () => {
    const result = numberToString(213);
    expect(result).to.equal("two-hundred-thirteen");
  });
  it("Converts 555 to five-hundred-fifty-five", async () => {
    const result = numberToString(555);
    expect(result).to.equal("five-hundred-fifty-five");
  });
  it("Converts 765 to seven-hundred-sixty-five", async () => {
    const result = numberToString(765);
    expect(result).to.equal("seven-hundred-sixty-five");
  });
  it("Converts 7000 to seven-thousand", async () => {
    const result = numberToString(7000);
    expect(result).to.equal("seven-thousand");
  });
  it("Converts 7450 to seven-thousand-four-hundred-fifty", async () => {
    const result = numberToString(7450);
    expect(result).to.equal("seven-thousand-four-hundred-fifty");
  });
  it("Converts 24570 to twenty-four-thousand-five-hundred-seventy", async () => {
    const result = numberToString(24570);
    expect(result).to.equal("twenty-four-thousand-five-hundred-seventy");
  });
  it("Converts 17521 to seventeen-thousand-five-hundred-twenty-one", async () => {
    const result = numberToString(17521);
    expect(result).to.equal("seventeen-thousand-five-hundred-twenty-one");
  });
  it("Converts 56520 to fifty-six-thousand-five-hundred-twenty", async () => {
    const result = numberToString(56520);
    expect(result).to.equal("fifty-six-thousand-five-hundred-twenty");
  });
  it("Converts 746521 to seven-hundred-forty-six-thousand-five-hundred-twenty-one", async () => {
    const result = numberToString(746521);
    expect(result).to.equal(
      "seven-hundred-forty-six-thousand-five-hundred-twenty-one"
    );
  });

  it("Converts 186653 to one-hundred-eighty-six-thousand-six-hundred-fifty-three", async () => {
    const result = numberToString(186653);
    expect(result).to.equal(
      "one-hundred-eighty-six-thousand-six-hundred-fifty-three"
    );
  });
  it("Converts 999999 to nine-hundred-ninety-nine-thousand-nine-hundred-ninety-nine", async () => {
    const result = numberToString(999999);
    expect(result).to.equal(
      "nine-hundred-ninety-nine-thousand-nine-hundred-ninety-nine"
    );
  });
});
