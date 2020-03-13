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
        // console.log(Object.keys(response.data.articles));
        Object.keys(response.data.articles).forEach(item => {
            // console.log(response.data.articles[item]);
            Object.keys(response.data.articles[item]).forEach(i => {
                console.log(response.data.articles[item][i]);
                cardsContainer.append(CreateCard(response.data.articles[item][i]));
            })
        })
    })
    .catch(error => {
        console.log('the data was not returned', error);
    })

const cardsContainer = document.querySelector('.cards-container')

function CreateCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');

        const headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = data.headline;
        card.append(headline);

        const author = document.createElement('div');
        author.classList.add('author');
        card.append(author);

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');
            author.append(imgContainer);
            
                const img = document.createElement('img');
                img.src = data.authorPhoto;
                imgContainer.append(img);

                const authorName = document.createElement('span');
                authorName.textContent = data.authorName;
                imgContainer.append(authorName);
            
    return card;
}