/*
  sort the map with value,
  if the values are the same, 
  sort by the key alphabetically 
*/
var map = new Map();

map.set("orange", 10);
map.set("apple", 5);
map.set("banana", 20);
map.set("cherry", 10);
map.set("aiyu", 20);

let sorted = [...map.entries()].sort(function (a, b) {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
});

for (let [key, value] of sorted) {
  // get data sorted
  console.log(key + " " + value);
}
