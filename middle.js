
//https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
    let count = 0;
    let last;

    A.sort();

    for (let i = 0; i < A.length; i++) {
        if (A[i] === last) {
            count++;
            continue;
        } 
        if (count % 2) return last;
        last = A[i];
        count = 1;
    }
    return last;
}

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

//https://www.codewars.com/kata/525f50e3b73515a6db000b83
function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
}

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
function isOdd(num) { return num & 1; };
function solution(str){
  let arr = str.match(/.{1,2}/g);
   if (str.length == 0) {
     return []
   } else if(isOdd(str.length) == 1) {
      let x = str + "_"
      return arr = x.match(/.{1,2}/g);
   } else {
      return arr;
   }
  
}
function solution(str) {
  if (str.length == 0) {
    return []
  };
  
  return (str.length % 2 ? str + '_' : str).match(/../g);
}

//https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

//https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number){ 
  let sum = 0; 
  for (let i = 0; i < number; ++i) { 
    if (i % 3 == 0 || i % 5 == 0)
    { sum += i; } } 
  return sum }

//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
function duplicateCount(text){
  let result = 0,
      soltingObject = {};
  text.toLowerCase().split('').map(str => {
      if (!soltingObject.hasOwnProperty(str)) {
        soltingObject[str] = 0;
      } else {
        if (soltingObject[str] === 0) {
          result += 1;
        }
        soltingObject[str] = soltingObject[str] + 1;
      }
  });
  return result;
}
//https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
    var x = 0,
        o = 0;

    for (var i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() == "x") {
            x++;
        } else if (str[i].toLowerCase() == "o") {
            o++;
        }
    }
    return x == o;
}

//https://www.codewars.com/kata/56269eb78ad2e4ced1000013
function findNextSquare(sq){
    var x;
    var y;
    if(Math.sqrt(sq)%1 ===0){
         x=Math.sqrt(sq)
         y=x+1
    }else{
        return -1;
    }
    return y*y;
}
findNextSquare(625) 
function findNextSquare(sq){
    return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
}

//https://www.codewars.com/kata/52774a314c2333f0a7000688
function validParentheses(parens){
   var tokenizer = /[()]/g,
       count = 0,
       token;
   while(token = tokenizer.exec(parens), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}
