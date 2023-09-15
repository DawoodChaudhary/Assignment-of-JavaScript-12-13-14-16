///IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION | JAVASCRIPT


///Q1
// let text1=prompt("Enter any value or alphabat")
// if(text1>="A"&&text1<="Z")
// document.write("is an Uppercase character <br>");
// else if(text1>="a"&&text1<="z") 
// document.write("is an Lowercase character <br>");
// else document.write("is a number <br>");

///Q2
// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else if(parseInt(num2, 10) > parseInt(num1, 10)) 
// {console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else {console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }

// Q3 
// let text3 = prompt("Enter any digit value ")
   
// if (text3 > 1 )
//           document.writeln(" is positive number <br>");
//         else if (tevowelst3 < -1)
//           document.writeln(" the value is negtive <br>");
//         else 
//         document.writeln(" the value is zero <br>");

// Q4 
// let vowels = prompt("Enter any alphabet")

// if (vowels == 'a' || vowels == 'e' || vowels == 'i' ||
// vowels == 'o' || vowels == 'u')
//           document.write(" this is a vowel <br>");
//         else 
//           document.write(" this is not a vowel <br>");

// Q5 

// let text;
// let email = prompt("Enter your email")
// let password = prompt("enter your password")
// if (email == "abc@gmail.com"&&password =="hello")
//           document.write("Correct! The password you entered matches the original password<br>");
//         else 
//           document.write("Incorrect password<br>");

//  Q6 

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

//   Q7 

// let time = prompt("Enter any time 4 digit :1200")

// if (time >= 0000 && time <=1200)
//           document.write(" Good Morning <br>");
//         else if (time >= 1200 && time <= 1700)
//           document.write(" Good Afternoon  <br>");
//         else if (time >= 1700 && time <= 2100)
//          document.write(" Good Evening <br>")
//          else document.write(" Good Night <br>"

// Assignment # 13-15
// JAVASCRIPT
// Arrays | JAVASCRIPT

//Q1 AND Q2
// let Name=[];
// let data=prompt("Name");

//Q3
// let str ="ABCDEFGHIJKLMNOPQRSTUVWxYZ";
// console.log([...str]);

//Q4
// let num =new Array(1,2,3,4,5,6,7,8,9,10);
// console.log(num);

//Q5
// const arr1 =[true,false,true,false,true,false];
// console.log(arr1);

//Q6
// let Mixed=[1,2,3,4,5,A,B,C,D,E,True,False,"mixed","Array"];
// console.log(Mixed);

//Q7

//  let Q =["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// for (Q of Q)document.write(Q)
       //OR
// var Qty =["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// var rows=8;
// var cols=1;
// var Qty=new Array(rows);
// for(var i=0 ; i<rows; i++){
//  Qty[i]=new Array(cols);   
// }
// for (var i=0; i<rows; i++){
// for(var j=0; j<cols; j++){
//  document.write(Qty[i][j]+"");
// }
// document.write("<br>");
// }

//Q8
// function mystudent1(){
// document.write("Score of Michael is 320 .Percentage:64%");
// document.write("<br>");}

// function mystudent2(){
// document.write("Score of John is 230 .Percentage:46%");
// document.write("<br>");}

// function mystudent3(){
// document.write("Score of Tony is 480 .Percentage:96%");
// document.write("<br>");

// }
// mystudent1();
// mystudent2();
// mystudent3();


//Q10
//  const array1=[320,230,480,120];
//  array1.sort();
//  document.write(array1);

// document.write("ORDERED SCORE OF STUDENTS "+array1+"<br/>");

// const array2=[120,230,320,480,];
// array2.sort();
// document.write(array2);

// document.write("SCORE OF STUDENTS "+array2+"<br/>");

//Q11
// let cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("cities list:"+"<br>"+cities);
// cities.splice(0,2);
// cities.pop();
// document.write("<br>"+" Selected cities list:"+"<br>"+cities);


//Q12
// let arr=["This","is","my","cat"]
// let stringarr=arr.join(",");
// document.write(stringarr);
// document.write("<br>");
// let arr1=["This","is","my","cat"]
// let stringarr1=arr.join("");
// document.write(stringarr1);

//Q13
let comp=["Keyboard","Mouse","Printer","Moniter"];
document.write(" OUT:"+comp+"<br>");
comp.slice(1,1);
document.write(" OUT:"+comp+"<br>");