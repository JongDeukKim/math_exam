
function genExample() {
    //body reference 
    var xNum = 5;
    var yNum = 11;
    var exNumber = 1;
    var body = document.getElementById("magicNum");
    var totalNum = document.getElementById("probNum").value;
    yNum = (totalNum / xNum);
    yNum = Math.ceil(yNum);

    // create elements <table> and a <tbody>
    var tbl     = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // cells creation
    for (var j = 0; j < yNum; j++) {
        // table row creation
        var row = document.createElement("tr");

        for (var i = 0; i < xNum; i++) {

            var cellProblem = document.createElement("td");
            cellProblem.appendChild(createOneExample(exNumber));
            row.appendChild(cellProblem);

            exNumber ++;

            if(exNumber > totalNum)
            {
                break;
            }
        }

        //row added to end of table body
        tblBody.appendChild(row);
    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>

    if(body.hasChildNodes() == true)
    {
    	body.replaceChild(tbl, body.childNodes[0]);
    }
    else
    {
    	body.appendChild(tbl);
    }

    document.getElementById("control").style.display = "none";
}

function createOneExample(exNumber)
{
    var tbl     = document.createElement("table");
    var typ     = document.createAttribute("class");
    typ.value   = "problem";
    tbl.attributes.setNamedItem(typ);
    var tblBody = document.createElement("tbody");
    var row     = document.createElement("tr");
    var cellNum = document.createElement("td");
    var typ1     = document.createAttribute("class");
    typ1.value   = "num";
    cellNum.attributes.setNamedItem(typ1);
    cellNum.appendChild(document.createTextNode(exNumber + ")"));  

    var cell    = document.createElement("td"); 
    var cellP   = document.createElement("div");
    var cellText = randProblem();
    cellP.innerHTML = cellText;
    var typ2    = document.createAttribute("class");
    typ2.value  = "formular";
    cell.attributes.setNamedItem(typ2);
    cell.appendChild(cellP);
    row.appendChild(cellNum);
    row.appendChild(cell);

    tblBody.appendChild(row);
    tbl.appendChild(tblBody);

    return tbl;
}

function randProblem()
{
    var i;
    var outFormular = "";
	var vMin = [ document.getElementById("var1Min").value, 
	             document.getElementById("var2Min").value ];
	var vMax = [ document.getElementById("var1Max").value,
	             document.getElementById("var2Max").value ];
    var genVar = [-1, -1];
    //var type = document.getElementById("problemType").value;
    var type = document.querySelector('input[name="problemType"]:checked').value;

    var operator = "+";
    if(type == "minus")
    {
        operator = "-";
    }
    else if(type == "multiply")
    {
        operator = "x";
    }

    for(i=0; i<2; i++)
    {
        var vRange = vMax[i] - vMin[i] + 1;
        var randNum = Math.random()*1000.0;
        randNum = Math.round(randNum);

        genVar[i] = randNum % vRange + parseInt(vMin[i]);
    }

    outFormular = genVar[0] + "<br> " + operator + "&nbsp;&nbsp " + genVar[1] + "<br><hr><br> ";

	return outFormular;
}

function showControl()
{
    document.getElementById("control").style.display = "block";
}
