// alert(typeof 5); //number object
// alert(typeof "String"); //string object
// alert(typeof "true"); //boolean object

// Number("5"); //Raqamga aylantirih
// String(5); //Raqamga aylantirih
// Boolean("5"); //Booleanga aylantirih

// alert(typeof typeof 123); //operator
// 5+4//дврунарный
// "Javoxir" + 5 //Javoxir5
// "2" + 5 //25
// 4+5 //9
//+ operatsiyasi konkatinatsiya (so'zlarni birlashtirish) va raqami qoshkanligi uchun so'zga yani konkatinatsiya qilishka urinadi bolmasa raqamga aylantiradi

/* so'z uchun operatsiya +*/

/* raqam uchun operatsiya +, -, *,/  */

// let a = 5;
// let b = 'spam';
// let c = true;
// alert(Boolean("Javoxir")); //'' qoshtirnoq orasida nimadir bolsa u true beradi
// alert(Boolean(" ")); //'' hato bosh joy ham
// alert(Boolean("")); //bu esa false
// alert(Boolean(2)); // raqamlar true beradi
// alert(Boolean(-2)); 
// alert(Boolean(0)); // agar raqam 0 ga teng bolmasa

// let nimadir;
// alert(nimadir); //undefined 

// function square(x) {
//     return x * x;
// }
// alert(square(6));

// console.log("Javoxir")

let point = new Object();
point.x = 5;    
point.y = 1;
point.x

//objectimiz paydo boldi 
// point.x
// let chevrolet = {x:2, y: "3", oquvchilar:{javoxir:3, abduqayyum:5}}; //bu ham object paydo qiladi
// point.x //object hususiyatini olish
// chevrolet.oquvchilar.abduqayyum //5 raqami chiqaradi
// point['x'] //object hususiyatini olishning boshqa usuli

// let massiv = new Array();
// massiv[0] = 1.2;
// massiv[1] = "JavaScript";
// massiv[2] = true;
// massiv[3] = {x:1, y:3};

// let a = new Abdu(1.3, "JavaScript", true, {x:1, y:3});
// let massiv =[1.2, "JavaScript", true, {x:1, y:3}];
// A[1] //JavaScript
// let massiv3d =[[1,2,3],[4,5,6],[7,8,9]]; 
// massiv3d[0][1]; //2


// X = prompt('X raqamini kiriting');
// X = Number(X);
// Y = prompt('Y raqamini kiriting');
// Y = Number(Y);
// alert((X + Y));

// X = prompt('X raqamini kiriting');
// X = Number(X);
// Y = prompt('Y raqamini kiriting');
// Y = Number(Y);
// let amal = prompt('Qaysi amalni bajarishni xohlaysiz Qoshish (+), Ayirish (-), Kopaytirish (*), Bolish (/):');

// let natija;
// switch (amal) {
//     case "+":
//         natija = X + Y;
//         break;
//     case "-":
//         natija = X - Y;
//         break;
//     case "*":
//         natija = X * Y;
//         break;
//     case "/":
//         natija = X / Y;
//         break;
//     default:
//         alert("Noto'g'ri amal tanlandi!");
// }
// alert("Natija: " + natija);

// let scope = "global";
// function checkScope() {
//     let scope = "local"; 
//     console.log(scope); 
// }
// checkScope();

// scope = "global";
// function checkScope() {
//     scope = "local"; 
//     console.log(scope); 
//     myscope = "local";
//     console.log(myscope);
// }
// checkScope();
// console.log(scope);
// console.log(myscope);

// let scope = "global";
// function checkScope() {
//   let scope = "local";
//   function nested(){
//     let scope = "nested";
//     console.log(scope);
//   }
//   nested();
// }
// checkScope();
// console.log(scope);

function test(o) {
  let i = 0;
  if (typeof o == "object") {
    let j = 0;
    for (let k=0; k<10; k++) {
      console.log(k);
    }
    console.log(k);
  }
  console.log(j);
}

let a = 5;
let b = a;
a = 2;
console.log(a);
console.log(b);

let m = 1;
n = m;
m[0] = 2;
console.log(n);
console.log(m);

let str = "JavaScript";
console.log(str[0]);
console.log(str);
str = str =+ 'zor dasturchi';
console.log(str);