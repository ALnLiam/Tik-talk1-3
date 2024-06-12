//https://replit.com/@albertynelim/Lesson81GetDataWithAPURestfulCallDiscussionPD8#script.js  
function filterByMultipleCategory(){
  let ct = 0;
  let fufilledCategory = [];

  //QuerySelectorAll returns all the checked boxes in the form of a nodelist
  let checkedBoxes = 
  document.querySelectorAll('input[name=inlineCheckbox1]:checked');
  console.log(checkedBoxes);
  //Using a for loop, we can go through each individual record of nodelist to retrive the value of the checked boxes
  for (let i = 0; i < checkedBoxes.length; i++) {
    //gets the selected category/value of the checked boxes
    let category= checkedBoxes[i].value; 
    console.log("The Category you checked");
    console.log(category);
    for(let i=0; i< NBCANDNewsletter.length; i++){
       let NBCNA = NBCANDNewsletter[i];
        if(NBCNA.CategoryID == category){
           fufilledCategory.push(NBCNA);
          console.log(NBCNA );
           ct++;
        }
    }
  }
  console.log(`number found ${fufilledCategory.length}`);
  generateCards(fufilledCategory);
  result.innerHTML = `${ct} Results found.`
 }


//SEARCH FUNCTION
function filter(){
  let Title = document.getElementById("Title").value;
  console.log("Title");
  console.log(Title);

  let matchedSearch = []; //create a list of Titles that matched the search

  for(let i=0; i<Newsletter.length;i++){
    let N = Newsletter[i]; //get each newsletter
    //make sure the list is no
    // if( N.Title == Title ) {
     if(N.Title.toLowerCase().includes(Title.toLowerCase())){
          //add to the new list
          matchedSearch.push(N);
      
       }
  }
  console.log(`number found ${matchedSearch.length}`)
  generateCards(matchedSearch);

}

















//switch pages when clicked on 
function a(EditionNum){
  document.getElementById("CEI1").src = "Archived/E"+EditionNum+"(1).png";
  document.getElementById("CEI2").src = "Archived/E"+EditionNum+"(2).png";
}