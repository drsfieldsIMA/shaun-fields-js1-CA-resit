// Question 3
// We need to reverse the order of the paragraphs in the about.html 
//Construct a HTML collection from the p tags on in this html (about)document
var para = document.getElementsByTagName('p');
var arr = [];
// To construct a javascript array from HTML collection I used the spread operator 
// Explaination from https://www.gavsblog.com/blog/htmlcollection-foreach-loop-convert-object-to-array-javascript
var arr = [...para];
//  Reverse the order of the paragraph array  usinf a for loop
var rev_para= [];

const N_max=para.length;
var j=N_max-1;

    for(var i = 0; i < N_max; i++) {
        // notice the j counter is used to index arr
        rev_para[i]=arr[j];
        // The counter j goes from the array length backwards to 0 
        j=j-1;
    }   

const about_para = document.querySelector(".about");
let html = "";

    for (let i = 0; i < para.length; i++){
            html += `<p>${rev_para[i].innerHTML}</p>`;
    }
   
about_para.innerHTML=html;



  
