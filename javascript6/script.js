// // alert(typeof 5); //number object
// // alert(typeof "String"); //string object
// // alert(typeof "true"); //boolean object

// // Number("5"); //Raqamga aylantirih
// // String(5); //Raqamga aylantirih
// // Boolean("5"); //Booleanga aylantirih

// // alert(typeof typeof 123); //operator
// // 5+4//дврунарный
// // "Javoxir" + 5 //Javoxir5
// // "2" + 5 //25
// // 4+5 //9
// //+ operatsiyasi konkatinatsiya (so'zlarni birlashtirish) va raqami qoshkanligi uchun so'zga yani konkatinatsiya qilishka urinadi bolmasa raqamga aylantiradi

// /* so'z uchun operatsiya +*/

// /* raqam uchun operatsiya +, -, *,/  */

// // let a = 5;
// // let b = 'spam';
// // let c = true;
// // alert(Boolean("Javoxir")); //'' qoshtirnoq orasida nimadir bolsa u true beradi
// // alert(Boolean(" ")); //'' hato bosh joy ham
// // alert(Boolean("")); //bu esa false
// // alert(Boolean(2)); // raqamlar true beradi
// // alert(Boolean(-2)); 
// // alert(Boolean(0)); // agar raqam 0 ga teng bolmasa

// // let nimadir;
// // alert(nimadir); //undefined 

// // function square(x) {
// //     return x * x;
// // }
// // alert(square(6));

// // console.log("Javoxir")

// let point = new Object();
// point.x = 5;    
// point.y = 1;
// point.x

// //objectimiz paydo boldi 
// // point.x
// // let chevrolet = {x:2, y: "3", oquvchilar:{javoxir:3, abduqayyum:5}}; //bu ham object paydo qiladi
// // point.x //object hususiyatini olish
// // chevrolet.oquvchilar.abduqayyum //5 raqami chiqaradi
// // point['x'] //object hususiyatini olishning boshqa usuli

// // let massiv = new Array();
// // massiv[0] = 1.2;
// // massiv[1] = "JavaScript";
// // massiv[2] = true;
// // massiv[3] = {x:1, y:3};

// // let a = new Abdu(1.3, "JavaScript", true, {x:1, y:3});
// // let massiv =[1.2, "JavaScript", true, {x:1, y:3}];
// // A[1] //JavaScript
// // let massiv3d =[[1,2,3],[4,5,6],[7,8,9]]; 
// // massiv3d[0][1]; //2


// // X = prompt('X raqamini kiriting');
// // X = Number(X);
// // Y = prompt('Y raqamini kiriting');
// // Y = Number(Y);
// // alert((X + Y));

// // X = prompt('X raqamini kiriting');
// // X = Number(X);
// // Y = prompt('Y raqamini kiriting');
// // Y = Number(Y);
// // let amal = prompt('Qaysi amalni bajarishni xohlaysiz Qoshish (+), Ayirish (-), Kopaytirish (*), Bolish (/):');

// // let natija;
// // switch (amal) {
// //     case "+":
// //         natija = X + Y;
// //         break;
// //     case "-":
// //         natija = X - Y;
// //         break;
// //     case "*":
// //         natija = X * Y;
// //         break;
// //     case "/":
// //         natija = X / Y;
// //         break;
// //     default:
// //         alert("Noto'g'ri amal tanlandi!");
// // }
// // alert("Natija: " + natija);

// // let scope = "global";
// // function checkScope() {
// //     let scope = "local"; 
// //     console.log(scope); 
// // }
// // checkScope();

// // scope = "global";
// // function checkScope() {
// //     scope = "local"; 
// //     console.log(scope); 
// //     myscope = "local";
// //     console.log(myscope);
// // }
// // checkScope();
// // console.log(scope);
// // console.log(myscope);

// // let scope = "global";
// // function checkScope() {
// //   let scope = "local";
// //   function nested(){
// //     let scope = "nested";
// //     console.log(scope);
// //   }
// //   nested();
// // }
// // checkScope();
// // console.log(scope);

// // function test(o) {
// //   let i = 0;
// //   if (typeof o == "object") {
// //     let j = 0;
// //     for (let k=0; k<10; k++) {
// //       console.log(k);
// //     }
// //     console.log(k);
// //   }
// //   console.log(j);
// // }

