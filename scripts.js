let boxes = document.querySelectorAll(".box");
boxes.forEach(box=>{
	box.addEventListener("click",()=>{
		removeActive();
		box.classList.add("active");
	});
});

function removeActive(){
	boxes.forEach(box=>{
		box.classList.remove("active");
	})
}