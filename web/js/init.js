function load()
{
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
					tabHTML=tabHTML+"<td id=R"+r+"C"+c+" onclick='fill("+r+","+c+")'>";
					tabHTML=tabHTML+ "<img src=./img/fog.png class='img-responsive'>";
					tabHTML=tabHTML+"</td>";
				}
			}

		}
		tabHTML=tabHTML+"</tr>";
	}

	tabHTML=tabHTML+"</table>";
	myTabDiv.innerHTML = tabHTML;
}

function fill(r,c)
{
	var myCell = document.getElementById("R"+r.toString()+"C"+c.toString());

	var str = myCell.getElementsByTagName("img")[0].src; 
	if (str.indexOf("fog") != -1 )
	{
		myCell.innerHTML = "<img src=./img/nave.png class='img-responsive'>";
		map[r][c] = "nave";
	}
	else	if (str.indexOf("nave") != -1 )
	{
		myCell.innerHTML = "<img src=./img/natante.png class='img-responsive'>";
		map[r][c] = "natante";
	}
	else if (str.indexOf("natante") != -1 )
	{
		myCell.innerHTML = "<img src=./img/island.png class='img-responsive'>";
		map[r][c] = "isola";
	}
	else if (str.indexOf("island") != -1 )
	{
		myCell.innerHTML = "<img src=./img/fog.png class='img-responsive'>";
		map[r][c] = "acqua";
	}

	
}

