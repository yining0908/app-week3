var person ={
  firstname:"claire",
  lastname:"hsu",
  greet:function(){
    console.log(`hi ${this.firstname} ${this.lastname}`);}

};
person.greet();
console.log(person['firstname']);

let name,number;
let info={
  name,
  number,
  printinfo:function(){
    console.log(`name:${this.name} number:${this.number}`);
  }
};
info.name="claire";
info.number="0926198882";
info.printinfo();
