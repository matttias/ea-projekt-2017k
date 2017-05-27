//TEST
/*function dropdownFunction() {
    document.getElementById("Ydropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdownbtn')) {
    var Ydropdowns = document.getElementsByClassName("YdropdownContent");
    var i;
    for (i=0; i<Ydropdowns.length; i++) {
      var openDropdown = Ydropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
	var e = document.getElementById("dropdown");
	var strUser = e.options[e.selectedIndex].text;
	console.log(strUser);
}
*/
//Välja printimiseks
// var x1, x2, y1, y2;
// var matrix = [];
// var matrix1 = [];
// var matrix2 = [];
// var answerMatrix1 = [];
// var answerMatrix2 = [];
// var inputBoxvalue1;
// var inputBoxvalue2;
// var IDCounter = 0;


// **** GLOBAALSED MUUTUJAD ****

var m1x, m1y, m2x, m2y;



// **** ÜLDINE FUNKTSIOON MAATRIKSITE GENEREERIMISEKS ****

function generateMatrix() {
	
	m1x = document.getElementById("m1x").value;
	m1y = document.getElementById("m1y").value;
	m2x = document.getElementById("m2x").value;
	m2y = document.getElementById("m2y").value;
	
	
	var m1 = document.getElementById("matrix1");
	var m2 = document.getElementById("matrix2");
	var mA = document.getElementById("matrixAnswer");
	var mFA = document.getElementById("matrixFinalAnswer");
	
	if(m1y === m2x) {
		
		console.log("Saab arvutada");
		console.log("Esimene maatriks on m1x x m1y (" + m1x + " x " + m1y + ")");
		console.log("Teine maatriks on m2x x m2y (" + m2x + " x " + m2y + ")");
		
		if(m1 && m2 && mA && mFA) {
			
			m1.innerHTML = "";
			m2.innerHTML = "";
			mA.innerHTML = "";
			mFA.innerHTML = "";
			
			createMatrix1();
			createMatrix2();
			createMatrixAnswer();
			createMatrixFinalAnswer();
			
		} else {
			
			createMatrix1();
			createMatrix2();
			createMatrixAnswer();
			createMatrixFinalAnswer();
		}
		
	} else {
		
		console.log("Ei saa arvutada");
		alert("Ei saa genereerida, muuda maatriksite suuruseid!");
		
	}
}



// **** FUNKTSIOON, MIS GENEREERIB ESIMESE MAATRIKSI ****

function createMatrix1() {
	
	var matrix1Container = document.getElementById("matrix1Container");
	m1Width = 42 * m1y;
	m1Height = 28 * m1x;
	matrix1Container.style.width = m1Width + "px";
	matrix1Container.style.height = m1Height + "px";
	
	var matrix1 = document.getElementById("matrix1");
	var tableBody = document.createElement("tbody");
	
	for(var i = 0; i < m1x; i++) {
		var row = document.createElement("tr");
		
		for(var j = 0; j < m1y; j++) {
			var rowId = i + 1;
			var colId = j + 1;
			var cell = document.createElement("input");
			cell.setAttribute("id", "a" + rowId + colId);
			cell.setAttribute("type", "text");
			row.appendChild(cell);
			
		}
		tableBody.appendChild(row);
	}
	matrix1.appendChild(tableBody);
}



// **** FUNKTSIOON, MIS GENEREERIB TEISE MAATRIKSI ****

function createMatrix2() {
	
	var matrix2Container = document.getElementById("matrix2Container");
	m2Width = 42 * m2y;
	m2Height = 28 * m2x;
	
	m1Width = 42 * m1y;
	m2Position = m1Width + 20;
	
	matrix2Container.style.width = m2Width + "px";
	matrix2Container.style.height = m2Height + "px";
	matrix2Container.style.left = m2Position + "px";
	
	var matrix2 = document.getElementById("matrix2");
	var tableBody = document.createElement("tbody");
	
	for(var i = 0; i < m2x; i++) {
		var row = document.createElement("tr");
		
		for(var j = 0; j < m2y; j++) {
			var rowId = i + 1;
			var colId = j + 1;
			var cell = document.createElement("input");
			cell.setAttribute("id", "b" + rowId + colId);
			cell.setAttribute("type", "text");
			row.appendChild(cell);
			
		}
		tableBody.appendChild(row);
	}
	matrix2.appendChild(tableBody);
}



