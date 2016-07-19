function findNextSquare(sq) {
  // if (sq <= 0) return -1;
  return (Math.sqrt(sq) % 1) ? -1 : Math.pow( (Math.sqrt(sq) + 1), 2 );
  
}

console.log(findNextSquare(25));