// // let a = 5;
// // let b = a;
// // a = 2;
// // console.log(a);
// // console.log(b);

// // let m = 1;
// // n = m;
// // m[0] = 2;
// // console.log(n);
// // console.log(m);

// // let str = "JavaScript";
// // console.log(str[0]);
// // console.log(str);
// // str = str =+ 'zor dasturchi';
// // console.log(str);

// // A = 21 % 5;
// // alert(A); //1
// // A = -5;
// // alert(A); //-5
// // A = +5;
// // alert(A); //5
// // A =  5;
// // B = A++; //A = 6, B = 5

// // A= 5;
// // B = ++A; //A = 6, B = 6

// // A = 5;  
// // B = A--; //A = 4, B = 5

// // A = 5;
// // B = --A; //A = 4, B = 4

// // A = ("5" == 5);
// // alert(A); //true
// // A = ("5" === 5); 
// // alert(A); //false
// // A = ("5" != 5);
// // alert(A); //false
// // A = ("5" !== 5);
// // alert(A); //true
// // A = (21>5);
// // alert(A); //true
// // A = (5<5);
// // alert(A); //false
// // A = (3<5);
// // alert(A); //true
// // A = (5<5);
// // alert(A); //false
// // A = (21>=5);
// // alert(A); //true
// // A = (5<=5);
// // alert(A); //true
// // A = (3<=5);
// // alert(A); //true
// // A = 5<=5;
// // alert(A); //false

// // A = 1, B=2;
// // A+=B;
// // A=3, B=2;
// // A = A+B;
// // A=3, B=2;
// // A-=B;
// // A=1, B=2;
// // A= A-B;

// // A = 2, B = 2;
// // A*=B;
// // A=4, B=2;
// // A = A*B;
// // A = 16, B = 8;
// // A/=B;
// // A = 2, B = 8;
// // A = A/B;
// // a = 5, b =2;
// // a%=b;
// // a = 1, b = 2;
// // a = a%b;
// // A = true, B = false;
// // A &=B;
// // A = false, B = true;
// // A = A&B;
// // A = true, B = false;
// // A |=B;
// // A = true, B = false;
// // A = A|B;
// // A = true, B = false;
// // A ^=B;
// // A = false, B = false;
// // A = A^B;

// 5+5;//ifoda
// //+ - * / % == === != !== >= <= va boshqalar bular operatorlar vazifa bajaradi qiymatka nisbatan
// 5;// bu qiymat bu hechqanday vazifa bajarmaydi
// a = 5+5 // botta ikkta operator ishlatilinvoti = va ustuvorliga qarab ishlaydi yani birinchi 5+5 vazifasi qilinadi undan kegin a= 10
// // matemetik operatorlar 
// 5+5 //matematikada qanday bolsa shunday ishlaydi yani 10 
// 5-5 //matematikada qanday bolsa shunday ishlaydi yani 0 
// 5/5 //matematikada qanday bolsa shunday ishlaydi yani 1
// 5*5 //matematikada qanday bolsa shunday ishlaydi yani 25
// 5%5 //qoldiq chiqarsh
// 6%5 //1
// // 5%2 //1
// // 5%3 //2
// // 5%4 //1
// // 5%1 //0
// -5 //manfiy raqam
// +5 //musbat raqam
// 5++//bir qoshib berish operatsiyadan song 6
// 6--//bir ayirib berish operatsiyadan song 5
// --5//bir ayirib berish operatsiyadan song 4
// ++6///bir qoshib berish operatsiyadan song 7

// a = 5;
// b = a++;//a = 6, b = 5
// b = ++a;//a = 7, b = 7
// b = a--;//a = 6, b = 7
// b = --a;//a = 5, b = 5

// //matematik operatorlar har doim son qaytaradi faqatkina + belgisidan tashqari

// //taqqoslash operatorlari


// //teng operatori ikkta chetidagi son so'z yoki boshqa operatorlarni bir hilligini tekshirad
// 5==5//true
// 4==5 //false
// "5"==5 ////tru
// //  //bir hilikni tekshiradi
//  5==="5"//false     
//  5===5 //true
//  4===5 //false
//  "5"===5 //false

//  //> kota belgisi chap tarafdagi object kottalgini tekshiradi

