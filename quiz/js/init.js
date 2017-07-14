function load()
{
	var myTabDiv = document.getElementById("myTab");
	var tabHTML = "<table class='myTab'>";
	var contatore = 1;
	for (var r = 0; r<7;r++)
	{	

		tabHTML=tabHTML+"<tr>";
		for (var c = 0; c<7; c++)
		{	
			if(c==0)
			{
				tabHTML = tabHTML+"<td><h3></h3></td>";
			}
			else
			{
				if(r==0)
				{
					tabHTML = tabHTML+"<td><h3></h3></td>";
				}
				else
				{
					tabHTML=tabHTML+"<td id=R"+r+"C"+c+" onclick='fill("+r+","+c+")'>";
					tabHTML=tabHTML+ "<img src=./img/base"+contatore+".png class='img-responsive'>";
					tabHTML=tabHTML+"</td>";
					contatore = contatore + 1;
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
	var numCell = r*c
	var str = myCell.getElementsByTagName("img")[0].src; 
	if (str.indexOf("base") != -1 )
	{
		myCell.innerHTML = "<img src=./img/cantanimatore.png class='img-responsive'>";
		map[r][c] = "cantanimatore";
	}
	else	if (str.indexOf("cantanimatore") != -1 )
	{
		myCell.innerHTML = "<img src=./img/ritmo.png class='img-responsive'>";
		map[r][c] = "ritmo";
	}
	else if (str.indexOf("ritmo") != -1 )
	{
		myCell.innerHTML = "<img src=./img/sea.png class='img-responsive'>";
		map[r][c] = "sea";
	}
	else if (str.indexOf("sea") != -1 )
	{
		myCell.innerHTML = "<img src=./img/prova.png class='img-responsive'>";
		map[r][c] = "prova";
	}
	else if (str.indexOf("prova") != -1 )
	{
		myCell.innerHTML = "<img src=./img/indovina.png class='img-responsive'>";
		map[r][c] = "indovina";
	}
	else if (str.indexOf("indovina") != -1 )
	{
		myCell.innerHTML = "<img src=./img/zoo1.png class='img-responsive'>";
		map[r][c] = "zoo1";
	}
	else if (str.indexOf("zoo1") != -1 )
	{
		myCell.innerHTML = "<img src=./img/zoo2.png class='img-responsive'>";
		map[r][c] = "zoo2";
	}
	else if (str.indexOf("zoo2") != -1 )
	{
		myCell.innerHTML = "<img src=./img/zoo3.png class='img-responsive'>";
		map[r][c] = "zoo3";
	}
	else if (str.indexOf("zoo3") != -1 )
	{
		myCell.innerHTML = "<img src=./img/zoo4.png class='img-responsive'>";
		map[r][c] = "zoo4";
	}
	else if (str.indexOf("zoo4") != -1 )
	{
		myCell.innerHTML = "<img src=./img/zoo5.png class='img-responsive'>";
		map[r][c] = "zoo5";
	}
	else if (str.indexOf("zoo5") != -1 )
	{
		myCell.innerHTML = "<img src=./img/zoo6.png class='img-responsive'>";
		map[r][c] = "zoo6";
	}
	else if (str.indexOf("zoo6") != -1 )
	{
		myCell.innerHTML = "<img src=./img/base"+numCell+".png class='img-responsive'>";
		map[r][c] = "base"+numCell;
	}
}

