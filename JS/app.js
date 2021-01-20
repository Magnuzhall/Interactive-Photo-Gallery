baguetteBox.run('.gallery');

//Search functionality
function search_photos() {
    let input = document.getElementById('search').value; //Get user typed value
    input=input.toLowerCase(); //Make value case insensitive
    let photo = document.getElementsByClassName('photos');
//Loop through all items, hiding those that don't match the query
    for(i = 0; i < photo.length; i++) {
        //If no user input, then do not display
        if (!photo[i].innerHTML.toLowerCase().includes(input)) {
            photo[i].style.display='none';
        } else {
            photo[i].style.display=""; //if input, display 
        }
    }
}