$(function() {
	 var historydata = [];
	 for(let i=0; i<data.length-1; i++){
	 	let htmlStr = `<li>
						<ul>
							<li><p class="pp11">`+data[i].time+`</p></li>
							<li>
								<ul class="ulli">
									<li><img src="../images/sml/x`+data[i].num[0]+`.png" alt=""><p>`+data[i].type[0]+`</p></li> <!--2-->
									<li><img src="../images/sml/x`+data[i].num[1]+`.png" alt=""><p>`+data[i].type[1]+`</p></li> <!--3-->
									<li><img src="../images/sml/x`+data[i].num[2]+`.png" alt=""><p>`+data[i].type[2]+`</p></li> <!--11-->
									<li><img src="../images/sml/x`+data[i].num[3]+`.png" alt=""><p>`+data[i].type[3]+`</p></li> <!--26-->
									<li><img src="../images/sml/x`+data[i].num[4]+`.png" alt=""><p>`+data[i].type[4]+`</p></li> <!--36-->
									<li><img src="../images/sml/x`+data[i].num[5]+`.png" alt=""><p>`+data[i].type[5]+`</p></li> <!--41-->
								</ul>
							</li>
							<li><img class="img11" src="../images/sml/x`+data[i].num[6]+`.png" alt=""><p>`+data[i].type[6]+`</p></li>
						</ul>
					</li>`;
		//$(".list").prepend(htmlStr);
		historydata.push(htmlStr);			
	 }

	 //判断是否开了当前期，如果开了则在历史记录里面追加
	 if(curTime - (new Date()) < 0){
	 	let htmlStr = `<li>
						<ul>
							<li><p class="pp11">`+data[data.length-1].time+`</p></li>
							<li>
								<ul class="ulli">
									<li><img src="../images/sml/x`+data[data.length-1].num[0]+`.png" alt=""><p>`+data[data.length-1].type[0]+`</p></li> <!--2-->
									<li><img src="../images/sml/x`+data[data.length-1].num[1]+`.png" alt=""><p>`+data[data.length-1].type[1]+`</p></li> <!--3-->
									<li><img src="../images/sml/x`+data[data.length-1].num[2]+`.png" alt=""><p>`+data[data.length-1].type[2]+`</p></li> <!--11-->
									<li><img src="../images/sml/x`+data[data.length-1].num[3]+`.png" alt=""><p>`+data[data.length-1].type[3]+`</p></li> <!--26-->
									<li><img src="../images/sml/x`+data[data.length-1].num[4]+`.png" alt=""><p>`+data[data.length-1].type[4]+`</p></li> <!--36-->
									<li><img src="../images/sml/x`+data[data.length-1].num[5]+`.png" alt=""><p>`+data[data.length-1].type[5]+`</p></li> <!--41-->
								</ul>
							</li>
							<li><img class="img11" src="../images/sml/x`+data[data.length-1].num[6]+`.png" alt=""><p>`+data[data.length-1].type[6]+`</p></li>
						</ul>
					</li>`;

		//$(".list").prepend(htmlStr);
		historydata.push(htmlStr);
	 }

	 var pagenum = 0;
	 var historyNum = historydata.length;//历史记录条数

	 function page(page){
	     $(".list").html("");
		 for(var i=0; i< 5; i++)
		 {
		 	$(".list").append(historydata[historyNum-5*page-1-i])
		 }
		 $(".page li").removeClass("pagecur");
		 switch(page){
		 	case 0: $(".page li").eq(1).addClass("pagecur");break;
		 	case 1: $(".page li").eq(2).addClass("pagecur");break;
		 	case 18: $(".page li").eq(4).addClass("pagecur");break;
		 	case 19: $(".page li").eq(5).addClass("pagecur");break;
		 	default: $(".page li").eq(3).addClass("pagecur");break;
		 }
	 }
	 page(pagenum);

	 $(".page li").eq(1).click(function(){
	 	pagenum = 0;
	 	page(0);
	 })

	 $(".page li").eq(2).click(function(){
	 	pagenum = 1;
	 	page(1);
	 })

	 $(".page li").eq(4).click(function(){
	 	pagenum = 18;
	 	page(18);
	 })

	 $(".page li").eq(5).click(function(){
	 	pagenum = 19;
	 	page(19);
	 })

	 $("#nextpage").click(function(){
	 	pagenum++;
	 	if(pagenum>=19){
			pagenum	= 19;
	 	}
	 	page(pagenum);
	 })
	 $("#prepage").click(function(){
	 	pagenum--
	 	if(pagenum<=0){
			pagenum	= 0;
	 	}
	 	page(pagenum);
	 })
	 
	 
})

