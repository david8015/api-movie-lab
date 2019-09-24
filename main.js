

window.addEventListener('DOMContentLoaded', (event) => {
 document.querySelector("#search").addEventListener("click", function(){
  let input = document.querySelector("#input").value;
   
  let baseUrl = "http://www.omdbapi.com/";
  let apiKey = "9c6d616a";


  let fullUrl = `${baseUrl}?s=${input}&apikey=${apiKey}`;
  
  fetch(fullUrl, {
})

.then(function(response) {
    return response.json()
})
.then(onSuccess)
.catch(onError);

function onSuccess(response) {
    console.log(response);
    console.log(response.Search[0].Title);
    console.log(response.Search[0].Year);

   let e = document.querySelector("#content");

for (let i=0; i < response.Search.length; i++){
   let title = document.createElement("h1");   
   title.innerHTML = `Title: ${response.Search[i].Title}`;

   let year = document.createElement("h2");
    year.innerHTML = `Year: ${response.Search[i].Year}`;   

   e.appendChild(title);
   e.appendChild(year);
   }
}  
function onError(error) {
  alert("Sorry, there was a problem!");
  console.dir(error);
}

 });
}); 