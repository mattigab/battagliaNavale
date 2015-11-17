/**
 * Created by mattiagabbrielli on 17/11/15.
 */

var type = ["nave","acqua","natante"];
var N = 15;
var map =new Array(N);

for(var i=0; i<N; i++){
    map[i]=new Array(N);
}

for(var ii=0; ii<N; ii++){
    for (var jj=0;jj<N; jj++){
        map[ii][jj] = type[Math.floor(Math.random()*3)];
    }
}


