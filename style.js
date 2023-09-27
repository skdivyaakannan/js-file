// array
const arr=['cat','bat','mat','rat'];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    // o/p:['cat','bat','mat','rat']

}
// slice
const users=['one','two','three','four','five','six'];
console.log(users.slice(1,4));
// o/p:['two','three','four']

// splice
const user=['one','two','three','four','five','six'];
console.log(user.splice(2,2,"hii"));
// o/p:['one','hii','four','five','six'];

// for..in
const arr1=['one','two','three','four','five','six'];
for(num in arr1){
    console.log(num);
    
}
// o/p:[0,1,2,3,4,5]


//for of
const array=['one','two','three','four','five','six'];
for(nums of array){
    console.log(nums);
}
// o/p:['one','two','three','four','five','six'];

// for..each
const b=['one','two','three','four','five','six'];
b.forEach(function(e){
    console.log(e);
})
// o/p:['one','two','three','four','five','six'];

//object accessing
const a={
    name:'divyaa',
    age:21,
    gender:'female'

};
console.log(a);/* "name": "divyaa",
                  "age": 21,
                  "gender": "female"*/
console.log(a.name); // divyaa
console.log(a.age); // 21
console.log(a.gender); // female
