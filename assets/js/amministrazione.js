document.addEventListener('DOMContentLoaded', () => {
    const albumId = new URLSearchParams(location.search).get('albumId');
    console.log('ALBUMID', albumId);

    if (albumId) {
        fetch(`https://striveschool-api.herokuapp.com/api/product/${albumId}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error fetching album details');
                }
            })
            .then((singleAlbum) => {
                console.log('SINGLEAlbum', singleAlbum);
                document.getElementById('imageUrl').value = singleAlbum.imageUrl;
                document.getElementById('name').value = singleAlbum.name;
                document.getElementById('description').value = singleAlbum.description;
                document.getElementById('brand').value = singleAlbum.brand;
                document.getElementById('price').value = singleAlbum.price;
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }

    class Album1 {
        constructor(_imageUrl, _name, _description, _brand, _price) {
            this.imageUrl = _imageUrl;
            this.name = _name;
            this.description = _description;
            this.brand = _brand;
            this.price = _price;
        }
    }

    const albumForm = document.getElementById('create-album');
    albumForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const imageUrlInput = document.getElementById('imageUrl');
        const nameInput = document.getElementById('name');
        const descriptionInput = document.getElementById('description');
        const priceInput = document.getElementById('price');
        const brandInput = document.getElementById('brand');

        const imageUrlValue = imageUrlInput.value;
        const nameValue = nameInput.value;
        const descriptionValue = descriptionInput.value;
        const priceValue = priceInput.value;
        const brandValue = brandInput.value;

        const newAlbum1 = new Album1(
            imageUrlValue,
            nameValue,
            descriptionValue,
            brandValue,
            priceValue
        );
        const methodToUse = albumId ? 'PUT' : 'POST';
        const endpoint = albumId ? `https://striveschool-api.herokuapp.com/api/product/${albumId}` : 'https://striveschool-api.herokuapp.com/api/product/';

        fetch(endpoint, {
            method: methodToUse,
            body: JSON.stringify(newAlbum1),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmNiOWYyNjBjYzAwMTVjYzBlMTYiLCJpYXQiOjE3MjE5ODYyMzMsImV4cCI6MTcyMzE5NTgzM30.bKi5LmeDs0R-ZhiWc9FtD733rC-Zj3J2CHA1kBCk0xA",
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert('Sei sicuro di voler salvare?');
                    location.assign('./crudazon.html'); 
                } else {
                    alert('ERRORE NEL SALVATAGGIO!');
                    throw new Error('Errore');
                }
            })
            .catch((err) => {
                console.error('ERRORE', err);
            });
    });
});
