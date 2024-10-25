
const arr = [1, 4, 5, 9, 10];

1- 1, 2-4, 3-9, 4-16, 5-25, 6-36

num = 9

low = 1; //3
high = 9; // 4

median = l+((h-l)/2); // 5*5 = 25 // 2

logN => Binary Search log(10)8

empId , name , date 





function isValidSqr(currNum) {
  for (let i = 1; i * i <= currNum; i++) {
    if (i * i === currNum) {
      return true;
    }
  }
  return false;
}



const validArr = arr.filter(isValidSqr);
console.log("validArr:::", validArr);
