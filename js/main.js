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
		second.style.transform = "translate(0px, 0.5em) scale(1,0)";
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
		
		first.addEventListener('mouseover', function() {
			first.style.transform= "translate(0px, -0.5em) scale(1,0)";
			second.style.transform= "translate(0px, 0px) scale(1, 1)";

			main_splash.style.backgroundImage = "url(" + newLink + ")";
			console.log(newLink);

		});

		second.addEventListener('mouseover', function() {
			newTimer = 0;
			if (intervalId)
				clearTimeout(intervalId);
			main_splash.style.backgroundImage = "url(" + newLink + ")";
		});

		second.addEventListener('mouseout', function() {

			intervalId = setInterval(function() {
				newTimer++;
				//console.log(imgLink + ":" +  newTimer);
				if (newTimer == 5) {
					console.log("times up!");
					second.style.transform= "translate(0px, 0.5em) scale(1,0)";
					first.style.transform= "translate(0px, 0px) scale(1, 1)";
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


let topCell = new notFlipper(" ");
topCell.create("topCell");

let j = new notFlipper("      J");
j.create("j");

let formula = new Flipper("      U", "  FORMULA SAE","formula");
formula.create("formula");

let bae = new Flipper("      S", "BAE SYSTEMS","bae");
bae.create("bae");

let t = new notFlipper("      T");
t.create("t");

let rewire = new Flipper("      I", "   REWIRE LABS","rewire");
rewire.create("rewire");

let enron = new Flipper("      N", "  ENRON RAPTORS","enron");
enron.create("enron");

let midCell = new notFlipper(" ");
midCell.create("midCell");

let word = new Flipper("      L", "WORD CLOCK","wordclock");
word.create("word");

let dell = new Flipper("      I", "   SENIOR DESIGN","dell");
dell.create("dell");

let guadaloop = new Flipper("      U", "     GUADALOOP", "hyperloop");
guadaloop.create("guadaloop");