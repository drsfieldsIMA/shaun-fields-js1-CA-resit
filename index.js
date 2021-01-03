const creatorsUrl = "https://official-joke-api.appspot.com/random_joke";
const corsEnabledUrl =creatorsUrl;

fetch(corsEnabledUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        const results_title = document.querySelector("h2.joke.title");
        title_html =`Unfortunately there was an error fetching the joke check you internet connection`
        results_title.innerHTML = title_html;
        const image_html = document.querySelector(".joke_img");
        image_html.remove();
    });

function handleJson(json) {
    const results = json;
      
//  row results is the encasing class
    const results_setup = document.querySelector("div.joke");
    const results_punchline = document.querySelector("div.joke.punchline");
    const results_title = document.querySelector("h2.joke.title");

    let title_html = "";
    let setup_html = "";
    let punchline_html = "";
// within the JSON object each URL is attached to an image label

        title_html =`${results.type} Joke`

        setup_html = `<div class="bubble bubble-bottom-left">
                        <h3>${results.setup}</h3>
                      </div>`

        punchline_html = `<div class="bubble bubble-bottom-left">
                            <h4>${results.punchline}</h4>
                           </div>`
        
    results_title .innerHTML = title_html;
    results_setup .innerHTML = setup_html;
     
setTimeout(() => { results_punchline .innerHTML = punchline_html }, 2000);
document.title=results.setup
}