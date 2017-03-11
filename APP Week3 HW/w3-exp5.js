var person = {
  firstname: 'Claire',
  lastname: 'Hsu',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function() {
  console.log('logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person);
logPersonName();

// callback with bind
let greet = function(fn) {
  fn();
};

let person = {
  name: 'Nick',
  hello: function(){
    console.log(`Hello ${this.name}`);
  },
  sayHello: function(){
    greet(this.hello.bind(this));
  }
};

person.sayHello();

let newPerson = {
  name: 'Nick',
  sayHello: function(){
    greet(
      () => console.log(`Hello ${this.name}`)
    );
  }
};

newPerson.sayHello();
