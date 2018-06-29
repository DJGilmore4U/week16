var expect = require("chai").expect;
var titleize = require("../titleize");

describe("Titleize", function() {
  it("to capitalize initial letter of each word in input", function() {
    expect(titleize("mr and mrs smith")).to.equal("Mr. And Mrs Smith");
  });

  it("to append period to leading titles", function() {
    expect(titleize("dr dolittle")).to.equal("Dr. Dolittle");
  });

  it("to not change properly cased strings", function() {
    expect(titleize("Mr. And Mrs. Smith")).to.equal("Mr. And Mrs. Smith");
  });

  it("to add periods to properly capitalized titles", function() {
    expect(titleize("Mr Smith")).to.equal("Mr. Smith");
  });

  it("to properly case mixed case strings", function() {
    expect(titleize("Mr. SmItH")).to.equal("Mr. Smith");
  });
});
