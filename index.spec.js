const { data } = require('./data.json');
const { getDays } = require('.');

describe('getDays', () => {
  it('returns result', () => {
    expect(getDays(data)).toEqual([
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ]);
  });
});
