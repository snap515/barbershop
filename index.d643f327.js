const e=[{name:"Moore Hensley",email:"moorehensley@indexia.com",eyeColor:"blue",friends:["Sharron Pace"],isActive:!1,balance:2811,gender:"male",age:37},{name:"Sharlene Bush",email:"sharlenebush@tubesys.com",eyeColor:"blue",friends:["Briana Decker","Sharron Pace"],isActive:!0,balance:3821,gender:"female",age:34},{name:"Ross Vazquez",email:"rossvazquez@xinware.com",eyeColor:"green",friends:["Marilyn Mcintosh","Padilla Garrison","Naomi Buckner"],isActive:!1,balance:3793,gender:"male",age:24},{name:"Elma Head",email:"elmahead@omatom.com",eyeColor:"green",friends:["Goldie Gentry","Aisha Tran"],isActive:!0,balance:2278,gender:"female",age:21},{name:"Carey Barr",email:"careybarr@nurali.com",eyeColor:"blue",friends:["Jordan Sampson","Eddie Strong"],isActive:!0,balance:3951,gender:"male",age:27},{name:"Blackburn Dotson",email:"blackburndotson@furnigeer.com",eyeColor:"brown",friends:["Jacklyn Lucas","Linda Chapman"],isActive:!1,balance:1498,gender:"male",age:38},{name:"Sheree Anthony",email:"shereeanthony@kog.com",eyeColor:"brown",friends:["Goldie Gentry","Briana Decker"],isActive:!0,balance:2764,gender:"female",age:39}],a=(e,a)=>{const n=e.filter((e=>e.gender===a));console.log(`отфильтровано по ${a} полу:`,n);const r=n.reduce(((e,a)=>e+a.balance),0);console.log(`общий баланс у ${a} = `,r)};a(e,"male"),a(e,"female");
//# sourceMappingURL=index.d643f327.js.map