// **** FUNKTSIOON, MIS GENEREERIB VAHEPEALSE VASTUSE MAATRIKSI (see on praegu potentsiaalselt placeholder) ****

function createMatrixAnswer() {
	
	var matrixAnswerContainer = document.getElementById("matrixAnswerContainer");
	mAnswerWidth = 42 * m2y * 3;
	mAnswerHeight = 28 * m1x;
	
	m1Width = 42 * m1y;
	m2Width = 42 * m2y;
	mAnswerPosition = m1Width + m2Width + 30;
	
	matrixAnswerContainer.style.width = mAnswerWidth + "px";
	matrixAnswerContainer.style.height = mAnswerHeight + "px";
	matrixAnswerContainer.style.left = mAnswerPosition + "px";
	
	var matrixAnswer = document.getElementById("matrixAnswer");
	var tableBody = document.createElement("tbody");
	
	for(var i = 0; i < m1x; i++) {
		var row = document.createElement("tr");
		
		for(var j = 0; j < m2y; j++) {
			var rowId = i + 1;
			var colId = j + 1;
			var cell = document.createElement("input");
			cell.setAttribute("id", "c" + rowId + colId);
			cell.setAttribute("class", "matrixAnswerInput");
			cell.setAttribute("type", "text");
			row.appendChild(cell);
			
		}
		tableBody.appendChild(row);
	}
	matrixAnswer.appendChild(tableBody);
}



// **** FUNKTSIOON, MIS GENEREERIB LÕPLIKU VASTUSE MAATRIKSI ****

function createMatrixFinalAnswer() {
	
	var matrixFinalAnswerContainer = document.getElementById("matrixFinalAnswerContainer");
	mFinalAnswerWidth = 42 * m2y;
	mFinalAnswerHeight = 28 * m1x;
	
	m1Width = 42 * m1y;
	m2Width = 42 * m2y;
	mAnswerWidth = 42 * m2y * 3;
	mFinalAnswerPosition = m1Width + m2Width + mAnswerWidth + 40;
	
	matrixFinalAnswerContainer.style.width = mFinalAnswerWidth + "px";
	matrixFinalAnswerContainer.style.height = mFinalAnswerHeight + "px";
	matrixFinalAnswerContainer.style.left = mFinalAnswerPosition + "px";
	
	var matrixFinalAnswer = document.getElementById("matrixFinalAnswer");
	var tableBody = document.createElement("tbody");
	
	for(var i = 0; i < m1x; i++) {
		var row = document.createElement("tr");
		
		for(var j = 0; j < m2y; j++) {
			var rowId = i + 1;
			var colId = j + 1;
			var cell = document.createElement("input");
			cell.setAttribute("id", "d" + rowId + colId);
			cell.setAttribute("type", "text");
			row.appendChild(cell);
			
		}
		tableBody.appendChild(row);
	}
	matrixFinalAnswer.appendChild(tableBody);
}



// **** KÄIVITAB ARVUTAMISE ****

function calculateMatrix() {
	
	calculateMatrixAnswer();
	calculateMatrixFinalAnswer();
	
}



// **** GENEREERIB VAHETULEMUSE ****

function calculateMatrixAnswer() {
	
	var c = 1;
	
	for(var x = 1; x <= m1x; x++) {
		
		for(var y = 1; y <= m2y; y++) {
			
			var matrixAnswer = document.getElementById("c"+x+y);
			var matrixAnswerString = "";
			
			for(var i = 0; i < m1y; i++) {
				
				var a = document.getElementById("a"+x+c).value;
				var b = document.getElementById("b"+c+y).value;
				matrixAnswerString += a + "*" + b + " + ";
				c++;
			}
			var strLength = matrixAnswerString.length;
			matrixAnswer.value = matrixAnswerString.slice(0, strLength - 3);	
			c = 1;
		}
	}
}



// **** ARVUTAB MAATRIKSI VÄÄRTUSE ****

function calculateMatrixFinalAnswer() {
	
	var c = 1;
	
	for(var x = 1; x <= m1x; x++) {
		
		for(var y = 1; y <= m2y; y++) {
			
			var matrixAnswer = document.getElementById("d"+x+y);
			var matrixAnswerString = "";
			
			for(var i = 0; i < m1y; i++) {
				
				var a = document.getElementById("a"+x+c).value;
				var b = document.getElementById("b"+c+y).value;
				matrixAnswerString += a + "*" + b + " + ";
				c++;
			}
			var strLength = matrixAnswerString.length;
			matrixAnswer.value = math.eval(matrixAnswerString.slice(0, strLength - 3));	
			c = 1;
		}
	}
}


















