import colorTiles from '@src/config/colors';

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const getRandomInt = (min, max) => {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
};

export const getRandomTileColor = (blacklist = []) => {
  const randomIndex = getRandomInt(0, colorTiles.length - 1);
  const randomColor = colorTiles[randomIndex];
  return blacklist.includes(randomColor) ? getRandomTileColor(blacklist) : randomColor;
};

export const getAlphabet = (index) => {
  if (index !== 'undefined') return alphabets[index];

  return alphabets;
}
