import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

  // const card = document.createElement('div')
  // // gitUser.appendChild(card)
  //       card.classList.add('card')


  // const headline = document.createElement('div')
  // card.appendChild(headline)
  //       card.classList.add('headline')
  //       headline.textContent = article.article.javascript.headline

  // const author = document.createElement('author')
  // card.appendChild(author)
  // author.classList.add('author')     
  // author.textContent = article.article.javascript.author

  // const container = document.createElement('div')
  // author.appendChild(container)
  // container.classList.add('img-container')  
 

        
  // const img = document.createElement('img')
  // container.appendChild(img)
  //       img.classList.add('img')
  //       img.setAttribute('src', article.authorPhoto )

  //       const sContainer = document.createElement('span')
  //       author.appendChild(sContainer)
  //       sContainer.textContent = `By ${ article.author }`
          
  
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  
  const cardContainer = document.createElement('div') 
  const cardHeadline = document.createElement('div') 
  const cardAuthor = document.createElement('div') 
  const imgContainer = document.createElement('div') 
  const cardImg = document.createElement('img')
  const cardSpan = document.createElement('span')  

  cardContainer.appendChild(cardHeadline)
  cardContainer.appendChild(cardAuthor)
  cardAuthor.appendChild(imgContainer)
  imgContainer.appendChild(cardImg)
  cardAuthor.appendChild(cardSpan)

  cardContainer.classList.add('card')
  cardHeadline.classList.add('headline')
  cardAuthor.classList.add('author')
  imgContainer.classList.add('img-container')
  cardImg.src = article['authorPhoto']
  cardSpan.textContent = `By ${article['authorName']}`
  cardHeadline.textContent = article['headline']

  cardContainer.addEventListener('click', () =>{
    console.log(cardHeadline)
  })
  return cardContainer
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

    // const cardMaker = document.querySelector(selector)
  
    // axios.get("https://lambda-times-api.herokuapp.com/articles")
    //   .then(res => {
    //     const data = res.articles;
    //     for (let articles in data) {
    //       data[articles].forEach(i => {
    //         cardMaker.appendChild(Card(i))
    //       })
    //     }
    //   })
      let response = axios.get(`http://localhost:5000/api/articles`)

  response.then((value) => {

    let list = value.data.articles;

    for(let item in list) {
      list[item].forEach(element => {
        let test = Card(element);
        let cards = document.querySelector(selector);
        cards.appendChild(test);
      });
    }
  });
      // const mountingpoint = document.querySelector(selector)
      // axios.get('https://lambda-times-api.herokuapp.com/articles')
      // .then(response => {
      //   response.articles.forEach(things =>{
      //     const madeCard = Card(things)
      //     mountingpoint.appendChild(madeCard)
      //   });
      // })
    
  
}

export { Card, cardAppender }
