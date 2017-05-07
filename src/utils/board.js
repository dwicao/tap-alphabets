import colorTiles from '@src/config/colors';

export const getRandomInt = (min, max) => {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
};

export const getRandomTileColor = (blacklist = []) => {
  const randomIndex = getRandomInt(0, colorTiles.length - 1);
  const randomColor = colorTiles[randomIndex];
  return blacklist.includes(randomColor) ? getRandomTileColor(blacklist) : randomColor;
};
