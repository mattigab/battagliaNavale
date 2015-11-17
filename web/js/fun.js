function load()
{
	var cells = ["","",""];
	var myTab = document.getEelementById("myTab");
	var tabHTML = "<table>";
	for (var r = 0; r<15;r++)
	{
		tabHTML=tabHTML+"<tr>";
		for (var c = 0; c<15; c++)
		{	
			tabHTML=tabHTML+"<td>";
			tabHTML=tabHTML+"AA"
			tabHTML=tabHTML+"</td>";

		}
		tabHTML=tabHTML+"</tr>";
	}

	tabHTML=tabHTML+"</table>";

}