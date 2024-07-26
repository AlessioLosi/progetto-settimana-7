const getAlbum=function(){
      fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmNiOWYyNjBjYzAwMTVjYzBlMTYiLCJpYXQiOjE3MjE5ODYyMzMsImV4cCI6MTcyMzE5NTgzM30.bKi5LmeDs0R-ZhiWc9FtD733rC-Zj3J2CHA1kBCk0xA"
        }
        })
    .then((response) => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore')
      }
    })
    .then((arrayOfAlbum) => {
      console.log('ALBUM', arrayOfAlbum)

      arrayOfAlbum.forEach((album) => {
        const newAlbumCol = `
            <div class="col">
                <div class="card">
                    <img
                        src=${album.imageUrl}
                        class="card-img-top"
                        alt="event pic"
                    />
                    <div class="card-body text-center">
                        <h5 class="card-title">${album.name}</h5>
                        <p class="card-text">${album.description}</p>
                        <p class="card-text">${album.brand}</p>
                           <p class="card-text">${album.price}</p>
                        <a href="./dettagli.html?eventId=${album._id}" class="btn btn-primary w-100">Vai ai dettagli</a>
                    </div>
                </div>
            </div>
            `
        const albumRow = document.getElementById('album-row')
        albumRow.innerHTML = albumRow.innerHTML + newAlbumCol
      })
    })
    .catch((error) => {
      console.log('ERRORE!', error)
    })
}

getAlbum()