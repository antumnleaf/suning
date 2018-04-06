//轮播效果
{
	let imgs=document.querySelectorAll(".banner_midimg img");
	let pagers=document.querySelectorAll(".diandian");
	let rdivs=document.querySelectorAll(".lunbo_right");
	let banner=document.querySelector(".banner_lunbo");
	let next=document.querySelector(".banner_rbtn");
	let prev=document.querySelector(".banner_lbtn");
	// console.log(banner);

	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("banner_img");
				pagers[i].classList.remove("dian_this");
				rdivs[i].classList.remove("lunbo_ding");
			}
			this.classList.add("dian_this");
			rdivs[index].classList.add("lunbo_ding");
			imgs[index].classList.add("banner_img");
			n=index;
		}
	});

	let n=0;
	function move(){
		n++;
		if(n==imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("banner_img");
			pagers[i].classList.remove("dian_this");
			rdivs[i].classList.remove("lunbo_ding");
		}
		imgs[n].classList.add("banner_img");
		pagers[n].classList.add("dian_this");
		rdivs[n].classList.add("lunbo_ding");
	}

	let t=setInterval(move,3000);

	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};

	next.onclick=function(){
		move();
	}
	prev.onclick=function(){
		n-=2;
		move();
	}
}
//悬浮导航效果
{
	let topbar=document.querySelector(".topbar");
	let topappear=document.querySelector(".jiuhui_title");
	let leftbar=document.querySelector(".leftbar");
	let leftappear=document.querySelector(".tupian");
	let totop=document.querySelector(".totop");
	let end=document.querySelector(".end");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>topappear.offsetTop-150){
			topbar.style.display="block";
		}else{
			topbar.style.display="none";
		}
		if(st>leftappear.offsetTop&&st<end.offsetTop){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	}
	{
		let tips=document.querySelectorAll(".leftbar_con li");
		let contents=document.querySelectorAll(".rcon");
		tips.forEach(function(ele,index){
			ele.onclick=function(){
				let ot=contents[index].offsetTop-50;
				let now=document.documentElement.scrollTop;
				let speed=(ot-now)/8;
				let time=0;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					if(time==200){
						clearInterval(t);
					}
					document.documentElement.scrollTop=now;
				},25);
			}
		});
		window.addEventListener("scroll",function(){
			let st=document.documentElement.scrollTop;
			for(let i=0;i<contents.length;i++){
				if(st>contents[i].offsetTop-100){
					for(let j=0;j<tips.length;j++){
						tips[j].classList.remove("leftbar_active");
					}
					tips[i].classList.add("leftbar_active");
				}
			}
		})
	}
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25);
	}
}
//大聚惠
{
	// $(".juhui_content").mouseenter(function(){
	// 	$(".juhui_neirong_lbtn,.juhui_neirong_rbtn").fadeIn(500);
	// });
	// $(".juhui_content").mouseleave(function(){
	// 	$(".juhui_neirong_lbtn,.juhui_neirong_rbtn").fadeOut(500);
	// });
	let n=1;
	let flag=true;
	$(".juhui_neirong_rbtn").click(function(){
		if(flag){
			flag=false;
			n++;
			$(".juhui_inner").animate({marginLeft:-999*n},500,function(){
				flag=true;
				if(n==4){
					$(".juhui_inner").css("marginLeft",-999);
					n=1;
				}
			});
		}
		
	})
	$(".juhui_neirong_lbtn").click(function(){
		if(flag){
			flag=false;
			n--;
			$(".juhui_inner").animate({marginLeft:-999*n},500,function(){
				flag=true;
				if(n==0){
					$(".juhui_inner").css("marginLeft",-2997);
					n=3;
				}
			});
		}
	})
}
// 分类
{
	let n=1;
	let flag=true;
	$(".fenlei_next").click(function(){
		if(flag){
			flag=false;
			n++;
			$(".fenlei_inner").animate({marginLeft:-390*n},500,function(){
				flag=true;
				if(n==4){
					$(".fenlei_inner").css("marginLeft",-390);
					n=1;
				}
			});
		}
		
	})
	$(".fenlei_prev").click(function(){
		if(flag){
			flag=false;
			n--;
			$(".fenlei_inner").animate({marginLeft:-390*n},500,function(){
				flag=true;
				if(n==0){
					$(".fenlei_inner").css("marginLeft",-1950);
					n=3;
				}
			});
		}
	})
}
//右导航
{
	$(".message").each(function (index,ele) {
	    $(this).mouseenter(function () {
	        $(".rignthide").eq(index).css("display","block");
	        // $(".rignthide").eq(index).css("left","-150");
	    })
	    $(this).mouseleave(function () {
	        $(".rignthide").eq(index).css("display","none");
	    })
	})
}