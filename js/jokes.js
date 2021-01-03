// Question 2
// This javascript code gets the setup and punchlines for 10 random jokes. The JSON object it returns to a function called displayJokes.
// Inside displayJokes replace the placeholder values in the HTML with properties.

const creatorsUrl = "https://official-joke-api.appspot.com/random_ten";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + creatorsUrl;

async function getJokes() {
        try{
        const response = await fetch(corsEnabledUrl);
        const results = await response.json();
        // the diplayJokes function can be found at the bottom of the page  
        displayJokes(results);
        }

        catch(error){
            const joke_title = document.querySelector("h1");
            title_html =`Unfortunately there was an error fetching the joke check you internet connection`
            joke_title.innerHTML = title_html;
            document.querySelector("div.joke-detail").style.display="none";
             const load_wheel=document.querySelector(".loader")
            load_wheel.style.display="none";
            }

        finally{
        }


}
// The embedded function on line 9 in try{}
////////////////////////////////////////////////////////////////////////////////////////
// The function that replaces the placeholder values in jokes.html the with json response
function displayJokes(arrjokes) {
    const resultsContainer = document.querySelector(".row.results");
    let html = "";

        for (let i = 0; i < arrjokes.length; i++) 
        {
            //       console.log(arrjokes[i].setup);
            html += `<div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                                <div class="details">
                                    <h4 class="jokes">${arrjokes[i].setup}</h4>
                                    <p>${arrjokes[i].punchline}</p>
                                </div> 
                            </div>
                    </div>`;
//////////////////////////////////////////////////////////////////////////
//Execute the break after 5 jokes are retrieved
        if(i===5){break;}
//////////////////////////////////////////////////////////////
        }

  resultsContainer.innerHTML=html;
/////////////////////////////////////////////////////////////////////////
// 3rd result in array will have index 2 because we include 0 with json arrays
  document.title=arrjokes[2].setup
}

// Call the async function above
getJokes();