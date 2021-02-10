const values = [1, 2, 3, 4];

function removeOddValues(value) {
  return value % 2 === 0;
}

values.filter(removeOddValues);

values.filter((value) => {
  return value % 2 === 0;
});

values.filter((value) => value % 2 === 0);

values.filter(value => value % 2 === 0);
