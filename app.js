let friends = ['Sydni', 'Hafeeza', 'Jason', 'Josh', 'Ana'];

for (let i = 0; i < friends.length; i++) {
  const friend = friends[i];
  console.log(`${friend.toUpperCase()}:`);

  function linesOfCodeSong(
    count = 99,
    refrain = 'line',
    refrain2 = 'code',
    prechorus = 'strikes one out, clears it all out',
    chorus = 'code in the file'
  ) {
    for (let j = count; j > 0; j--) {
      if (count === 2) {
        console.log(
          `${count} ${refrain}s of ${chorus}, ${count} ${refrain}s of ${refrain2}; ${friend} ${prechorus}, ${
            count - 1
          } ${refrain} of ${chorus}`
        );
        count--;
      } else if (count === 1) {
        console.log(
          `${count} ${refrain} of ${chorus}, ${count} ${refrain} of ${refrain2}; ${friend} ${prechorus}, no more ${refrain}s of ${chorus}`
        );
      } else {
        console.log(
          `${count} ${refrain}s of ${chorus}, ${count} ${refrain}s of ${refrain2}; ${friend} ${prechorus}, ${
            count - 1
          } ${refrain}s of ${chorus}`
        );
        count--;
      }
    }
  }

  linesOfCodeSong(3);
}
