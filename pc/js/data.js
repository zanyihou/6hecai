var data = [];

//开奖时间
var alldate = {
	"c128":[2017,10,25],
	"c129":[2017,10,27],
	"c130":[2017,10,30],
	"c131":[2017,11,1],
	"c132":[2017,11,3],
	"c133":[2017,11,6],	
	"c134":[2017,11,8],	
	"c135":[2017,11,10],	
	"c136":[2017,11,13],	
	"c137":[2017,11,15],	
	"c138":[2017,11,17],	
	"c139":[2017,11,20],	
	"c140":[2017,11,22],	
	"c141":[2017,11,24],	
	"c142":[2017,11,27],	
	"c143":[2017,11,29],	
	"c144":[2017,12,1],	
	"c145":[2017,12,4],	
	"c146":[2017,12,6],	
	"c147":[2017,12,8],	
	"c148":[2017,12,11],	
	"c149":[2017,12,13],	
	"c150":[2017,12,15],	
	"c151":[2017,12,18],	
	"c152":[2017,12,20],	
	"c153":[2017,12,22],	
	"c154":[2017,12,25],	
	"c155":[2017,12,27],	
	"c156":[2017,12,29],
};


//开奖数据
data[0] = {
	time: 118,
	num: [1,3,11,26,36,41,7],
	type: ["猴","羊","猪","狗","猴","蛇","羊"]
}
data[1] = {
	time: 119,
	num: [2,13,12,5,6,4,12],
	type: ["蛇","狗","猴","蛇","猴","羊","狗"]
}
data[2] = {
	time: 120,
	num: [3,13,12,5,6,4,12],
	type: ["蛇","狗","猴","蛇","猴","羊","狗"]
}
data[3] = {
	time: 121,
	num: [4,29,22,15,29,41,12],
	type: ["狗","羊","猴","羊","猴","羊","狗"]
}
data[4] = {
	time: 122,
	num: [5,29,20,15,29,41,12],
	type: ["蛇","羊","猴","羊","猴","羊","狗"]
}
data[5] = {
	time: 123,
	num: [5,29,20,15,29,41,12],
	type: ["蛇","羊","猴","羊","猴","羊","狗"]
}
data[6] = {
	time: 124,
	num: [5,29,20,15,29,41,12],
	type: ["蛇","羊","猴","羊","猴","羊","狗"]
}
data[7] = {
	time: 125,
	num: [5,29,20,15,29,41,12],
	type: ["蛇","羊","猴","羊","猴","羊","狗"]
}
data[8] = {
	time: 126,
	num: [5,29,20,15,29,41,12],
	type: ["蛇","羊","猴","羊","猴","羊","狗"]
}
data[9] = {
	time: 127,
	num: [5,29,20,15,29,41,12],
	type: ["蛇","羊","猴","羊","猴","羊","狗"]
}
data[10] = {
	time: 128,
	num: [5,29,20,15,29,41,12],
	type: ["蛇","羊","猴","羊","猴","羊","狗"]
}
data[11] = {
	time: 129,
	num: [5,29,20,15,29,41,12],
	type: ["蛇","羊","猴","羊","猴","羊","狗"]
}


//获取服务器时间
// function getServerDate(){
// 	var xhr = null;
// 	if(window.XMLHttpRequest){
// 	xhr = new window.XMLHttpRequest();
// 	}else{
// 	xhr = new ActiveObject("Microsoft")
// 	}

// 	xhr.open("GET","/",false)
// 	xhr.send(null);
// 	var date = xhr.getResponseHeader("Date");
// 	date = new Date(date);
// 	return date;
// }
//获取服务器时间
function getDisTime(){
	var xhr = null;
	if(window.XMLHttpRequest){
	xhr = new window.XMLHttpRequest();
	}else{
	xhr = new ActiveObject("Microsoft")
	}

	xhr.open("GET","/",false)
	xhr.send(null);
	var date = xhr.getResponseHeader("Date");
	date = new Date(date);
	if(!data)
	{
		data = 0;
	}
	date2 = new Date();
	localStorage.distime = data2 - data;
}
getDisTime();
//获取服务器时间
function getServerDate(){
	date = new Date() + localStorage.distime;
	return date;
}

var curTimedata = alldate["c"+data[data.length-1].time];

var curTime = new Date(curTimedata[0],curTimedata[1]-1,curTimedata[2],21,0,0) ;//当前期开奖时间

var nextTimedata = alldate["c"+(data[data.length-1].time+1)];

var nextTime = new Date(nextTimedata[0],nextTimedata[1]-1,nextTimedata[2],21,0,0) ;;//下一期开奖时间

var curNum = data[data.length-1].time; //当前期的期号;
var nextNum = curNum + 1; //下一期的期号;

//跨年
if(nextTimedata[0]-curTimedata[0]>0){
	nextNum = 1;
}
var cCur = "c" + curNum;
