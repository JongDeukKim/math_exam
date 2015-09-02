
function genExample() {
    //body reference 
    var xNum = 4;
    var yNum = 13;
    var exNumber = 1;
    var body = document.getElementById("magicNum");

    // create elements <table> and a <tbody>
    var tbl     = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // cells creation
    for (var j = 0; j <= yNum; j++) {
        // table row creation
        var row = document.createElement("tr");

        for (var i = 0; i < xNum; i++) {
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table row
             var cellNum = document.createElement("td");
             var typ = document.createAttribute("class");
             typ.value = "num";
             cellNum.attributes.setNamedItem(typ);
             cellNum.appendChild(document.createTextNode(exNumber + ")"));  
             var cell = document.createElement("td");    

              //var cellText = document.createTextNode(randGugudan()); 
             var cellP = document.createElement("p");
             var cellText = randGugudan();
             cellP.innerHTML = cellText;
             var typ2 = document.createAttribute("class");
            typ2.value = "formular";
            cell.attributes.setNamedItem(typ2);
            cell.appendChild(cellP);
            row.appendChild(cellNum);
            row.appendChild(cell);

            exNumber ++;
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

    // tbl border attribute to 
    //tbl.setAttribute("border", "2");

    document.getElementById("control").style.display = "none";
}

function randGugudan()
{
    var i;
    var outFormular = "";
	var vMin = [ document.getElementById("var1Min").value, 
	             document.getElementById("var2Min").value ];
	var vMax = [ document.getElementById("var1Max").value,
	             document.getElementById("var2Max").value ];
    var genVar = [-1, -1];

    for(i=0; i<2; i++)
    {
        var vRange = vMax[i] - vMin[i] + 1;
        var randNum = Math.random()*1000.0;
        randNum = Math.round(randNum);

        genVar[i] = randNum % vRange + parseInt(vMin[i]);
    }

    outFormular = genVar[0] + "<br> x&nbsp;&nbsp " + genVar[1] + "<br><hr><br> ";


	//var x = Math.round((Math.random() * 100)) % 89 +10;
	//var y = Math.round((Math.random() * 10)) % 9 +1;

	return outFormular;
}

function showControl()
{
    document.getElementById("control").style.display = "block";
}
