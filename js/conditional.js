/*a=10
b=20
c=30
if(a>b&&a>c){
    console.log("a is greater")
}
else if(b>a&&b>c){
    console.log(" b is greater")
}
else{
    console.log("c is greater")
}*/
/*let age=Number(prompt("enter your age ",18));
let message=(age<3)?alert("hello Kid !"):(age<18)?alert("hello"):
(age>100)?alert(" Unusual age "):alert("empty")*/
let a=10
let b=20
let c="10"

switch(c){
    case 10:
    case 20:
    case 30:
        console.log("statement")
        break
    case "10":
        console.log("string")
        break
    default:
        console.log(" no condition matched")
}