export const instrumentBoxColors = [
  '#E7A95C',
  '#84cc16',
  '#D95364',
  '#ec4899',
  '#10b981',
  '#CD64DE',
  '#8F5EF0',
  '#0ea5e9',
<<<<<<< HEAD
  '#FF8684',
  '#9F9FA1',
=======
  // '#202124',
  // '#FF8684',
  // '#9F9FA1',
>>>>>>> 2588f00 (Added tutorial section)
];

export const getWordInitials = (word: string) => {
  const wordArr = word.split(' ');
  return (word.split(' ')[0].charAt(0) + word.split(' ')[wordArr.length - 1].charAt(0)).toUpperCase();
};

export function readingTimeInMin(text = ' ') {
  const wordsPerMinute = 250; // Average case.

  let textLength = text.trim().split(/\s+/).length; // Split by words
  let value = Math.ceil(textLength / wordsPerMinute);
  return value;
}

export function formatDate(date: Date | string) {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options as any);
}
