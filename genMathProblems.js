
function genExample() {
    //body reference 
    var xNum = 5;
    var yNum = 11;
    var exNumber = 1;
    var body = document.getElementById("magicNum");
    var totalNum = 10;
    if(typeof(Storage) !== "undefined") 
    {
        totalNum = sessionStorage.probNum;
    }
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
    var genVar = [-1, -1];
    var type = "plus";
    var vMin = [1, 1];
    var vMax = [99, 99];
    if(typeof(Storage) !== "undefined") 
    {
        type = sessionStorage.type;
        vMin[0] = sessionStorage.var1Min;
        vMax[0] = sessionStorage.var1Max;
        vMin[1] = sessionStorage.var2Min;
        vMax[1] = sessionStorage.var2Max;
    }

    for(i=0; i<2; i++)
    {
        var vRange = vMax[i] - vMin[i] + 1;
        var randNum = Math.random()*1000.0;
        randNum = Math.round(randNum);

        genVar[i] = randNum % vRange + parseInt(vMin[i]);
    }


    if(type == "divide")
    {
        /* var multiple = genVar[0] * genVar[1];
        var margin = genVar[0] % genVar[1];
        genVar[0] = genVar[0] + (genVar[1] - margin); */
	var reminder = genVar[0] % genVar[1];
	var newVar0 = genVar[0] - reminder;
	if(newVar0 <= 0) {
		newVar0 += reminder;
	}
	genVar[0] = newVar0;    
	    

        outFormular = "<table border=0 cellpadding=0 cellspacing=0>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td valign=bottom align=left></td>\
                            </tr>\
                            <tr>\
                                <td></td>\
                                <td rowspan=2 valign=bottom align=right>\
                                    <img src='./images/div-imgL.gif' height=30 width=10></td>\
                                <td valign=top align=left>\
                                    <img src='./images/div-imgR.gif' width=30 height=9></td>\
                            </tr>\
                            <tr>\
                                <td valign=top align=left>"+ genVar[1] + "</td>\
                                <td valign=top align=center>" + genVar[0] + " </td>\
                            </tr>\
                        </table>";        
    }
    else 
    {
        var operator = "+";
        if(type == "minus")
        {
            operator = "-";
        }
        else if(type == "multiply")
        {
            operator = "x";
        }


        outFormular = genVar[0] + "<br> " + operator + "&nbsp;&nbsp " + genVar[1] + "<br><hr><br> ";
    }
	return outFormular;
}

function showControl()
{
    document.getElementById("control").style.display = "block";
}
