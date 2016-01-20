describe('pigLatin', function() {
  it("will remove the first letter of a word and place it at the end of the word", function() {
    expect(pigLatin("Pig")).to.equal("igP");
  });
});
