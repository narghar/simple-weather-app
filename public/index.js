  const btn = document.querySelector('.searchButton');
  const search = document.querySelector('.search');

  btn.addEventListener("click", getData);


  async function getData() {
    let query = encodeURIComponent(search.value);
    let cityName = {name: query};
    const response = await fetch('api/weather',  {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cityName)
  });
    console.log(response);
    const data = await response.json();
    console.log(JSON.stringify(data));
  }

