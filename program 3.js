
//function 1
function A(x, Y) {     
    Y();
}
//function 2
function Y() {
    console.log('hiiii');
}
A(1, Y);//calling function here variable x and Y function pass as parameters