function load()
{
	//var ids= ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	var myTabDiv = document.getElementById("myTab");
	var tabHTML = "<table class='myTab'>";
	for (var r = 0; r<15;r++)
	{	
		tabHTML=tabHTML+"<tr>";
		for (var c = 0; c<15; c++)
		{	
			tabHTML=tabHTML+"<td id="+r+c+" onclick='shoot("+r+","+c+")'>";
			tabHTML=tabHTML+ "<img src=./img/fog.png class='img-responsive'>";
			tabHTML=tabHTML+"</td>";

		}
		tabHTML=tabHTML+"</tr>";
	}

	tabHTML=tabHTML+"</table>";
	myTabDiv.innerHTML = tabHTML;
}

function shoot(r,c)
{
	//var ids= ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	var myCell = document.getElementById(r.toString()+c.toString());

	//alert(r.toString()+c.toString())
	if(map[r][c] == "nave")
	{

		myCell.innerHTML = "<img src=./img/nave.png class='img-responsive'>";
	}
	else if(map[r][c] == "natante")
	{
		myCell.innerHTML = "<img src=./img/natante.png class='img-responsive'>";
	}
	else if(map[r][c] == "isola")
	{
		myCell.innerHTML = "<img src=./img/island.png class='img-responsive'>";
	}
	else
	{
		myCell.innerHTML = "<img src=./img/water.png class='img-responsive'>";
	}
	/*if(map[ids.indexOf(r.toString())][ids.indexOf(c.toString())] == "nave")
	{
		myCell.innerHTML = "<img src=./img/nave.png class='img-responsive'>";
	}
	else if(map[ids.indexOf(r.toString())][ids.indexOf(c.toString())] == "natante")
	{
		myCell.innerHTML = "<img src=./img/natante.png class='img-responsive'>";
	}
	else
	{
		myCell.innerHTML = "<img src=./img/water.png class='img-responsive'>";
	}*/

}