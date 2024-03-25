document.addEventListener('DOMContentLoaded', () => {
  const urlAPI = 'https://freetestapi.com/api/v1/books';
  const container = document.querySelector('.container');

 
  // const xhr = new XMLHttpRequest();
  // xhr.open('GET', urlAPI, true);
  // xhr.addEventListener('load', () => {
  //   // if (xhr.status === 200) {
  //   const data = JSON.parse(xhr.responseText); // JSON.parse = json()
  //   renderData(data);
  // });

  // xhr.send();

  function renderData(data) {
    data.books.map((book, index) => {
      const name = document.createElement('p');
      const price = document.createElement('p');
      const img = document.createElement('img');

      name.innerHTML = `${index + 1} ${book.title}`;
      price.innerHTML = book.price;
      img.setAttribute('src', book.thumbnail);

      container.appendChild(name);
      container.appendChild(price);
      container.appendChild(img);

      console.log(data.name);
    });
    
  }


  // fetch(urlAPI)
  //   .then(function (response) {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     throw new Error('Network response was not ok.');
  //   })
  //   .then(function (data) {
  //     console.log('data', data);
  //     renderData(data);
  //   })
  //   .catch(function (error) {
  //     console.log('error', error);
  //   });

  axios
    .get(urlAPI)
    .then(function (response) {
      renderData(response.data);
      console.log('response', response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

