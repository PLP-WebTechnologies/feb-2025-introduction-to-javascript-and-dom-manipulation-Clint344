// Change text content when the "Change Text" button is clicked
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textContent').textContent = "The text content has been changed!";
  });
  
  // Toggle the highlight class on the paragraph when the "Toggle Highlight" button is clicked
  document.getElementById('toggleStyleBtn').addEventListener('click', function() {
    let textContent = document.getElementById('textContent');
    textContent.classList.toggle('highlight');
  });
  
  // Add a new element when the "Add New Element" button is clicked
  document.getElementById('addElementBtn').addEventListener('click', function() {
    let newElement = document.createElement('p');
    newElement.textContent = "This is a dynamically added paragraph.";
    document.getElementById('dynamicContent').appendChild(newElement);
  });
  
  // Remove the last dynamically added element when the "Remove Element" button is clicked
  document.getElementById('removeElementBtn').addEventListener('click', function() {
    let dynamicContent = document.getElementById('dynamicContent');
    if (dynamicContent.children.length > 0) {
      dynamicContent.removeChild(dynamicContent.lastChild);
    }
  });
  