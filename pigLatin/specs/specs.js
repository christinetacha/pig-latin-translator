describe('pigLatin', function() {
  it("will remove the first letter of a word and place it at the end of the word and add 'ay'", function() {
    expect(pigLatin("Pig")).to.equal("igPay");
  });
//   it("will add 'ay' to the end of a word", function() {
//     expect(pigLatin("Pig")).to.equal("igPay");
//   });
});
