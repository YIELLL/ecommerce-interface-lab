function generateIDs(count) {
  let ids = [];
  for (let x = 0; x < count; x++) {
    if (x === 5) {
      continue;
    }
    ids.push("ID-" + x);
  }
  return ids;
}