// This binding is the outer scope. In this case the global object.
const cat = {
  energy: 1,
  eat: () => {
    this.energy++;
  },
};
cat.eat();
console.log(cat.energy);

// With normal function, the this is a reference to the calling object, because the function creates a new execution context and this will be refering to this object.
const cat = {
  energy: 1,
  eat: function () {
    this.energy++;
  },
};
cat.eat();
console.log(cat.energy);

// This is a normal function as the previous one, but with shorter sintax.
const cat = {
  energy: 1,
  eat() {
    this.energy++;
  },
};
cat.eat();
console.log(cat.energy);
