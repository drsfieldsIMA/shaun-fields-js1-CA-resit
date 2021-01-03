// Question 1
// This javascript code gets the setup and punchline from a random joke api
// Inside getrandomJoke replace the placeholder values in the HTML above with properties from the object returned from the API call.
const creatorsUrl = "https://official-joke-api.appspot.com/random_joke";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + creatorsUrl;

async function getrandomJoke() {
  try {
    const response = fetch(corsEnabledUrl);
    const result = await (await response).json();
    // See the function on line 30
    oneJoke(result);
  } catch (error) {
    // If there is an error overide the h2 on the page with the error message (unfortunately)
    // In addition remove the image_html
    const joke_title = document.querySelector("h2.joke.title");
    title_html = `Unfortunately there was an error fetching the joke check your internet connection`;
    joke_title.innerHTML = title_html;
    const image_html = document.querySelector(".joke_img");
    image_html.remove();
  }
}

////////////////////////////////////////////////////////////////////////////////////////
// The function that replaces the placeholder values in index.html the with json response
function oneJoke(result) {
  const joke_setup = document.querySelector("div.joke");
  const joke_punchline = document.querySelector(".punchline");
  const joke_title = document.querySelector("h2.joke.title");
  // Update the html  with the enteries from the API

  title_html = `${result.type} Joke`;
  joke_title.innerHTML = title_html;

  setup_html = `<div class="bubble bubble-bottom-left">
                            <h3>${result.setup}</h3>
                        </div>`;
  joke_setup.innerHTML = setup_html;

  punchline_html = `<div class="bubble bubble-bottom-left">
                        <h4>${result.punchline}</h4>
                        </div>`;
  // Delay the time the punchline (1.9sec) and (2.45sec) punchline image  is displayed for comedic effect
  setTimeout(() => {
    joke_punchline.innerHTML = punchline_html;
  }, 1900);
  setTimeout(() => {
    document.querySelector(".punchline_img").style.display = "block";
  }, 2450);
  // Replace the document title with the setup text
  document.title = result.setup;
}
////////////////////////////////////////////////////////////////////////////////////////
// Call the asynchronised function along with the fetch command
getrandomJoke();