//EI TEA KAS ON KÕIGE OPTIMAALSEM VÄÄRTUSE SAAMISE VIIS
function Calculate(){
	
	for(var i=0; i<x1; i++) {
		matrix[i] = [];
		for(var j=0; j<y1; j++) {
			matrix[i][j] = undefined;
			console.log(matrix[i][j]);
			//CreateInput(x1);
		}
	}
	
	IDCounter = 0;
	for(var i=0; i<x1; i++) {
		for(var j=0; j<y1; j++) {
			IDCounter++;
			//console.log("IDCOUNTER1: "+IDCounter);
			//inputBoxvalue1 = document.getElementById("inputmatrix" + IDCounter).value;
			matrix[i][j] = document.getElementById("inputmatrix" + IDCounter).value;
			console.log("Maatriks: "+matrix[i][j] + "; I:" + i + "; J:"+j);
			//console.log("inputBoxvalue1: "+inputBoxvalue1);
			//matrix1.push(inputBoxvalue1);
			/*
			MAATRIKS PEAKS OLEMA KUJUL (2x2)
			1 2
			3 4
			*/
		}
	}
	console.log("Esimene maatriks: "+matrix1);
	IDCounter = 30;
	for(var i=0; i<x2; i++) {
		for(var j=0; j<y2; j++) {
			IDCounter++;
			//console.log("IDCOUNTER2: "+IDCounter);
			inputBoxvalue2 = document.getElementById("inputmatrix" + IDCounter).value;
			//console.log("inputBoxvalue2: "+inputBoxvalue2);
			matrix2.push(inputBoxvalue2);
			//var test+IDCounter = inputBoxvalue2;
			//console.log("MUUTUJA TEST+IDCOUNTER"+ window["test"+IDCounter]);
		}
	}
	console.log("Teine maatriks: " + matrix2);
	
	//http://jsfiddle.net/xW7d8/
	
	/*
	answerMatrix1 =
	answerMatrix2 = 
	
	
	for(var i=0; i<x1; i++) {
		for(var j=0; j<x2; j++) {
			var test = (matrix1[i]*matrix2[j]) + (matrix1[i]*matrix2[j]);
			console.log("TEST VASTUS TSÜKLI SEES: " + test);
		}
	}
	
	var test = (matrix1[0]*matrix2[0]) + (matrix1[1]*matrix2[2]);
	console.log("TEST VASTUS: "+test);
	*/
	
	
	//https://www.youtube.com/watch?v=x7zua7fhyIw
	//ASI MIDA VÕIK IMITEERIDA---->https://mkaz.tech/math/javascript-linear-algebra-calculator/
	
}

/*
function Delete(){
	console.log("KUSTUTA");
	
	var tables = document.getElementsByTagName("TABLE");
	for (var i=tables.length-1; i>=0;i-=1){
		console.log(tables[i]);
		if (tables[i]){
			tables[i].parentNode.removeChild(tables[i]);
		}
	}
	
		
	//document.getElementById("InputTable1").deleteRow(0);
	
	/*
	var table = document.getElementById("InputTable1");
	var rowCount = table.rows.length;
	console.log("rowCount: "+rowCount);
	for(var i=0; i<x1; i++) {
		//for(var i=0; i<x2; i++) {
		//while(table.rows.length > 0) {
		  table.deleteRow(i);
		  console.log("KUSTUTA TSÜKLI SEES");
		//}
		}
	}
	*/
//}


/* 2x2 maatriksi arvutamine
(inputmatrix1*inputmatrix31)+(inputmatrix2*inputmatrix33)	(inputmatrix1*inputmatrix32)+(inputmatrix2*inputmatrix34)
(inputmatrix3*inputmatrix31)+(inputmatrix4*inputmatrix33)	(inputmatrix3*inputmatrix32)+(inputmatrix4*inputmatrix34)
*/



//function CreateInput() {
	/*
	var x = document.createElement("INPUT");
	x.setAttribute("id", "inputmatrix");
	x.setAttribute("type", "text");
	document.body.appendChild(x);
	*/	
//}