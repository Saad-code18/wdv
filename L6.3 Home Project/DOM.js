var i=0;
var array=[];
var n=parseInt(prompt('Enter the Total Number of Array:'));
while(i<n){
    var sum=parseInt(prompt('Enter Number:'));
    array.push(sum);
    i++;

}
document.write('The Array is:',array,'<br>');
var dream=parseInt(prompt('Enter Position to reveal the value:'));
document.write(array[dream],'<br>');
array.pop();
document.write(array,'<br>');
document.write(array.join('$'));




