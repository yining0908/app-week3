function greet(callback)
{
console.log('hi');
var data={name:'pucca'};
callback(data)
}

greet (data=>{console.log('example');
consloe.log(data);
})
