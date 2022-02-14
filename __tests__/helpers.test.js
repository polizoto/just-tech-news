const {format_date} = require('../utils/helpers');
const {format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
  });

test('format_plural() correctly pluralizes words', () => {
  
    expect(format_plural('Tiger', 2)).toBe('Tigers');
  });

test('format_plural() does not pluralize singluar words', () => {
  
    expect(format_plural('Lion', 1)).toBe('Lion');
  });


