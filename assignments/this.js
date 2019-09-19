/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global
 * 2. Implicit Binding Obj.someFunction() Obj is the Binding
 * 3. New Binding The specific instace of and Obj created by a Constructor function
 * 4. Explicit Binding when ever call() or apply methods are use is explicit and can override the constructor.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function favFood(food) {
    console.log("Gobal:", this);
    return food;
};

console.log("return food", favFood("Spaghetti")); // window or global scope.

// Principle 2

// code example for Implicit Binding

const myFavFood = goFood => {
    goFood.foods = function() {
        console.log("Implicit:", `Hi my name is ${this.name} and my favorite food is ${this.fav}!`);
        console.log(this);
    };
};

const meto = { name: 'David', fav: "Spaghetti" };
//const foo = { fave: "Spaghetti" };
myFavFood(meto);
meto.foods();

// const sayNameFunc = obj => {
//     obj.sayName = function() {
//         console.log(`Hello my name is ${this.name}`);
//         console.log(this);
//     };
// };
// const me = { name: 'Ryan' };
// const you = { name: 'Freddy' };
// sayNameFunc(me);
// sayNameFunc(you);

// Invoke Methods on our objects
// me.sayName();
// you.sayName();

// Principle 3

// code example for New Binding
function Food(nam, fav) {
    this.greet = "Hello";
    this.name = nam;
    this.favorite = fav;

    this.tell = function() {
        console.log(`${this.greet} My name is ${this.name} and I love to eat ${this.favorite}!`);
    }
}

const yummy = new Food("David", "Spaghetti");

yummy.tell();

// Principle 4

// code example for Explicit Binding

const bart = new Food("Bart Simpson", "Butterfinder");
bart.tell();

console.log("I become bart")
yummy.tell.call(bart);
console.log("Bart becomes me");
bart.tell.call(yummy);