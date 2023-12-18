function loadRandomTrashPhoto() {
    const randomPhotoElement = document.getElementById('random-photo');
    
    // Use the Unsplash Source API with a search term for "trash"
    fetch('https://source.unsplash.com/random?trash')
      .then(response => {
        // Set the source of the image to the random trash photo URL
        randomPhotoElement.src = response.url;
      })
      .catch(error => console.error('Error fetching random trash photo:', error));
  }
  