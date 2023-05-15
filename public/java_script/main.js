const inputs = document.querySelectorAll(".input");
const login_btn=document.querySelector('.btn');
const newacc=document.querySelector('.input-div.pass2');
const actn=document.querySelector('.hamburger');

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
})

actn.addEventListener("click",()=>{
	const dv=document.getElementById("exp_menu");
	const dvl=document.getElementById("exp_list");

	const hm1=document.getElementById("d1");
	const hm2=document.getElementById("d2");
	const hm3=document.getElementById("d3");
	dv.style.display="inline";
	dvl.style.display="flex";
	dv.classList.toggle("exp_menu2");
	dvl.classList.toggle("list_style");
	dvl.classList.add("list_style:hover");
    hm1.classList.toggle("dv1");
	hm2.classList.toggle("dv2");
	hm3.classList.toggle("dv3");
});
		
function new_acc(){
	newacc.style.display="revert";
	document.querySelector('#para').innerText="SIGN UP";
	document.querySelector('#create').style.display="none";
	document.querySelector('#forgot').style.display="none";
}

if(newacc.style.display!="none"){
	login_btn.addEventListener("click",()=>{
		const pass=document.querySelector('#cred1').value;
		const pass2=document.querySelector('#cred2').value;
		if(pass!=pass2){
		window.alert("passwords doesnt match!!");
	}
	})
}
