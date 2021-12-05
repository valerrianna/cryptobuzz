document.querySelector('#search').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    const query = document.querySelector('#search').value
    window.location.href = "/search/" + query
  }
}) 
