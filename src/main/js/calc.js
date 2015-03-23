function calc(numb1, numb2)
{
    var array1 = [0, 1, 2];
    var array2 = [3, 4, 5];
    numbers.matrix.addition(array1, array2);

    var array = [[2, 0], [-1, 3]];                // Array
    var matrix = math.matrix([7,1], [-2, 3])
    var a= [1, 2, 3], b= [4, 5, 6], c= [1, 2, 3];
    sumArrayElements(a, b, c)
    math.square(matrix);
    //console.log(math.square(array))
    return numb1+numb2;
}

function myFunction()
{
    var x = document.getElementById("frm1");
    var text = "";
    var i;

    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
    return text
}
function sumArrayElements(){
        var arrays= arguments, results= [],
        count= arrays[0].length, L= arrays.length,
        sum, next= 0, i;
        while(next<count){
            sum= 0, i= 0;
            while(i<L){
                sum+= Number(arrays[i++][next]);
            }
            results[next++]= sum;
        }
        return results;
}