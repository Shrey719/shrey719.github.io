function LoadHome() {
    document.getElementById("card").style.visibility = "visible" // lmao 
    document.getElementById("blog").style.visibility = "hidden"
}

function LoadBlog() {
    document.getElementById("card").style.visibility = "hidden"
    document.getElementById("blog").style.visibility = "visible" 
    const elements = document.querySelectorAll('.bloge');
    elements.forEach(element => {
      element.style.visibility = 'visible';
    });
}

function loadBlog(blogFile) {
  const be = document.querySelectorAll('.bloge');
  be.forEach(element => {
    element.style.visibility = 'hidden';
  });
    fetch(blogFile)  // Fetch the file from the root of the server
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); 
  })
  .then(data => {
    document.getElementById("blogSpace").innerText = data
  })
  .catch(error => {
    console.error('Could not fetch blog (my code be shite):', error);
  });
}