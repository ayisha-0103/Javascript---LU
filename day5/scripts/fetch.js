fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


  let todos = [];

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => todos = data)
      .catch(err => console.log(err));

      var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products/3", true);
xhr.onload = function(){
    console.log(xhr.responseText);
};
xhr.send();

//
// async function
async function fetchAsync () {
    // await response of fetch call
    let response = await fetch('https://api.github.com');
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
  }
  
  // trigger async function
  // log response or catch error of fetch promise
  fetchAsync()
      .then(data => console.log(data))
      .catch(reason => console.log(reason.message))