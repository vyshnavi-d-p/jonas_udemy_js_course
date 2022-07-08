'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  Restname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery:function({starterIndex=1,mainIndex=0,time='20:00',address}){
    console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `);
  }
};



//Destructuring an array will unpack the array to variables
//convert complex datastructure to simple datastructure
const arr= [2,3,4];
const a = arr[0];
const b=arr[1];
const c= arr[2];
console.log("before Destructuring a,b,c:",a,b,c);
const [x,y,z]=arr;
console.log("After Destructuring x,y,z:",x,y,z);
let [main, ,secondary]=restaurant.categories;
console.log("main, ,secondary:",main,secondary);
//Switching variables 
// const temp=main;
// main=secondary;
// secondary=temp;
/* Mutating arrays*/
[main,secondary]=[secondary,main];
console.log("main, ,secondary after swapping:",main,secondary);
const[starter,mainCourse]=restaurant.order(2,0);
console.log("restaurant.order(2,1):",starter,mainCourse);
const nested=[2,4,[1,2]];
const [i, , j]=nested;
console.log("Nested array in destructure opererator:i,j",i,j);
const[k, ,[l,m]]=nested;
console.log("destructuing the Nested array in destructure opererator:k,l,m",k,l,m)

/*-- Destrcturing objects ---*/
const {Restname,openingHours,categories}=restaurant;
console.log("Destructuring of objects:",Restname,openingHours,categories);
const {Restname:restaurantIs,starterMenu:menu,mainMenu:mainMenu}=restaurant;
console.log("restaurantIs,menu,mainMenu:",restaurantIs,menu,mainMenu);
//Default values
const {menu:Main=[],starterMenu:starterIs=[],}=restaurant;
console.log("Main,starterIs:",Main,starterIs);
//Mutating variable for objects
let p=111;
let q=222;
const obj={p:25,q:34,r:190};
({p,q}=obj);
console.log("p,q:",p,q);
const {fri:{open:o,close:cl}}=openingHours;
console.log('fri:{open:o,close:cl}:',o,cl);
/* ---- USE CASE ---- */

restaurant.orderDelivery({time:'22:30',address:'krishna nagar',mainIndex:2,starterIndex:2});
restaurant.orderDelivery({address:'raghavendra nagar',starterIndex:2})

/*---------SPREAD OPERATOR ---------*/
const spreadArr=[7,8,9];
const includedArray=[1,2,spreadArr];
console.log("Include the array in another array:",includedArray);
const badNewArr=[1,2,spreadArr[0],spreadArr[1],spreadArr[2]];
console.log("bad array: before using spread operator",badNewArr);
const newArray=[1,2,...spreadArr];
console.log("New array with spread operator:",newArray);
console.log("newArray:",newArray);
console.log("...newArray:",...newArray);

const newMenu=[...restaurant.mainMenu,'Gnocci'];
console.log("New Menu with added menu item:",newMenu)