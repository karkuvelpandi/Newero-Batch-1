const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let list = "";
      for (post of data) {
        list =
          list +
          `<div>
        <h3>${post.title}</h3>
        <h4>${post.body}</h4>
        </div>`;
      }
      document.getElementById("body").innerHTML = list;
    })
    .catch((error) => {
      console.log(error);
    });
};
// fetchData();

const fetchDataAsync = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  if (response.ok) {
    console.log(data);
    let list = "";
    for (post of data) {
      list =
        list +
        `<div>
          <h3>${post.title}</h3>
          <h4>${post.body}</h4>
          </div>`;
    }
    document.getElementById("body").innerHTML = list;
  }
};
fetchDataAsync();
