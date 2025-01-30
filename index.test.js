const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles normal case', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe('three past two');
  });

  it('Handles normal case', () => {
    const timeInWords = convertTimeToWords('15:03');
    expect(timeInWords).toBe('three past three');
  });

  it('Handles normal case', () => {
    const timeInWords = convertTimeToWords('18:45');
    expect(timeInWords).toBe('quarter to seven');
  });

  it('Handles normal case', () => {
    const timeInWords = convertTimeToWords('18:00');
    expect(timeInWords).toBe('six o\'clock');
  });
});
