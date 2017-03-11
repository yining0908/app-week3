'use strict'
class Person
{
    constructor(name)
    {this.name=name;}
    printgreeting()
    {console.log(`hi!${this.name}`);}
}

var person1=new Person('claire');
person1.printgreeting();

var person2=new Person('oona');
person2.printgreeting();

class Employee extends Person{
    constructor(name,job){
        super(name);
        this.job=job}    

      printgreeting(){
          super.printgreeting();
    console.log(`hi ${this.name} and her job is ${this.job}`);}
}

var person1=new Employee('claire','student');
person1.printgreeting();

var person2=new Employee('oona');
person2.printgreeting();

//prototype

Person.prototype.printgreeting = function() {
	console.log(`Hi, I am ${this.name}, and I have been changed!`);
}
person1.printgreeting();
person2.printgreeting();