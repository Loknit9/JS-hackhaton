
// start function randVal
function randVal(myVal, other){
    
    if(Array.isArray(myVal)){
        
        var ranInArray = Math.floor(Math.random() * myVal.length);
    return myVal[ranInArray];
        
        
    }else{
        
        var randnum = Math.floor(Math.random() * myVal);
        return randnum;
        
    }
    
    
}


// end function randVal

var colors = ['#5999f1','#26b85d','#375ca4','#f4e736',' #f366d8','#fa590c'];

var size = [50,40,30,20,25];

let form1 = 

window.onmousemove = function(e){
    var x = e.clientX ;
    var y = e.clientY ;
    var cl = ['one','two','three','four'];
        for(i = 0 ; i < 1 ; i++){
            var rSize = randVal(size) ;
            var elm = document.createElement('div');
            elm.style.left = x - randVal(50) + "px";
            elm.style.top = y - randVal(50) + "px";
            elm.className = "mydiv" + " " + randVal(cl);
            elm.style.backgroundColor = randVal(colors);
              // Générer des valeurs aléatoires pour border-radius
            var borderRadius = randVal(101) + '% ' + randVal(101) + '% ' + randVal(101) + '% ' + randVal(101) + '% / ' +
            randVal(101) + '% ' + randVal(101) + '% ' + randVal(101) + '% ' + randVal(101) + '%';
            elm.style.borderRadius = borderRadius;
            elm.style.height = rSize + "px";
            elm.style.width = rSize + "px";
            document.body.appendChild(elm);
            
        }   
}


var mydiv = document.getElementsByClassName("mydiv");
var bd =document.body;

var bdColors = ['#bbb7e7','#fec5ce','# #a7a709','#b7d5ff','#52a793','#dceb9c','#343c89'];

setInterval(function(){
    for(x = 0 ; x < mydiv.length ; x++){

        mydiv[x].remove();
    }

},1000);

setInterval(function(){
            bd.style.backgroundColor =randVal(bdColors);
            },4000)