// let i1 = document.getElementById("i1");
// let i1a = document.getElementById("i1a");

// i1.onmouseover = function () {
//     i1.style.animationName='hide';
//     i1a.style.animationName='show';
//     i1.style.animationDuration="1s";
//     i1a.style.animationDuration="1s";
//     i1.style.transform= "translate(0px, 0.5em) scale(1,0)"
//     i1a.style.transform= "translate(0px, 0px) scale(1, 1)";
// }

let main_splash = document.getElementById("right_splash");

class Flipper {
	constructor(_firstWord, _secondWord, _imgLink) {
		this.firstWord = _firstWord;
		this.secondWord = _secondWord;
		this.imgLink = _imgLink;
		console.log(this.imgLink);

		this.timerReset = 0;

	}

	create(id) {
		var container = document.createElement("div");
		container.className="container";

		var first = document.createElement("H1");
		first.innerHTML=this.firstWord;
		first.setAttribute("id", id+"1");
		first.style.transform = "translate(0px, 0px) scale(1, 1)";
		first.style.position = "absolute";	

		var second = document.createElement("H1");
		var secondText = document.createTextNode(this.secondWord);
		second.innerHTML=this.secondWord;
		second.style.transform = "translate(0px, 0.4em) scale(1,0)";
		second.style.position = "relative";

		container.appendChild(first);
		container.appendChild(second);

		document.body.appendChild(container);

		let firstRect = first.getBoundingClientRect();
		second.style.top = firstRect.top;
		second.style.left = firstRect.left;
		

		//let newLink = this.imgLink;
		let newLink = './img/' + this.imgLink + '_img_1.jpg';
		let imgLink = this.imgLink;

		let newTimer = this.timerReset;
		let intervalId = null;
		
		container.addEventListener('mouseover', function() {
			first.style.transform= "translate(0px, -0.4em) scale(1,0)";
			second.style.transform= "translate(0px, 0px) scale(1, 1)";

			main_splash.style.backgroundImage = "url(" + newLink + ")";
			console.log(newLink);

		});

		container.addEventListener('mouseover', function() {
			newTimer = 0;
			if (intervalId)
				clearTimeout(intervalId);
			main_splash.style.backgroundImage = "url(" + newLink + ")";
		});

		container.addEventListener('mouseout', function() {

			intervalId = setInterval(function() {
				newTimer++;
				//console.log(imgLink + ":" +  newTimer);
				if (newTimer == 5) {
					console.log("times up!");
					second.style.transform= "translate(0px, 0.4em) scale(1,0)";
					first.style.transform= "translate(0px, 0px) scale(1, 1)";
					first.style.color = "#f4f4f4";
					clearTimeout(intervalId);
				}
			}, 1000);


		});

	}
}

class notFlipper {
	constructor(_firstWord) {
		this.firstWord = _firstWord;
	}

	create(id) {
		var container = document.createElement("div");
		container.className="container";

		var first = document.createElement("H1");
		first.innerHTML=this.firstWord;
		first.setAttribute("id", id+"1");
		first.style.position = "relative";	

		container.appendChild(first);

		document.body.appendChild(container);
	}
}

class MidFlipper {
	constructor(_left, _middle, _right) {
		this.leftWord = _left;
		this.middleWord = _middle;
		this.rightWord = _right;

		this.timerReset = 0;
	}
// var first = document.createElement("H1");
// 		first.innerHTML=this.firstWord;
// 		first.setAttribute("id", id+"1");
// 		first.style.transform = "translate(0px, 0px) scale(1, 1)";
// 		first.style.position = "absolute";	

// 		var second = document.createElement("H1");
// 		var secondText = document.createTextNode(this.secondWord);
// 		second.innerHTML=this.secondWord;
// 		second.style.transform = "translate(0px, 0.4em) scale(1,0)";
// 		second.style.position = "relative";
	create(id) {
		var container = document.createElement("div");
		container.className = "container";

		var left = document.createElement("span");
		left.innerHTML = this.leftWord;
		left.setAttribute("id", id+"_flip");
		left.style.transform = "translate(0px, -0.4em) scale(1,0)";
		left.style.position = "relative";

		var middle = document.createElement("span");
		middle.innerHTML = this.middleWord;
		middle.setAttribute("id", id+"_nflip");
		middle.style.transform = "translate(0px, 0px) scale(1,1)";
		middle.style.position = "relative";

		var right = document.createElement("span");
		right.innerHTML = this.rightWord;
		right.setAttribute("id", id+"_flip");
		right.style.transform = "translate(0px, -0.4em) scale(1,0)";
		right.style.position = "relative";

		container.appendChild(left);
		container.appendChild(middle);
		container.appendChild(right);

		document.body.appendChild(container);

		let newTimer = this.timerReset;
		let intervalId = null;

		container.addEventListener('mouseover', function() {
			left.style.color = "#000000";
			right.style.color = "#000000";

			left.style.transform= "translate(0px, 0px) scale(1, 1)";
			right.style.transform= "translate(0px, 0px) scale(1, 1)";
			left.style.textShadow = "0px 0px 0px #000000";
    		right.style.textShadow = "0px 0px 0px #000000";

			newTimer = 0;
			if (intervalId)
				clearTimeout(intervalId);
			//main_splash.style.backgroundImage = "url(" + newLink + ")";
		});

		container.addEventListener('mouseout', function() {
			left.style.color = "#ffffff";
			right.style.color = "#ffffff";
    		left.style.textShadow = "0px 0px 1px #000000";
    		right.style.textShadow = "0px 0px 1px #000000";
			intervalId = setInterval(function() {
				newTimer++;
				//console.log(imgLink + ":" +  newTimer);
				if (newTimer == 5) {
					console.log("times up!");
					left.style.transform= "translate(0px, 0.4em) scale(1,0)";
					right.style.transform= "translate(0px, 0.4em) scale(1,0)";
					
					clearTimeout(intervalId);
				}
			}, 1000);


		});

	}
}


let topCell = new notFlipper(" ");
topCell.create("topCell");

let j = new notFlipper("      J");
j.create("j");

 // let oldFormula = new Flipper("      U         ", "  FORMULA SAE","formula");
 // oldFormula.create("oldFormula");

let formula = new MidFlipper("  FORM", "U", "LA SAE    ");
formula.create("formula");

let bae = new MidFlipper("BAE SY", "S","TEMS     ");
bae.create("bae");

let t = new notFlipper("      T");
t.create("t");

let rewire = new MidFlipper("   REW", "I","RE LABS  ");
rewire.create("rewire");

let enron = new MidFlipper("  ENRO", "N"," RAPTORS ");
enron.create("enron");

let midCell = new notFlipper(" ");
midCell.create("midCell");

let word = new MidFlipper("WORD C", "L","OCK      ");
word.create("word");

let dell = new MidFlipper("   SEN", "I","OR DESIGN");
dell.create("dell");

let guadaloop = new MidFlipper("     G", "U", "ADALOOP  ");
guadaloop.create("guadaloop");