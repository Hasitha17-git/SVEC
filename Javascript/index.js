
// var name="hasi";
// var age=20;

// if(age>18){
//    var name="Hasi A";
//    console.log(name);
// }
// console.log(name);

 //Objects
//  

//Array
// let employees=["hasi","suppi","maggi"]
// console.log(employees[1])
//alerts
// alert("registration is completed successfully")
// let num1=prompt("Enter number1");
// console.log(num1)
// confirm("are you sure to exit")
// console.log("welcome");
// console.info("for information");
// console.warn("warning");
// console.error("name is not defined")

//speread operator
// let external_marks=[23,33,54,44,32,33]
// let internal_marks=[12,3,14,16,17]
// let results=[23,34,external_marks]
// let final=[12,42657,16776,...external_marks,...internal_marks]
// console.log(results)
// console.log(final)
//rest parameter
// function addition(x,y,...remainData){
//     // console.log(x,y)
//     console.log(x);
//     console.log(y);
//     console.log(remainData)
//     console.log(typeof(remainData))
// }
// console.log(addition(2,3,235,673721,1567811))
///Destructuring of array
// l
///Destructuring of object
// let employee={
//     uname:"varsha",
//     designation:"Junior Software Developer",
//     salary:"14LPA",
//     mobile:9762071051
// }
// let{ uname,designation,...remainList}=employee;
// console.log(uname);
// console.log(designation);
// console.log(remainList)
//Functions
// 
// setTimeout(function(){
//     console.log("welcome")
// },3000)



// (function(x=4,y=6){ 
//     return console.log(x+y)
// }) ()
// let demo=(x,y)=>{
//     return x*y
//   }
// console.log(demo(3,4))
// let employees=["jyoshna","jaswi","suppi","varsha"]
// for(let i=0;i<employees.length;i++){
//     console.log(employees[i])
// }
//for in
// for(let i in employees){
//     console.log(i)
// }
//for-of
// for(let i of employees){
//     console.log(i)
// }
//forEach

// employees.forEach(function(element,index){

//     console.log(element+" ok")
// })

//MAP FUNCTION
// let result=employees.map(function(element,index)=>{

//     return element+" k"+index
// })
// console.log(employees)
// console.log(result)