document.addEventListener('DOMContentLoaded', () => {
    const urlAPI = 'https://dummyjson.com/products';
    const container = document.querySelector('.container');
  
    // 1 method
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', urlAPI, true);
    // xhr.addEventListener('load', () => {
    //   // if (xhr.status === 200) {
    //   const data = JSON.parse(xhr.responseText); // JSON.parse = json()
    //   renderData(data);
    // });
  
    // xhr.send();
  
    function renderData(data) {
      data.products.map((product, index) => {
        const name = document.createElement('p');
        const price = document.createElement('p');
        const img = document.createElement('img');
  
        name.innerHTML = `${index + 1} ${product.title}`;
        price.innerHTML = product.price;
        img.setAttribute('src', product.thumbnail);
  
        container.appendChild(name);
        container.appendChild(price);
        container.appendChild(img);
  
        return container;
      });
    }
  
    // 2 method
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