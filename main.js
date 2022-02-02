document.querySelector('#modal').classList.add('hidden')

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.querySelectorAll('span.like-glyph')

hearts.forEach(hearts => hearts.addEventListener("click", clickHeart))

function clickHeart(hearts) {
  mimicServerCall()
  .then(res => res.json)
  .catch(function catchError() {
    document.querySelector("#modal").removeAttribute("hidden")
    setTimeout(addHidden, 3000)
  })
  if (hearts.target.innerHTML === FULL_HEART) {
    hearts.target.innerHTML = EMPTY_HEART
    hearts.target.classList.remove("activated-heart")
  } else if (hearts.target.innerHTML === EMPTY_HEART) {
    hearts.target.innerHTML = FULL_HEART
    hearts.target.classList.add("activated-heart")
  }

}



function addHidden() {
  document.querySelector('#modal').setAttribute("hidden", "")
}
//function likePost() {
  //document.querySelector(span.like-glyph).addEventListener("click", clickHeart)
//}

//function clickHeart() {
  ///document.querySelector(span.like-glyph).innerHTML = FULL_HEART .className = 'activated-heart'
//}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
