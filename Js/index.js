//////////////// 1-function //////////////////////////////

const average = (x = 0, y = 0, z = 0) => (x + y + z) / 3;

const group1 = average(90, 80, 170);
const group2 = average(90, 88, 160);

console.log(`1-guruh o'rtacha bali ${group1} ga teng`);
console.log(`2-guruh o'rtacha bali ${group2} ga teng`);

function toMatch(a, b) {
  if (a > b) {
    return `1-guruh o'rtacha bali katta`;
  } else if (a === b) {
    return `ikkala guruh o'rtacha bali teng`;
  } else {
    return `2-guruh o'rtacha bali katta`;
  }
}

console.log(toMatch(group1, group2));

//////////////// 2-function ////////////////////

let common = 2500;

function percentage(students) {
  const x = (students * 100) / 2500;
  return x;
}

console.log(`23-ta talaba ${percentage(23)} %`);
console.log(`27-ta talaba ${percentage(27)} %`);
