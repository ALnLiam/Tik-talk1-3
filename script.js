//Database replit
//https://replit.com/@albertynelim/DataBase-Replit-1
//Google Sheets
//https://docs.google.com/spreadsheets/d/1teDHDRE2dwY-jqkVN3L25OqjEyJ1omibL2xPqqe-87A/edit#gid=1198749199

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



function footerLatestNewsletterSection(OutputdivID,zeroOrOne,LNimg0){
 //Auto-generate description from first item of array into card
  output1 = document.getElementById(OutputdivID);
  output1.innerHTML = "";
  let sectionOfContent = ""; 
  //taking the first 83 words from content -> Limiting word count
  for(let i = 0; i<84; i++){
    sectionOfContent += Newsletter[zeroOrOne].Content[i];
  }
  let build = ""; 
  build += `<span style="font-size: 14pt;">Newsletter Edition #${Newsletter[zeroOrOne].NewsletterNumber}</span><br>${sectionOfContent}...`;
  output1.innerHTML = build;

  
  //generate pic with description 
  output2 = document.getElementById(LNimg0);
  output2.innerHTML = "";
  let construct = `<img class="LNImg" src="${Newsletter[zeroOrOne].Cover}">`;
  output2.innerHTML = construct;
 
}


function GenerateFooterLatestNewsletterSection(){
   $.ajaxSetup({async: false});
   let NewsletterUnreversed = $.getJSON("FrontPage.json").responseJSON;
   Newsletter = NewsletterUnreversed.reverse();
  footerLatestNewsletterSection("LNRCD0",0,"LNimg0");
  footerLatestNewsletterSection("LNRCD1",1,"LNimg1");
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
