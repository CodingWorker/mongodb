ps = db.runCommand({
	          "findAndModify":"persons",
              "query":{"name":"333"},
		      "update":{"$set":{"age":100}},
		      "new":true 
})