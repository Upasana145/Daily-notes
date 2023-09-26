let requestOptions = {
  method: "GET",
};

fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
