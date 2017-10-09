function isValidCard (text){
  text=prompt("Ingresa tu numero de tarjeta.");

  var strReverse = text.split('').reverse().join('');

  var array = strReverse;

  var newArray = array.split("",array.length);

  for(var i=0; i<newArray.length;i++){
    if(i%2===0){
      
      var double=newArray[i]*2;
      if(double>=10){
        var sum = parseInt(double/10)+ double%10;
      }
    }
  }


  /*var array=[parseInt(text)];

  for(var i=0;i<text.length;i++){
    var x = array.pop();

    var newArray=[];

    newArray.splice(i,0,x);

  }


  console.log(newArray);*/

  console.log(newArray)


}

isValidCard();
