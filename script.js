const elem = document.getElementById("elem");
const title = "COMING  SOON!";
let i = 0;
let colors = ["red", "blue", "pink", "grey", "purple", "brown"]
function typeText(){
	if (i < title.length){
	elem.innerHTML += `<span style="color: ${colors[Math.floor(Math.random() * colors.length)]}">${title.charAt(i)}</span>`;
	i++;
	setTimeout(typeText, 100);

	}
	
}
typeText()