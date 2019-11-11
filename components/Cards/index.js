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

const articles = document.querySelector(".cards-container");
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then( response => {
        console.log(response);
        for(const articleTopic in response.data.articles) {
          response.data.articles[articleTopic].forEach(article => {
              articles.appendChild(articleMaker(article));
              console.log(article.authorName)        
          })  
        }
    })
    .catch( err => {
        console.log(err);
    })

    function articleMaker(item) {
        const oneCard = document.createElement("div");
        const oneHeadline = document.createElement("div");
        oneHeadline.textContent = item.headline;

        const oneAuthor = document.createElement("div");
        const imgDiv = document.createElement("div");
        const oneImg = document.createElement("img");
        oneImg.src = item.authorPhoto;
        const oneName = document.createElement("span");
        oneName.textContent = item.authorName;

        oneCard.classList.add("card");
        oneHeadline.classList.add("headline");
        oneAuthor.classList.add("author");
        oneImg.classList.add("img-container");

       // const cardsContainer = document.querySelector("cards-container")  
        //cardsContainer.appendChild(oneCard);
        oneCard.appendChild(oneHeadline);
        oneCard.appendChild(oneAuthor);
        oneAuthor.appendChild(imgDiv);
        imgDiv.appendChild(oneImg);
        oneAuthor.appendChild(oneName);

        return oneCard;
    }
  
 


  //  tab.classList.add("tab");

   // tab.textContent = tabTitle;

   // return tab;}