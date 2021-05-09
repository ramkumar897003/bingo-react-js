export function shuffle(array = []) {
  if (!array.length) {
    return [];
  }

  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return [
    [...array.slice(0, 5)],
    [...array.slice(5, 10)],
    [...array.slice(10, 15)],
    [...array.slice(15, 20)],
    [...array.slice(20, 25)],
  ];
}
