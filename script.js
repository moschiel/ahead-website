
var myIndex = 0;

function carousel() {
  let i;
  let x = document.getElementsByClassName("service-part__item");

	if(screen.width <= 576){
  
		for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;

		if (myIndex > x.length) {myIndex = 1}    
		x[myIndex-1].style.display = "block";  
		setTimeout(carousel, 3000); // Change image every 2 seconds
	}
}

function responsive() {
	let x = document.querySelector('.menu')
	let ul = document.querySelector('nav ul')

	x.addEventListener('click', () => {

			if(	ul.style.opacity === "0"){
				ul.style.opacity = "1";
				ul.style.visibility = "visible"
			}else{
				ul.style.opacity = "0";
				ul.style.visibility = "hidden"				
			}
	})
}


responsive()
carousel();
