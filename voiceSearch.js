function voiceSearch() {
   
    var data;
    console.log((document.getElementById("result").innerText || document.getElementById("result").textContent))
    sdk.searchGet({
      q: document.getElementById("result").innerText || document.getElementById("result").textContent
    }, {}, {
      headers: {
        //'x-api-key': 'RNhYQ7lG2M4aiWEAiZwl25uEQfJ3xii39UllhR7T',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'x-api-key': 'RNhYQ7lG2M4aiWEAiZwl25uEQfJ3xii39UllhR7T'
      }
    }).then((response) => {
      
      data = response.data["SearchResponse"];
      console.log("this is the data:", data);
      
      document.getElementById("demo").innerHTML = data.map(structure).valueOf();
    }).catch((error) => {
      console.log('an error occurred', error);
    });

  }

function structure(item){
  console.log("url: ", item.Photo.url)
  return `<img src=${item.Photo.url} width=100 height=100>`
}
