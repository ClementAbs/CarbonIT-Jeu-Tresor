const readline = require('readline')
const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rd.question('Carte du tresor: ', (entry) => {
console.log(entry);
entryTransformed=entry.toString().split(' - ');
console.log(entryTransformed);


    for(var i = 1; i<entryTransformed.length; i++){

entryTransformed[i]=parseInt(entryTransformed[i]);
}

if(entryTransformed[0]= 'C'){


    var theMap = new Array(entryTransformed[1]);

for (var i = 0; i < theMap.length; i++) {
  theMap[i] = new Array(entryTransformed[2]);
}
console.log(theMap);

}

rd.question('Montagne :  ', (entryMountain) => {
        console.log(entryMountain);
        entryTransformed2=entryMountain.toString().split(' - ');
        console.log(entryTransformed2);

        if(entryMountain[0]= 'M'){            

             theMap.unshift(0, parseInt(entryTransformed2[1]),0 ,0);
             console.log(theMap);

        }

    


  rd.close();

});
})

