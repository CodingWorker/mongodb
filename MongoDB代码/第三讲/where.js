db.persons.find({"$where":function(){
	//得到查询结果的每一条文档
	var books = this.books;
	//得到文档中的school对象
	var school = this.school;
	//如果年纪>=22
	if(this.age > 22){
		var php = null;
		//遍历书籍
		for ( var i = 0; i < books.length; i++) {
			if(books[i] == "C++"){
				php = books[i];
				//如果学校是真
				if(school){
					for (var j = 0; j < school.length; j++) {
						//判断是不是在K上学
						if(school[j].school == "K"){
							//返回是真
							return true;
						}
					}
					break;
				}
			}
		}	
	}
}})