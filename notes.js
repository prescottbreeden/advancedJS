// var ninja = 'Libby';
// setTimeout( function (){ console.log(ninja); }, 2000 );
// console.log(ninja);

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");


// function doSomething(possibleCallback) {
//     if (typeof(possibleCallback) === 'function'){
//       console.log('possibleCallback is a callback!');
//       possibleCallback(); //we can invoke the callback!
//     }
//     else {
//       console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//     }
//   }
//   doSomething(function myCallback(){ console.log('yes, I am a callback!') });
//   doSomething('string');


// function makePasta(pasta, makeSauce) {
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     var sauce = makeSauce();          // invoke makeSauce, our callback
//     console.log("Mixing sauce");
//     console.log("Pasta is done!");
//     return pasta + " Pasta with " + sauce + " sauce! Voila!";
//   }
//   function makePesto() {
//     console.log("Making Pesto");
//     return "pesto";
//   }
//   function makeAlfredo() {
//     console.log("Making Alfredo");
//     return "alfredo";
//   }
//   // we pass the whole makePesto recipe to makePasta!
//   console.log(makePasta("Penne", makePesto));
//   // notice lack of parentheses after makePesto.
//   // Remember: we want to pass the function, not execute it and pass a return value.
//   console.log(makePasta("Farfalle", makeAlfredo));

//   var array1 = [1,4,9,16];
//   const map1 = array1.map(x => x*2);

//   console.log(map1);


//simulated really slow DB call.
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setTimeout(function(){
      if (typeof(callback) == 'function'){
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        callback(data);
      }
    }, 10000);
    return data;
  }    
  // ************CHANGES HERE **************
  function requestDataFromDatabase(){
    var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
      console.log(data, "ASynchronous");
      for (var i = 0; i < data.length; i ++){
        console.log(data[i].name);
      }
    });
    console.log(data, "Synchronous");
  }
  //***************** END CHANGES **********************
  function catchFly(){
    console.log('I just caught a fly!');
  }
  requestDataFromDatabase();
  // keep running my program!
  console.log('Hello');
  catchFly();
  //etc.