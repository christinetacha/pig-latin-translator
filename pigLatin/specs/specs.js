describe('pigLatin', function() {

  it("will remove the first letter of a word and place it at the end of the word and add 'ay'", function() {
    expect(pigLatin("Pig")).to.equal("igPay");
  });

  it("will determine whether a word begins with a vowel or not", function() {
    expect(pigLatin("unicorn")).to.equal("unicornay");
  });
});

describe('pigLoop', function() {

  it("will run a loop until a vowel in a word is reached and 'ay' is added to the end", function() {
    expect(pigLoop("steal")).to.equal("teals");
  });
});
