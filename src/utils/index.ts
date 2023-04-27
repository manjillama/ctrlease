export const instrumentBoxColors = [
  'bg-amber-400',
  'bg-fuchsia-400',
  'bg-red-500',
  'bg-teal-500',
  'bg-emerald-500',
  'bg-purple-500',
  'bg-cyan-500',
  'bg-rose-400',
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
