const values = [1, 2, 3, 4];

values.filter(filterEvenValues);

function filterEvenValues(value) {
  return value % 2 === 0;
}

values.filter((value) => {
  return value % 2 === 0;
});

values.filter((value) => value % 2 === 0);

values.filter(value => value % 2 === 0);
