// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const artMaker = document.querySelector("cards-container");
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then( response => {
        console.log(response);
        for(const articleTopic in response.data.articles) {
          response.data.articles[articleTopic].forEach(article => {
            
          })  
        }
    })
    .catch( err => {
        console.log(err);
    })

    function articleMaker(articleCreator) {
        const oneCard = document.createElement("div");
        const oneHeadline = document.createElement("div");
        const oneAuthor = document.createElement("div");
        const oneImg = document.createElement("img");
        const oneName = document.createElement("span");

        oneCard.classList.add("card");
        oneHeadline.classList.add("headline");
        oneAuthor.classList.add("author");
        oneImg.classList.add("img-container");

        
       
    }

 


  //  tab.classList.add("tab");

   // tab.textContent = tabTitle;

   // return tab;}