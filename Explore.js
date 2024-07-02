let data, output, result;

let Newsletter,NBCANDNewsletter;
function initExplore(){
  $.ajaxSetup({async: false});

  let NewsletterUnreversed = $.getJSON("Newsletter.json").responseJSON;
  Newsletter = NewsletterUnreversed.reverse(); 
  let NBCANDNewsletterUnreversed = $.getJSON("NBCANDNewsletter.json").responseJSON;
  NBCANDNewsletter = NBCANDNewsletterUnreversed.reverse();

  output = document.getElementById("output");
  result = document.getElementById("result");
  generateCards(Newsletter);

  
  NewsletterUnreversed = $.getJSON("FrontPage.json").responseJSON;
  Newsletter = NewsletterUnreversed.reverse();
  footerLatestNewsletterSection("LNRCD0",0,"LNimg0");
  footerLatestNewsletterSection("LNRCD1",1,"LNimg1");
}

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

  let matchedSearch = []; 
  //create a list of Titles that matched the search

  for(let i=0; i<Newsletter.length;i++){
    let N = Newsletter[i]; //get each newsletter
     if(N.Title.toLowerCase().includes(Title.toLowerCase())){
          //add to the new list
          matchedSearch.push(N);
       }
  }
  console.log(`number found ${matchedSearch.length}`)
  generateCards(matchedSearch);

} 


//  ARCHIVED EDITIONS SECTION - Switch output div(CEI) when user clicks on link in collapsible 
function a(EditionNum){
  document.getElementById("CEI1").src = "Archived/E"+EditionNum+"(1).png";
  document.getElementById("CEI2").src = "Archived/E"+EditionNum+"(2).png";
}

//COLLAPSIBLES
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}