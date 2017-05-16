import colorTiles from '@src/config/colors';
import alphabets from '@src/config/char';

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

export const getRandomAlphabet = (blacklist = []) => {
	const possible = alphabets.join('');
  const result = possible.charAt(Math.floor(Math.random() * possible.length));
  
	return blacklist.includes(result) ? getRandomAlphabet(blacklist) : result;
}

export const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    return array;
}
