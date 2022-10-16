const hand1 = "11123";
const hand2 = "12131";
const hand3 = "11123455";
const hand4 = "11122334";
const hand5 = "11234";
const hand6 = "123456";
const hand7 = "11133355577";
const hand8 = "11223344556677";
const hand9 = "12233444556677";
const hand10 = "11234567899";
const hand11 = "00123457";
const hand12 = "0012345";
const hand13 = "11890";
const hand14 = "99";
const hand15 = "111223344";

function advanced (hand) {
  const sum = hand.length;
  const card = Array(10).fill(0);
  for (let i = 0; i < sum; i++) {
    const v = parseInt(hand[i]);
    card[v]++;
  }

  const invalid = {};
  for (let i = 0; i < 10; i++) {
    if (card[i] >= 2) {
      card[i] -= 2;
      if (isCompleteHand(card, sum - 2, invalid)) {
        return true;
      }
      card[i] += 2;
    }
  }
  return false;
}

function isCompleteHand (card, sum, invalid) {
  if (sum === 0) {
    return true;
  }

  const key = card.join(',');
  if (key in invalid) {
    return invalid[key];
  }

  for (let i = 0; i < 10; i++) {
    if (card[i] >= 3) {
      card[i] -= 3;
      if (isCompleteHand(card, sum - 3, invalid)) {
        return true;
      }
      card[i] += 3;
    }

    if (isCompleteByRun(i - 2, i - 1, i, card, sum, invalid)) {
      return true;
    }

    if (isCompleteByRun(i - 1, i, i + 1, card, sum, invalid)) {
      return true;
    }

    if (isCompleteByRun(i, i + 1, i + 2, card, sum, invalid)) {
      return true;
    }
  }
  invalid[key] = false;
  return false;
}

function isCompleteByRun (i, j, k, card, sum, invalid) {
  if (0 <= i && k <= 9 && card[i] > 0 && card[j] > 0 && card[k] > 0) {
    card[i]--;
    card[j]--;
    card[k]--;
    if (isCompleteHand(card, sum - 3, invalid)) {
      return true;
    }
    card[i]++;
    card[j]++;
    card[k]++;
  }
  return false;
}

const tests = [
  [ advanced(hand1) , true ],
  [ advanced(hand2) , true ],
  [ advanced(hand3) , true ],
  [ advanced(hand4) , true ],
  [ advanced(hand5) , true ],
  [ advanced(hand6) , false ],
  [ advanced(hand7) , true ],
  [ advanced(hand8) , true ],
  [ advanced(hand9) , true ],
  [ advanced(hand10), false ],
  [ advanced(hand11), false ],
  [ advanced(hand12), false ],
  [ advanced(hand13), false ],
  [ advanced(hand14), true ],
  [ advanced(hand15), false ],
];
tests.forEach(([ actual, expected ]) => console.log(`actual: ${actual}, expected: ${expected} =>`, actual === expected));

