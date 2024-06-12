//Database replit
//https://replit.com/@albertynelim/DataBase-Replit-1
//Google Sheets
//https://docs.google.com/spreadsheets/d/1teDHDRE2dwY-jqkVN3L25OqjEyJ1omibL2xPqqe-87A/edit#gid=1198749199

let data, output, result;
let NewsletterByCategories,Newsletter,NBCANDNewsletter;
function init(){
  $.ajaxSetup({async: false});

  Newsletter = $.getJSON("Newsletter.json").responseJSON;
  console.log(Newsletter);
  NBCANDNewsletter = $.getJSON("NBCANDNewsletter.json").responseJSON;
  NewsletterByCategories = $.getJSON("NBCANDNewsletter.json").responseJSON;
   console.log(NewsletterByCategories);

  output = document.getElementById("output");
  result = document.getElementById("result");

  generateCards(Newsletter);

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

//Newsletter = data (default)
function generateCards(data){
  output.innerHTML = "";
  let build = "";
  let ct=0;

  for(let i=0; i< data.length; i++){
    let Newsletter= data[i];
    build += `<div class="card">`;
    build += `<h3> ${Newsletter.Title}</h3>`;
    build += `<p> ${Newsletter.Content}</p>`;
    build += `<p>Edition #${Newsletter.NewsletterEdition}&nbsp;&nbsp; Week of ${Newsletter.PublicationWeek}</p>`;
    build += `</div>`;
    ct++;
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}





// function filterBy1Category(clicked_id){
// window.location.replace("Explore.html#newsletter");

//   console.log(clicked_id); //already gives value of id
//   let category = clicked_id;
//   let build = "";
//   let ct = 0;

//   for(let i=0; i<NewsletterByCategories.length; i++){
//      let NBC = NewsletterByCategories[i]
//      if(NBC.CategoryID == category){
//        build += `<div class="fitted card">`;
//        build += `  <h3>${NBCANDNewsletter[i].Title}</h3>`;
//        build += `  <p>${NBCANDNewsletter[i].Content}</p>`;
//        build += `</div>`;
//        ct++;
//      }
//    }
//    //result.innerHTML = `${ct} Results found.`
//    output.innerHTML = build;
// }
