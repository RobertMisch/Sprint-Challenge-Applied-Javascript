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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const myArray = Object.values(response.data.articles)
        console.log(myArray)
        myArray.forEach(item => {
            item.forEach(item =>{
                document.querySelector('.cards-container').append(createCard(item))
            })
        })
    })
    .catch(error => {
        console.log('something went wrong ' + error)
    })

function createCard(cardObj){
    //make them
   const card = document.createElement('div')
   const cardHeadline = document.createElement('div')
   const cardAuthor = document.createElement('div')
   const cardImgContainer = document.createElement('div')
   const cardImg = document.createElement('img')
   const cardName = document.createElement('span')

   //class them
   card.classList.add('card')
   cardHeadline.classList.add('headline')
   cardAuthor.classList.add('author')
   cardImgContainer.classList.add('img-container')

   //content
    cardHeadline.textContent = cardObj.headline
    cardName.textContent = `By ${cardObj.authorName}`
    cardImg.src = cardObj.authorPhoto

    //put them together

    card.append(cardHeadline, cardAuthor)
    cardAuthor.append(cardImgContainer, cardName)
    cardImgContainer.append(cardImg)

    //roll out card
    return card
}