export const instrumentBoxColors = [
  '#E7A95C',
  '#84cc16',
  '#D95364',
  'bg-teal-500',
  '#5BB194',
  '#CD64DE',
  '#8F5EF0',
  '#0ea5e9',
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
