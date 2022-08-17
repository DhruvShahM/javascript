var n=2;//varibale stored in memory context

//fucntion stored in memory context
function square(num){
    var ans=num*num;
    return ans;
}
//

var square2 = square(n);//new execution context is created
var square4 = square(4);//new execution context is created
