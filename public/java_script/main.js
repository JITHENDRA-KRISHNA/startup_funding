const inputs = document.querySelectorAll(".input");
const login_btn=document.querySelector('.btn');
const newacc=document.querySelector('.input-div.pass2');
const actn=document.querySelector('.hamburger');
const fundingGoalMinInput = document.getElementById('funding-goal-min');
const fundingGoalMaxInput = document.getElementById('funding-goal-max');
const fundingGoalMinValue = document.getElementById('funding-goal-min-value');
const fundingGoalMaxValue = document.getElementById('funding-goal-max-value');

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}
function togglePasswordVisibility() {
	// event.preventDefault();
	const passwordInput = document.getElementById('cred1');
	const passwordToggleBtn = document.getElementById('eye');

	if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';

      } else {
        passwordInput.type = 'password';
        passwordToggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
      }
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

actn.addEventListener('click', function() {
	this.classList.toggle('open');
	const dv=document.getElementById("exp_menu");
	const dvl=document.getElementById("exp_list");
	dv.style.display="inline";
	dvl.style.display="flex";
	dv.classList.toggle("exp_menu2");
	dvl.classList.toggle("list_style");
	dvl.classList.add("list_style:hover");
  });		
function new_acc(){
	newacc.style.display="revert";
	document.querySelector('#para').innerText="SIGN UP";
	document.querySelector('#create').style.display="none";
	document.querySelector('#forgot').style.display="none";
}

// if(newacc.style.display!="none"){
// 	login_btn.addEventListener("click",()=>{
// 		const pass=document.querySelector('#cred1').value;
// 		const pass2=document.querySelector('#cred2').value;
// 		if(pass!=pass2){
// 		window.alert("passwords doesnt match!!");
// 	}
// 	})
// }

// fundingGoalMinInput.addEventListener('input', updateFundingGoalValues);
// fundingGoalMaxInput.addEventListener('input', updateFundingGoalValues);
// function updateFundingGoalValues() {
//   fundingGoalMinValue.textContent = fundingGoalMinInput.value;
//   fundingGoalMaxValue.textContent = fundingGoalMaxInput.value;
// }

// actn.addEventListener("click",()=>{
// 	const hm1=document.getElementById("d1");
// 	const hm2=document.getElementById("d2");
// 	const hm3=document.getElementById("d3");
//     hm1.classList.toggle("dv1");
// 	hm2.classList.toggle("dv2");
// 	hm3.classList.toggle("dv3");
// });
