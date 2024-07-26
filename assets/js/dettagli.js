const addressBarParameters = new URLSearchParams(location.search);
const albumId = addressBarParameters.get('albumId');
console.log('albumId', albumId);

const albumURL = 'https://striveschool-api.herokuapp.com/api/product/';

if (albumId) {
  fetch(albumURL + albumId, {
      headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmNiOWYyNjBjYzAwMTVjYzBlMTYiLCJpYXQiOjE3MjE5ODYyMzMsImV4cCI6MTcyMzE5NTgzM30.bKi5LmeDs0R-ZhiWc9FtD733rC-Zj3J2CHA1kBCk0xA",
          'Content-Type': 'application/json',
      },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('ERRORE NELLA FETCH SINGOLA');
      }
    })
    .then((singleAlbum) => {
      console.log(singleAlbum);

      const detailRow = document.getElementById('detail-row');
      detailRow.innerHTML = `
        <div class="col-12 col-md-6 text-center my-5">
            <div class="card pb-4">
              <img
                        src=${singleAlbum.imageUrl}
                        class="card-img-top"
                        alt="copertina album"
                    />
                    <div class="card-body text-center">
                        <h5 class="card-title">${singleAlbum.name}</h5>
                        <p class="card-text">${singleAlbum.description}</p>
                        <p class="card-text">${singleAlbum.brand}</p>
                           <p class="card-text">€${singleAlbum.price}</p>
                <div class="border border-black border-2 fit-content mx-auto p-3 rounded">
                    <div>
                        <a href="./amministrazione.html?albumId=${singleAlbum._id}" class="btn btn-success ">MODIFICA</a>
                        <button class="btn btn-danger" onclick="deleteAlbum()">ELIMINA</button>
                    </div>
                </div>
            </div>
        </div>
    `
    })
    .catch((err) => {
      console.log(err);
    });
}

const deleteAlbum = function () {
  fetch(albumURL + albumId, {
    method: 'DELETE',
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmNiOWYyNjBjYzAwMTVjYzBlMTYiLCJpYXQiOjE3MjE5ODYyMzMsImV4cCI6MTcyMzE5NTgzM30.bKi5LmeDs0R-ZhiWc9FtD733rC-Zj3J2CHA1kBCk0xA",
      'Content-Type': 'application/json',
    },
  }) 
    .then((response) => {
      if (response.ok) {
        alert('ELEMENTO ELIMINATO DALLA HOME');
        location.assign('./crudazon.html'); 
      } else {
        throw new Error("Problema nell'eliminazione");
      }
    })
    .catch((err) => {
      console.log('error', err);
    });
};
