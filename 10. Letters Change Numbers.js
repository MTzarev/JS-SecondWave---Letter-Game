function lettersChangeNumbers(input) {
  let income = input.split(` `);
  let newArr = [];

  for (let i = 0; i < income.length; i++) {
    let current = income[i];
    let first = current[0];
    let last = current[current.length - 1];
    let num = Number(current.slice(1, current.length - 1));

    let letterFirst = first.toLowerCase();
    let letterLast = last.toLowerCase();
    let positionFirst = letterFirst.charCodeAt(0) - `a`.charCodeAt(0) + 1;
    let positionLast = letterLast.charCodeAt(0) - `a`.charCodeAt(0) + 1;

  if (first === first.toUpperCase()) {
      num = num / positionFirst;
    } else {
      num = num * positionFirst;
    }

  if (last === last.toUpperCase()) {
      num = num - positionLast;
    } else {
      num += positionLast;
    }
newArr.push(num);
  }
console.log(newArr.reduce((a, b) => a + b).toFixed(2));
}
lettersChangeNumbers('P34562Z q2576f H456z');
