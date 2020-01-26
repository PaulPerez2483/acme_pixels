const hexNums = ["00", "33", "66", "99", "cc", "ff"];

let colorBlock = document.querySelector(".color-block");

let color;
let blocks = "";
for (let i = 0; i < hexNums.length; i++) {
	for (let ii = 0; ii < hexNums.length; ii++) {
		for (let iii = 0; iii < hexNums.length; iii++) {
			color = `${hexNums[i]}${hexNums[ii]}${hexNums[iii]}`;
			blocks += `<div style=background-color:#${color}></div>`;
		}
	}
}

colorBlock.innerHTML = blocks;

colorBlock.addEventListener("click", (ev) => {
	console.dir(ev.target);
	ev.target.classList.toggle("hover_w");
});
