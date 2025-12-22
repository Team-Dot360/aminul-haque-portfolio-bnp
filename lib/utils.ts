// Convert English numbers to Bangla
export const toBanglaNumber = (num: number | string): string => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(char => {
    const digit = parseInt(char);
    return isNaN(digit) ? char : banglaDigits[digit];
  }).join('');
};

