const express=require('express');
const app=express();
const port=8000;

var bodyParser=require('body-parser');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

const humans=[
	{id: 1,name:'jack',age:29,humanlink:'#/v1/humans/jack/pets',carsList:'#/v1/humans/jack/cars'},
	{id: 2,name:'jane',age:35,humanlink:'#/v1/humans/jane/pets',carsList:'#/v1/humans/jane/cars'}
]
const pets=[
	{id: 1,owner:'jack',petsType:'cat'},
	{id: 2,owner:'jack',petsType:'dog'},
	{id: 3,owner:'jack',petsType:'Canary'},
	{id: 4,owner:'jane',petsType:'cat'},
	{id: 5,owner:'jane',petsType:'dog'}
]
const cars=[
	{id: 1,owner:'jack',brand:'BMW'},
	{id: 2,owner:'jack',brand:'PEUGEOT'},
	{id: 3,owner:'jane',brand:'BENZ'},
	{id: 4,owner:'jane',brand:'PRIDE'},
	{id: 5,owner:'jane',brand:'PEUGEOT'}
]
const accidentHistory=[
	{id: 1,owner:'jack',date:'2019/06/01'},
	{id: 2,owner:'jack',date:'2015/12/11'},
	{id: 3,owner:'jack',date:'2010/09/20'},
	{id: 4,owner:'jack',date:'2014/07/27'},
	{id: 5,owner:'jack',date:'2009/06/01'}
]
app.get('/gethumanslist', function(req, res) {            
        
		res.send(humans)
        
    });
app.get('/v1/humans/:name/pets', function(req, res) {
    var name = req.params.name;
	console.log(name);
	var human = humans.find(function(item) {
	  return item.name == name;
	});
	if(human.age<=30){
		console.log(human);
		var pet=pets.filter(function(item) {
		  return item.owner == name;
		});
		
		res.send(pet);
	}
	else
		res.send(null);
});
app.get('/v1/humans/:name/cars', function(req, res) {
    var name = req.params.name;
	console.log(name);
	var human = humans.find(function(item) {
	  return item.name == name;
	});
	var accidentList=accidentHistory.filter(function(item) {
		  return item.owner == name;
		});
	console.log(accidentList.length)
	if(human.age>30 && accidentList.length==0){
		console.log(human);
		var car=cars.filter(function(item) {
		  return item.owner == name;
		});
		
		res.send(car);
	}
	else
		res.send(null);
});
app.listen(port);