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

let gridForm = document.forms[0];
gridForm.addEventListener("submit", (ev) => {
	ev.preventDefault();
	let width = document.querySelector('input[name="width"]').value;
	let height = document.querySelector('input[name="height"]').value;
	createGrid(width, height);
});

const createGrid = (row, cols) => {
	let gridContainer = document.querySelector(".grid-container");
	let grid = [];
	row = row * 1;
	cols = cols * 1;
	let multi = row * cols;
	for (let i = 0; i < row; i++) {
		gridContainer.innerHTML += `<div id=${i} class="parent"></div>`;
	}
	console.log(grid);
};
