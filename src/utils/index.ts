export const getWordInitials = (word: string) => {
  const wordArr = word.split(' ');
  return (word.split(' ')[0].charAt(0) + word.split(' ')[wordArr.length - 1].charAt(0)).toUpperCase();
};
