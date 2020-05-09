let friends = ['Sydni', 'Hafeeza', 'Charles', 'Josh', 'Ana'];

for (let i = 0; i < friends.length; i++) {
  const name = friends[i];
  console.log(name);

  function linesOfCodeSong(
    count = 99,
    refrain = 'line',
    refrain2 = 'code',
    prechorus = 'strikes one out, clears it all out',
    chorus = 'code in the file'
  ) {
    for (let i = count; i > 0; i--) {
      console.log(
        `${count} ${refrain}s of ${chorus}, ${count} ${refrain}s of ${refrain2}; ${name} ${prechorus}, ${
          count - 1
        } ${refrain}s of ${chorus}`
      );
      count--;
      if (count == 2) {
        console.log(
          `${count} ${refrain}s of ${chorus}, ${count} ${refrain}s of ${refrain2}; ${name} ${prechorus}, ${
            count - 1
          } ${refrain} of ${chorus}`
        );
        console.log(
          `${count - 1} ${refrain} of ${chorus}, ${
            count - 1
          } ${refrain} of ${refrain2}; ${name} ${prechorus}, no more ${refrain}s of ${chorus}`
        );
        break;
      }
    }
  }

  linesOfCodeSong();
}
