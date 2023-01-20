/*//Task-1-clone array with array methods . min: 2 case


//#case1
// Cloning array using spread

const oldArray= ["1", "2", "3"];

const clonedArray= ["0", ...oldArray, "4"];

//#case2
// Cloning array using slice
console.log(clonedArray);

let array = ['JavaScript', 'Copy', 'Array', 'Example'];

console.log(array.slice());

*/







//Task-2 js sort method

/*
let arr = [5,11,4,9,-4,-8,2,10]
console.log(arr.sort())
*/
/*
let arr = [5,11,4,9,-4,-8,2,10]
arr.sort((a,b)=> a-b)
console.log(arr)


*/



//Task-3

/*

const arr1 = [5,11,4,9,-4,-8,2,10];
const yay =[];
for(let i = 0; i < arr1.length; i++){
    for(let j = i+1; j < arr1.length; j++){
        if(arr1[i] > arr1[j]){
            yay[i] = arr1[j];
            arr1[j] = arr1[i];
            arr1[i] = yay[i];
        }
    } 
}
console.log(arr1);

*/









//Task-4. Write a JavaScript program to filter array element type string. [1,true, 'hello'] => ['hello]
/*

let x = [1,true, 'hello'];
let y = x.filter((e)=> {
        return 'hello'
})
console.log(y)
*/




//Task5. Write a JavaScript function to remove a specific element from an array. function([1,2,4,5,6],4) => [1,2,5,6]

/*
function remove_array_element(array, n)
 {
   let index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([1,2,4,5,6],4));

*/




 //Task 6. Remove all element in array without methods and function. [1,2,3,4] =>
/*
 const numbers = [1, 2, 3];

 const index = numbers.indexOf(3);
 if (index > -1) {
   numbers.splice(index[1, 2, 3]);
 }
 
 console.log(numbers); 

*/






//Tassk 7. Clean name ['hello', 'ali_almammadov','wEb_3.1']=> ['Hello', 'Ali Almammadov','Web 3.1']

/*
const arr = [' hello','ali_almammadov','wEb_3.1'];
const newArr = arr.join(' ').trim().toLowerCase().split(' ');
for(let i = 0; i < newArr.length; i++){
    newArr[i] = newArr[i].replaceAll('_', ' ');
}
const cleanArr = newArr.map((str) =>{
    str = str.split(' ');
    for(let i = 0; i< str.length; i++){
      str[i] =  str[i].replace(str[i][0], str[i][0].toUpperCase());
    }
    return str.join(' ');
});
console.log(cleanArr);


*/





//Task 8 Capitalize first letter ['salam", sagol","yaxsi']=> ['Salam','Sagol", "Yaxsi']

/*

 const arr = ['salam','sagol','yaxsi'];
const newArr = arr.map((word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1));
console.log(newArr);
    
   */ 






// Task 9. Use the .map() method on the heros array to return a new array.

/*
let firstNames = ["super", "spider", "ant", "iron"]
let lastName = "man";

let fullNames = firstNames.map(firstName => firstName + lastName);

console.log(fullNames);

*/







// Task 10. Sum array element and index. [4,5,6]=>[4,6,8]
/*
const arr = [4,5,6];
const newArr = arr.map((e, i)=> e+i);
console.log(newArr);
*/





// Task 11. Array element multiple 2. [2,3,4]=> [4,6,8]
/*
const arr = [2,3,4];
const newArr = arr.map((e=> e*2));
console.log(newArr);
*/



// Task 12. Sum array element with array methods [1,4,5] => 10
/*
const arr = [1,4,5];
 let sum = 0;
  arr.map((e => sum=sum+e));
 console.log(sum);

*/


// Task 13. Sum array element without ayn methods = [1,4,5] => 10
 /*
const a =[1,4,5];
let sum = 0;
for(let i = 0; i<a.length; i++){
    sum += a[i];
 }
 console.log(sum);
 */