const averageBooks = (numberOfBoxes, stages) => {
    var numberOfBooksInStage,
        allBooks = 0; 
 for (var i =0;i < stages.length; i ++){
   numberOfBooksInStage = stages[i][1] * stages[i][2],
   allBooks += numberOfBooksInStage ;
 }
return  allBooks / (stages.length + 1);
}
console.log( averageBooks( 3, [ [1, 2, 3], [1, 3, 5] ] )); // output: 7
