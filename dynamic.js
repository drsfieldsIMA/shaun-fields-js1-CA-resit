// Question 4 Write an event listener that creates a <div> for the number value in the input when the value changes:
const tally = document.querySelector("input");
const blocks = document.querySelector(".dynamic_divs");

// The event listener is the change event to the querySelector input
    tally.addEventListener('change', (event) => {
        const amount = event.target.value;
        const N=amount+1;
        let html = "";

            for (let i = 1; i <= amount; i++){
                html += `<div class="dynamic_divs">
                                block ${i}
                            </div>`;
            }


        blocks.innerHTML=html;

    });

// Remove the blocks once the reset button is clicked 
document.querySelector(".reset").addEventListener("click", (event)=> {blocks.remove();});


