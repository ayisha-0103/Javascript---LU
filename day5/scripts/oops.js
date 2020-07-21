console.log("Oops")

//create a class

const userOne = {
    name: 'akash',
   age: 24,
    email: 'akash@gmail.com',
   
  }

console.log(userOne.name)
console.log(userOne.age)
console.log(userOne.email)

   
//login and logout

class User {
  constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
  }

  login() {
      console.log(`${this.name} has logged in`);
      return this;
  }
  logout() {
      console.log(`${this.name} has logged out`);
      return this;

}
  addCoins() {
      this.luCoins++;
      console.log(`${this.name} has ${this.luCoins} coins`);
      return this;
  }

  

  
  }
let user1 = new User('Akash',20,'akash@gmail.com')

user1.login()
user1.addCoins()
user1.addCoins()
user1.addCoins()
user1.addCoins()
user1.addCoins()
user1.addCoins()
user1.logout()


