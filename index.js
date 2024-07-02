
let card; 
let subArray1,subArray2,subArray3;
let output1,output2,output3; 
function init1(){
  $.ajaxSetup({async: false});

  let NewsletterUnreversed = $.getJSON("FrontPage.json").responseJSON;
  Newsletter = NewsletterUnreversed.reverse(); 
  generateCards();

  footerLatestNewsletterSection("LNRCD0",0,"LNimg0");
  footerLatestNewsletterSection("LNRCD1",1,"LNimg1");

  
  
}

//Generating Cards for Mansory Layout 
//(1)dividing objects in the FrontPage.json into 3 subarrays 
function createSubarrays(data){
  var arrays = [];
  let numOfSubArrays = 3; 
  
  //if window width is less than or equal to 800 px, then allow 2 colums 
  if(window.innerWidth <= 600){
    numOfSubArrays = 1
  }else if(window.innerWidth <= 800){
    numOfSubArrays = 2
  }
  //size = size of each array
  let size = data.length /numOfSubArrays ;
  for (let i = 0; i < data.length; i += size){
   arrays.push(data.slice(i, i + size));
    // console.log(arrays);
  }
  subArray1 = arrays[0];
  subArray2 = arrays[1];
  subArray3 = arrays[2];
}

console.log(window.innerWidth);
//(2)generating cards for each subarray onload 
function generateCards(){ 
  output1 = document.getElementById("column1");
  output2 = document.getElementById("column2");
  output3 = document.getElementById("column3");
  output1.innerHTML = "";
  output2.innerHTML = "";
  output3.innerHTML = "";
  let text = "";
  let content = "";

  createSubarrays(Newsletter);
  arrays = [];
  //For a responsive website: # of columns depending on window   browser width 
  //if window width is greater than or equal to 800 px, then push subArray3 to generate cards into 
  if(window.innerWidth >= 800){
    arrays.push(subArray1);
    arrays.push(subArray2);
    arrays.push(subArray3);
  }else if(window.innerWidth >= 600){ //if less than 800 -> 2 columns
    arrays.push(subArray1);
    arrays.push(subArray2);
  }else if(window.innerWidth <= 600){ //if less than 600 -> 1 column
    arrays.push(subArray1);
  }


  let outputNum = 0; 
  for(let i=0; i<arrays.length; i++){
    //loops 3 times for each subarray 
    let array = arrays[i]; 

    //Goes through each object in the subarray, creating cards
    for(let i=0; i<array.length; i++){
      let Newsletter= array[i];
      text += `<div class="boxes">`;
        text += `  <div>`;
        text += `    <div>`;
        text += `<img src="${Newsletter.Cover}">`;
        text += `    </div>`;
        text += `    <div>`;
        text += `<p> ${Newsletter.SubTitle}</p>`;
        text += `<h2> ${Newsletter.Title}</h2>`;
        text += `<p>${Newsletter.Content}</p>`;
        text += `<button type="button">Read Newsletter Edition</button>`;
        text += `    </div>`;
        text += `  </div>`;
        text += `</div>`;

      content  = `<div class="boxes" id="content">`;
      content += `<div> <img src="Archived/E${Newsletter.NewsletterNumber}(1).png"> </div>`;
      content += `<div> <img src="Archived/E${Newsletter.NewsletterNumber}(2).png"> </div>`;
      content += `</div>`;
      //content += `<button onclick="goToTop()" id="GoToTopbtn" title="Go to top">Top</button> `; 

      card = new Modal(text,content);
      if(outputNum == 0){
         card.render("column1");
      }
      else if(outputNum == 1){
        card.render("column2");
      }  
      else if(outputNum == 2){
        card.render("column3");
      }
      text = "";
      content = "";
    }


    outputNum++; 
    text = "";
    content = ""; 
  }

}






