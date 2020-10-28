import { getSVGs, Loading } from "./utilities/util";
import { Fullpage, FullpageOptions } from "./libraries/Fullpage";
import Axios from "axios";
// import  Swiper  from "swiper";
declare var Swiper:any;

const menu = ()=>{
	const menu = document.querySelector("#menuRes");
	const bot = document.querySelector(".header__bottom");
	const social = document.querySelector(".footer__Isocial");
	if(menu){
		menu.addEventListener("click",(e)=>{
			e.preventDefault();
			console.log(1);
			bot.classList.toggle("active");
			social.classList.toggle("active");
		})
	}
}

const initSwiperProject = ()=>{
	const swiperProject= new Swiper(".swiper__wrapper .swiper-container",{
		speed: 1000,
		spaceBetween: 24,
		slidesPerView:3
	})
}

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
	menu();
	initSwiperProject();
});


