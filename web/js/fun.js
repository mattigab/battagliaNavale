function load()
{
	//var cells = ["","",""];
	var ids= ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	var myTabDiv = document.getElementById("myTab");
	var tabHTML = "<table>";
	for (var r = 0; r<15;r++)
	{
		tabHTML=tabHTML+"<tr>";
		for (var c = 0; c<15; c++)
		{
			tabHTML=tabHTML+"<td id="+ids[r] + ids[c]+" onclick='shoot("+ids[r]+","+ids[c]+")';>";
			tabHTML=tabHTML+ "<img src=./img/water.png>";

			//"(" +ids[r]+","+ids[c] + ") ";
			tabHTML=tabHTML+"</td>";

		}
		tabHTML=tabHTML+"</tr>";
	}

	tabHTML=tabHTML+"</table>";
	myTabDiv.innerHTML = tabHTML;
}

function shoot(r,c)
{
	var ids= ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	var myCell = document.getElementById(r.toString()+c.toString());
	if(map[ids.indexOf(r.toString())][ids.indexOf(c.toString())] == "nave")
	{
		myCell.innerHTML = "<img src=./img/nave.png>";
	}
	else if(map[ids.indexOf(r.toString())][ids.indexOf(c.toString())] == "natante")
	{
		myCell.innerHTML = "<img src=./img/natante.png>";
	}
	else
	{
		myCell.innerHTML = "<img src=./img/water.png>";
	}

}