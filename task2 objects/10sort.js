var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
 ];
 
 // Sort the array by the 'libraryID' property
 library.sort((a, b) => a.libraryID - b.libraryID);
 
 // Function to print objects with sorted keys and their values
 function printSortedObjects(arr) {
     arr.forEach(obj => {
         // Get and sort the keys of the object
         let sortedKeys = Object.keys(obj).sort();
 
         // Print each key-value pair
         sortedKeys.forEach(key => {
             console.log(key + ': ' + obj[key]);
         });
 
         //blank line for readability
         console.log('');
     });
 }
 
 // Print each sorted object
 printSortedObjects(library);
 