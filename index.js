/**
 * Arrange passengers in a plane.
 * Rules:
 * Always seat passengers starting from	the	front row to	back, starting from	the	left to	the	right.
 * Fill aisle seats first followed by	window seats	followed by	center seats (any order	in center seats).
 * @param {Array} input 2D array representing blocks of seats [rows, columns]
 * @param {Number} passengers number of passengers. This also represents the number of passengers. e.g. 3 passengers: passenger 1, passenger 2, passenger 3.
 * @returns {Array} 2D array representing the seat for each passenger
 */
function arrangePassengers(input, passengers) {
  let seat = 1;
  // create an array containing an empty array for each block
  let assignedSeats = input.map((block) => []);
  let aisleSeats = 0;

  // O(n)
  for (let i = 0; i < input.length; i++) {
    if (i !== input.length - 1 && i !== 0) {
      aisleSeats += 2 * input[i][1];
    } else {
      aisleSeats += input[i][1];
    }
  }
  // O(1)
  let windowSeats = input[0][1] + input[input.length - 1][1];

  // fill the aisle seats first
  // O(n*n)
  while (aisleSeats > 0 && seat <= passengers) {
    // O(n)
    for (let i = 0; i < input.length; i++) {
      const block = input[i];
      //   console.log(input[i][1] + "" + assignedSeats[i].length);
      if (
        assignedSeats[i].length < input[i][1] * 2 &&
        i !== input.length - 1 &&
        i !== 0
      ) {
        // console.log(assignedSeats[i].length, input[i][1]);
        assignedSeats[i].push(seat);
        aisleSeats--;
        seat++;
        // if the block is not the first or last block, there is 2 aisle seats, so add one more
        assignedSeats[i].push(seat);
        aisleSeats--;
        seat++;
      } else if (
        assignedSeats[i].length < input[i][1] &&
        (i === input.length - 1 || i === 0)
      ) {
        assignedSeats[i].push(seat);
        aisleSeats--;
        seat++;
      }
    }
  }
  // fill the window seats

  let leftWindowSeats = input[0][1];
  let rightWinndowSeats = input[input.length - 1][1];
  // O(n)
  while (windowSeats > 0 && seat <= passengers) {
    if (leftWindowSeats > 0) {
      assignedSeats[0].push(seat);
      windowSeats--;
      seat++;
      leftWindowSeats--;
    }
    if (rightWinndowSeats > 0) {
      assignedSeats[input.length - 1].push(seat);
      windowSeats--;
      seat++;
      rightWinndowSeats--;
    }
  }
  // fill the rest of the seats
  // O(n*n)
  while (seat <= passengers) {
    for (let i = 0; i < input.length; i++) {
      const block = input[i];
      if (input[i][0] * input[i][1] > assignedSeats[i].length) {
        assignedSeats[i].push(seat);
        seat++;
      }
    }
  }

  return assignedSeats;
}

module.exports = { arrangePassengers };
