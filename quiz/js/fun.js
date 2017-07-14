function start()
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
					tabHTML=tabHTML+"<td id=R"+r+"C"+c+" onclick='shoot("+r+","+c+")'>";
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
	document.getElementById("editgame").style.visibility = 'hidden';
}

function shoot(r,c)
{
	var myCell = document.getElementById("R"+r.toString()+"C"+c.toString());
	var str = myCell.getElementsByTagName("img")[0].src; 
	if (str.indexOf("cantanimatore") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}	
	else if (str.indexOf("ritmo") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}
	else if (str.indexOf("sea") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}
	else if (str.indexOf("prova") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}
	else if (str.indexOf("indovina") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}
	else if (str.indexOf("zoo1") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}
	else if (str.indexOf("zoo2") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}
	else if (str.indexOf("zoo3") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}
	else if (str.indexOf("zoo4") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}
	else if (str.indexOf("zoo5") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}
	else if (str.indexOf("zoo6") != -1 )
	{
		myCell.innerHTML = "<img src=./img/vuoto.png class='img-responsive'>";
	}

	else

	{
	if(map[r][c] == "cantanimatore")
	{
		myCell.innerHTML = "<img src=./img/cantanimatore.png class='img-responsive'>";
		cantanimatore.play();
	}
	else if(map[r][c] == "ritmo")
	{
		myCell.innerHTML = "<img src=./img/ritmo.png class='img-responsive'>";
		ritmo.play();

	}
	else if(map[r][c] == "sea")
	{
		myCell.innerHTML = "<img src=./img/sea.png class='img-responsive'>";
		sea.play();
	}
	else if(map[r][c] == "prova")
	{
		myCell.innerHTML = "<img src=./img/prova.png class='img-responsive'>";
		prova.play();
	}
	else if(map[r][c] == "indovina")
	{
		myCell.innerHTML = "<img src=./img/indovina.png class='img-responsive'>";
		indovina.play();
	}
	else if(map[r][c] == "zoo1")
	{
		myCell.innerHTML = "<img src=./img/zoo1.png class='img-responsive'>";
		miao.play();
	}
	else if(map[r][c] == "zoo2")
	{
		myCell.innerHTML = "<img src=./img/zoo2.png class='img-responsive'>";
		bau.play();
	}
	else if(map[r][c] == "zoo3")
	{
		myCell.innerHTML = "<img src=./img/zoo3.png class='img-responsive'>";
		quaqua.play();
	}
	else if(map[r][c] == "zoo4")
	{
		myCell.innerHTML = "<img src=./img/zoo4.png class='img-responsive'>";
		coccode.play();
	}
	else if(map[r][c] == "zoo5")
	{
		myCell.innerHTML = "<img src=./img/zoo5.png class='img-responsive'>";
		pio.play();
	}
	else if(map[r][c] == "zoo6")
	{
		myCell.innerHTML = "<img src=./img/zoo6.png class='img-responsive'>";
		squit.play();
	}
		
	}

}