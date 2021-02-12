
 exports.min = function min (array){
    array = typeof array !== 'undefined' ? array : [0];
    if (array.length === 0) return 0;
    else {return  Math.min.apply(null, array);}
}

   exports.max = function max (array) {
    array = typeof array !== 'undefined' ? array : [0];
    if (array.length === 0) return 0;
    else {return  Math.max.apply(null, array);}
}

   exports.avg = function avg (array) {
  
    array = typeof array !== 'undefined' ? array : [0];
    var sum = 0;
for (var i = 0; i < array.length; i++) 
{sum += array[i];}

if (array.length === 0) return 0;
else {return sum/array.length}
    }
