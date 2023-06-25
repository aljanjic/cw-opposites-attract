const oppositesAttract = require('./oppositesAttract');

describe('oppositesAttract', () => {
  it('1 and 2 should retunr true', () => {
    expect(oppositesAttract(1,2)).toBe(true);
  });
});
