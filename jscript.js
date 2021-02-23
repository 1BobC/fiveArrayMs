// 1 filter method
// const scores = [10, 30, 15, 25, 50, 40, 5];
//scores.filter((score) => {            ah ha, filter is non-destructive so no filtering out shown!
// const filteredScores= scores.filter((score) => {
//     return  score > 20;                    //result if 10 is return false
// });
//     console.log(filteredScores);

// another filter method
// const users= [
//     {name: 'bob', premium: true},
//     {name: 'june', premium: false},
//     {name: 'kelly', premium: false},
//     {name: 'shona', premium: true}
// ];
// const premiumUsers = users.filter(user => {      single return statement enables short version below
//     return user.premium;
// });
// const premiumUsers = users.filter(user => user.premium);    //short version
//     console.log(premiumUsers);

//2 map method - non destructive so will need a constant to enable display
//const prices = [10, 30, 15, 25, 50, 40, 5];
// const salePrices = prices.map((price) => {  again this can be reduced as shown below
//     return price * 2.5;
// });
// const salePrices = prices.map(price => price * 2.5);       //reduced version
//     console.log(salePrices);

//another map method
// const products= [
//     {name: 'apples', price: 20},
//     {name: 'pears', price: 40},
//     {name: 'bananas', price: 30},
//     {name: 'oranges', price: 50},
//     {name: 'pickles', price: 75}
// ];
// const saleProducts= products.map((product) => {
//     if(product.price > 30){                                         //need to retun an object since 
//         return  {name: product.name, price: product.price /2}       //products are objects    
        // product.price = product.price / 2;           //if this simpler code was used it would
        // return  product;                             //directly edit the product objects - no no!!
//     }else{
//         return product;         //object  product is returned unaltered
//     }
// });
// console.log(saleProducts);
// console.log(products);          //this shows product objects edited too - no no!!  (or not - yes yes!) 

//3 reduce method
// const scores= [10, 20, 60, 40, 70, 90, 30];
// const result= scores.reduce((acc, curr) => {
// if(curr > 50){
// acc++;
// }
// return acc;
// }, 0);
// console.log(result);

//another reduce method more comples using objects not just numbers
// const scores= [
//         {player: 'bob', score: 50},
//         {player: 'june', score: 30},
//         {player: 'bob', score: 70},
//         {player: 'shona', score: 60},
//         {player: 'bob', score: 90},
//         {player: 'june', score: 30},
//         {player: 'bob', score: 20},
//         {player: 'shona', score: 60},
//         {player: 'bob', score: 60},
//         {player: 'june', score: 30},
//         {player: 'bob', score: 110},
//         {player: 'shona', score: 60},
//         {player: 'bob', score: 25},
//         {player: 'june', score: 30},
//         {player: 'bob', score: 70},
//         {player: 'shona', score: 60}
//     ];
// const bobTotal = scores.reduce((acc, curr) => {
//     if(curr.player === 'bob'){
//         acc += curr.score;
//     }
//     return acc;
// }, 0);
// console.log(bobTotal);

//4 find method - just one example
// const scores= [10, 90, 60, 40, 70, 90, 30];
// const firstHighScore= scores.find((score) => {      //looking for first score over 50
//     return score > 50;        //will return false if under 50 and true if first value over 50
// });
// console.log(firstHighScore);

//5 sort method
//example 1 sorting strings
const names= ['bob', 'june', 'kelly', 'shona', 'finn', 'freya'];
names.sort();  //this is a destructive method it will only create alpha order in the original array!!
console.log(names);

//example 2 sorting numbers



//example 3 sorting objects