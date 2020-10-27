import { getSVGs, Loading } from "./utilities/util";
import { Fullpage, FullpageOptions } from "./libraries/Fullpage";
import Axios from "axios";


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

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
	menu();

});


