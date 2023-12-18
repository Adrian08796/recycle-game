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
  
  function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }
  
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);
    const dropTarget = ev.target;
  
    // Append the dragged image to the drop container
    if (dropTarget.classList.contains('drop-container')) {
      dropTarget.appendChild(draggedElement);
    } else if (dropTarget.classList.contains('image-container')) {
      // If dropping on the image container, move it back to its original position
      const originalContainer = document.getElementById('image-container');
      originalContainer.appendChild(draggedElement);
    }
  }
  