//     5>4 //true chunki chap tarafdagi 5 katta
//     6>7 //false chunki chap tarafdagi 6 kichik
//     'A'>'B' //true

// // < kichkina
// 4<5 //true
// 'a'<'b' //false
// 4<3 //false
// //>=kotta yoki teng chap tarafdagi object katta yoki tengligini tekshiradi
// 5>=5 //true
// 5>=4 //true
// 'a'<= 'a' //true

// //>=kichkina yoki teng chap tarafdagi object kichkina yoki tengligini tekshiradi
// 5<=5 //true
// 5<=4 //true
// 'a'<= 'a' //true

// //!= teng emas bu belgi == shu belgini teskari javoblarini qaytaradi
// 5!=5 //false
// 4!=5 //true
// //!== teng emas bu belgi === shu belgini teskari javoblarini qaytaradi
// 5!==5 //false
// 4!==5 //true

// //taqqoslash operatori faqat boolean qaytaradi yani true false

//t username = prompt("Ismingizni kiriting:");
//if(username== ){
   // alert("Salom, " + username + "! Saytga xush kelibsiz!");
//}

//else

//else{
   // alert("Siz ismingizni kiritmadingiz, afsuski sizni saytga kiritolmaymiz.");
//}


// let username = prompt("Ismingizni kiriting:");
// if (!username) {
//     alert("Siz ismingizni kiritmadingiz, afsuski sizni saytga kiritolmaymiz.");
// }
// else {
//     alert("Salom, " + username + "! Saytga xush kelibsiz!");
// }

// n=2;
// if(n == 1){
//     n*=2;
// }
// else if(n==2){
//     n/=2;
// }
// else if(n==3){
//     n+=2;
// }
// else{
//     alert("error");
// }
// alert(n);

// let count =1;
// while(count<5){
//     console.log(count);
//     count++;

// }

// let abdu =1;
// do{
//     abdu++;
//     console.log(abdu);
// }
// while(abdu<5);

// for (i=0; i<5; i++){
//    if(i==4){
//     continue;
//    }
//     console.log(i);
// }

// for (i=0; i<5; i++){
//     if(i==3){
//      break;
//     }
//      console.log(i);
// }

// X = prompt('X raqamini kiriting');
// X = Number(X);
// Y = prompt('Y raqamini kiriting');
// Y = Number(Y);
// let amal = prompt('Qaysi amalni bajarishni xohlaysiz Qoshish (+), Ayirish (-), Kopaytirish (*), Bolish (/):');

// if (amal == "+"){
//     natija = X + Y;
// }
// else if (amal == "-"){
//     natija = X - Y;
// }
// else if (amal == "*"){
//     natija = X * Y;
// }
// else if (amal == "/"){
//     natija = X / Y;
// }
// else{
//     alert("Noto'g'ri amal tanlandi!");
// }
// alert("Natija: " + natija);

// let value  = a[0];
// a[1]= 3.14;
// let i =2;
// a[i]=3;
// a[i +1]="hello";
// a[a[i]]=a[0];

// let hafta = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];

// let kun = prompt("Bugun qaysi kun? (1-7): ");
// kun = Number(kun);
// alert(hafta[kun - 1]);

// let a = new Array(10);
// console.log(a.length);

// let abdu7026=[abu =5, abdu=6, abdu=7, abdu=8];
// for (let i = 0; i < abdu7026.length; i++){
//     console.log(abdu7026[i]);
// }

// const fruits = ["mango", "banan", "vishnya", "persik"];
// for(let i=0; i < fruits.length; i++){
//    alert(fruits[i]);
// }

// const user ={
//    "name": "Abduvaxobov Abduqayyum",
//    "age": 20,
//    "married": false,
//    "job": true,
//    "email": "Shayxabdulqayyummufti@gmail.com"
// };
// alert(user ["name"])

// const lessons = new Object();
// lessons.title = "JavaScript";
// lessons.lesson1= new Object();
// lessons.lesson1.title="JavaScribt billan tanishuv";
// lessons.lesson1.pages=12;
// lessons.lesson2={title: "Ko'rinishi", pages:13};

const market = new Object();

let tavarnomi = prompt("tavar nomini kiriting");
let tavarnarxi = prompt("tavar narxi kiriting");

market[tavarnomi] = tavarnarxi;

let searching =prompt('Qidirilvotkan tovar ?');
alert(market[searching]);