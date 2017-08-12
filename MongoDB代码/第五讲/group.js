db.runCommand({group:{
	ns:"persons",
	key:{"country":true},
	initial:{m:0},
	$reduce:function(doc,prev){
		if(doc.m > prev.m){
			prev.m = doc.m;
			prev.name = doc.name;
			prev.country = doc.country;
		}
	},
	condition:{m:{$gt:90}}
}})

db.runCommand({group:{
	ns:"persons",
	key:{"country":true},
	initial:{m:0},
	$reduce:function(doc,prev){
		if(doc.m > prev.m){
			prev.m = doc.m;
			prev.name = doc.name;
			prev.country = doc.country;
		}
	},
	finalize:function(prev){
		prev.m = prev.name+" Math scores "+prev.m
	},
	condition:{m:{$gt:90}}
}})

db.persons.insert({
	name:"USPCAT",
	age:27,
	email:"2145567457@qq.com",
	c:89,m:100,e:67,
	counTry:"China",
	books:["JS","JAVA","EXTJS","MONGODB"]
})

db.runCommand({group:{
	ns:"persons",
	$keyf:function(doc){
		if(doc.counTry){
			return {country:doc.counTry}
		}else{
			return {country:doc.country}
		}
	},
	initial:{m:0},
	$reduce:function(doc,prev){
		if(doc.m > prev.m){
			prev.m = doc.m;
			prev.name = doc.name;
			if(doc.country){
				prev.country = doc.country;
			}else{
				prev.country = doc.counTry;
			}
		}
	},
	finalize:function(prev){
		prev.m = prev.name+" Math scores "+prev.m
	},
	condition:{m:{$gt:90}}
}})

