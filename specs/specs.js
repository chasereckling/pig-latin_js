describe('vowelFinder', function() {
  it('determines if a word starts with a vowel', function() {
    expect(vowelFinder('apple')).to.equal(true);
  });

  it('determines if a word starts with a consonate', function() {
    expect(!vowelFinder("hat")).to.equal(true);
  });
});

describe('isVowel', function() {
  it('adds ay to the end of a word that starts with a vowel', function() {
    expect(isVowel('apple')).to.equal("appleay");
  });
});

describe('pigLatin', function() {
  it('will call the isVowel function and add ay to the end of a word', function() {
    expect(pigLatin('apple')).to.equal('appleay');
  });
});

describe('isConsonant', function(){
  it("moves the first set of consonants up to the first vowel, to the end of the word and adds 'ay'", function(){
    expect(isConsonant('car')).to.equal('arcay');
  });

  it("words that contain 'qu' will have 'qu' moved to the end of the word and add 'ay'", function(){
    expect(isConsonant('quiet')).to.equal("ietquay")
  });
});
