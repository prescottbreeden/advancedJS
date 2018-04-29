//js library exercise:

var _ = {
    map: function(array, doSomething) {
        if(Array.isArray(array)) {
            for(let i = 0; i < array.length; i++) {
                array[i] = doSomething(array[i])
            }
            return array;
        }
        else {
            console.log("Type-Error: _map requires an array")
        }
    },
    reduce: function() { 
      // code here;
    },
    find: function() {   
      // code here;
    },
    filter: function() { 
      // code here;
    },
    reject: function() { 
      // code here;
    }
  }