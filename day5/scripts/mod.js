class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.course = [];
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


//moderator


class Moderator extends User {
    //constructor(name,age,email,role) {
    // super(name,age,email);
    //this.role = 'Moderator';
    //}


    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email;
        })
    }
}

class Admin extends Moderator {
    addCourse()
}

let user1 = new User('ayisha',19,'a@gmail.com')
let user2 = new User('sisha',19,'s@gmail.com')
let mod = new Moderator('Chan',24,'c@gmail.com');
let admin = new Admin('kk',45,'k@gmail.com');
let users = [user1,user2,mod,admin];
users.forEach(element => {
    console.log(element);

});

admin.addCourse(user1,'js');
Moderator.deleteUser(user1);
console.log(users);