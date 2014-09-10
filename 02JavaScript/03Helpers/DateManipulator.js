//计算两个日期之间相隔的天数
Date.getElipsedDays = function(firstDate,secondDate){
	if(!(firstDate instanceof Date && secondDate instanceof Date)){
		throw new Error("Invalid parameters");
	}
	var elipsedTime = firstDate.getTime() - secondDate.getTime();
	return Math.floor(elipsedTime/60/60/24/1000);
}

//将日期格式化为20140617形式
Date.formatDate = function(someDay){
	if(!someDay instanceof Date){
		throw new Error("Invalid parameters");
	}
    var formatedDay = someDay.getFullYear() + ('00'+(someDay.getMonth()+1)).slice(-2) + ('00'+someDay.getDate()).slice(-2);
    return formatedDay;
}