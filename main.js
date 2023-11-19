// const niza = ["a",1,2,3,true, "bebe",5];

// for(let i= 0; i<niza.length;i++){
//      console.log(niza[i]);
// }
 
// const mapEl = niza.map((el) => {
//      if(el === 1){
//           el = 100;
//      }
//      return(el);
// })
// console.log(mapEl);

// const arr2 = [100,50,10]

// const arrSum = arr2.reduce((acc,curr) => {
//       acc= acc + curr;
//      return acc;
// });
// console.log(arrSum);

// const nizaBr = [100,15, 1,5, 105,1000, 14,2];

// const sortBr = nizaBr.sort((a,b) => {
//      if(a<b){
//           return -1;
//      } else if (a>b){
//           return 1;
//      } else if (a === b){
//           return 0;
//      }
// })
// console.log(sortBr);

// const filterBr = nizaBr.filter((el) => {
//      if(el<20){
//           return el;
//      }
// })
// console.log(filterBr);

// const Student = {
//      name: "Darko",
//      age: 25,
//      grades: [6,8,7, 5, 10, 9],
//      averGrade:() => {
//           const sumNumb = Student.grades.reduce((acc, curr) => {
//           acc = acc + curr;
//            return acc;
//           })

//           const average = sumNumb / Student.grades.length;
//          return average;
         
//      }
// }
// // console.log(Student.averGrade());


// CallBack
const IsOdd = (i) => {
     return i % 2 != 0;
}
const Isasd = (i) => {
     return i % 2 === 0;
}
const mainFunc = (niza,fun) => {
     var arrResult = [];
     for(let i of niza){
          if(fun(i)){
               arrResult.push(i);
          }
     }
     return arrResult;
}

console.log(mainFunc([1,2,3,4,5], IsOdd));
console.log(mainFunc([2,4,6,8,10,12,3], Isasd));
