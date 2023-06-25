const oppositesAttract = require('./oppositesAttract');

describe('oppositesAttract', () => {
  it('1 and 2 should retunr true', () => {
    expect(oppositesAttract(1,2)).toBe(true);
  });

  it('4 and 10 should return false', () => {
    expect(oppositesAttract(4,10)).toBe(false);
  });
});
