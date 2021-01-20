baguetteBox.run('.gallery');

function search_photo() {
    let input = document.getElementById('search').value;
    input=input.toLowerCase();
    let photo = document.getElementsByClassName('photos');

    for(i = 0; i < photo.length; i++) {
        if (!photo[i].innerHTML.toLowerCase().includes(input)) {
            photo[i].style.display='none';
        } else {
            photo[i].style.display='list-item';
        }
    }
}