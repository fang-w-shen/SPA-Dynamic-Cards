let font = document.getElementById("font");
let create = document.getElementById("create");
let blog = document.getElementById("blog");
let text = document.getElementById("text");

	
create.addEventListener("click", function() {
	blog.innerHTML += `<div id='blogs'>`+ 
	`<label for="back">Select Background Color</label>
	<input type="color" id="back" name="back" oninput="changecolor(this);">
	<label for="back">Select Font Color</label>
	<input type="color" id="font" name="font" oninput="changefont(this);">` +
	`<p class="blogtext">`+ text.value +`</p>` +
	`<input type="button" id="kill" name="kill" value="delete" onclick="kill(this.parentNode);"></div>`
});

let killall = document.getElementById("killall");
killall.addEventListener("click", function() {
	blog.innerHTML = "";
});

function kill (a) {
	let parent = a.parentNode;
	parent.removeChild(a);
}
function changecolor(a) {
	let parent = a.parentNode;
	let childDiv = parent.getElementsByTagName('input')[0];
	let colors = childDiv.value;
	parent.getElementsByTagName("p")[0].style.backgroundColor = colors;
}

function changefont(a) {
	let parent = a.parentNode;
	let childDiv = parent.getElementsByTagName('input')[1];
	let colors = childDiv.value;
	parent.style.color = colors;
}