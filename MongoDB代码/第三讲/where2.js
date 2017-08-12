db.persons.find({"$where":function(){

	var books = this.books;
	
	var school = this.school;
	
	if(this.age > 22){
		var php = null;
		
		for ( var i = 0; i < books.length; i++) {
			if(books[i] == "C++"){
				php = books[i];
				
				if(school){
					for (var j = 0; j < school.length; j++) {
						
						if(school[j].school == "K"){
						
							return true;
						}
					}
					break;
				}
			}
		}	
	}
}})