/**
 * Created by mattiagabbrielli on 17/11/15.
 */

var type = ["nave","acqua","natante"];
var map = [];

for (var ii=0; ii<15; ii++)
{
    for (var jj=0; jj<15; jj++)
    {
        map[ii][jj] = type[Math.floor(Math.random()*3)];
    }
}


