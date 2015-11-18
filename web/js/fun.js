function start()
{
	//var ids= ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	var myTabDiv = document.getElementById("myTab");
	var tabHTML = "<table class='myTab'>";
	for (var r = 0; r<16;r++)
	{	

		tabHTML=tabHTML+"<tr>";
		for (var c = 0; c<16; c++)
		{	
			if(c==0)
			{
				tabHTML = tabHTML+"<td>"+r.toString(16);+"</td>";
			}
			else
			{
				if(r==0)
				{
					tabHTML = tabHTML+"<td>"+c.toString(16);+"</td>";
				}
				else
				{
					tabHTML=tabHTML+"<td id=R"+r+"C"+c+" onclick='shoot("+r+","+c+")'>";
					tabHTML=tabHTML+ "<img src=./img/fog.png class='img-responsive'>";
					tabHTML=tabHTML+"</td>";
				}
			}

		}
		tabHTML=tabHTML+"</tr>";
	}

	tabHTML=tabHTML+"</table>";
	myTabDiv.innerHTML = tabHTML;
	document.getElementById("button").hidden = "true";
}

function shoot(r,c)
{
	//var ids= ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	var myCell = document.getElementById("R"+r.toString()+"C"+c.toString());

	var str = myCell.getElementsByTagName("img")[0].src; 
	if (str.indexOf("nave") != -1 )
	{
		myCell.innerHTML = "<img src=./img/crossShip.png class='img-responsive'>";
	}
	else if (str.indexOf("natante") != -1 )
	{
		myCell.innerHTML = "<img src=./img/crossBoat.png class='img-responsive'>";
	}
	else if (str.indexOf("crossBoat") != -1 )
	{
		myCell.innerHTML = "<img src=./img/natante.png class='img-responsive'>";
	}
	else if (str.indexOf("crossShip") != -1 )
	{
		myCell.innerHTML = "<img src=./img/nave.png class='img-responsive'>";
	}
	else if (str.indexOf("crossIsola") != -1 )
	{
		myCell.innerHTML = "<img src=./img/island.png class='img-responsive'>";
	}
	else if (str.indexOf("Island") != -1 )
	{
		myCell.innerHTML = "<img src=./img/crossIsola.png class='img-responsive'>";
	}

	else

	{
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