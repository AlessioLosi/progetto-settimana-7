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
                        src=${music.imageUrl}
                        class="card-img-top"
                        alt="event pic"
                    />
                    <div class="card-body text-center">
                        <h5 class="card-title">${music.name}</h5>
                        <p class="card-text">${music.description}</p>
                        <p class="card-text">${music.brand}</p>
                           <p class="card-text">${music.price}</p>
                        <a href="./details.html?eventId=${music._id}" class="btn btn-primary w-100">Vai ai dettagli</a>
                    </div>
                </div>
            </div>
            `
        const eventsRow = document.getElementById('album-row')
        albumRow.innerHTML = albumRow.innerHTML + newAlbumCol
      })
    })
    .catch((error) => {
      console.log('ERRORE!', error)
    })
}

getAlbum()