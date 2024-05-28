var a = 50;
let b = 60;
const c = 70;

// temporal dead zone

let name = "kaveri";
function Test() {
  console.log("Hii from Test");
}
let arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let obj = { name: "kaveri", roll: 340, company: "Techvol" };

// console.log(obj.name);
// console.log(obj.company);

for (let x in obj) {
  console.log(x, obj[x]);
}

for (let x in arr) {
  console.log(arr[x]);
}

for (let ele of arr) {
  console.log(ele);
}

console.log("printing from while loop");
let i = 0;
while (i < 4) {
  console.log(arr[i]);
  i++;
}