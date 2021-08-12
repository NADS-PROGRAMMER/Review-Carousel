"use strict";

let array = [];
let index = 0;

getLocalStorageContent(); // Get the JSON format object in the local storage.
let review = JSON.parse(array[index]); // Parse the first object.

window.addEventListener('DOMContentLoaded', function() {

    displayReview(); // display the first review when the DOM is loaded.

    /** This is the event in the forward button. */
    document.getElementById('forward').addEventListener('click', function() {

        // Opacity for every element inside the review carousel
        // including images, person name, profession and its reviews.
        setOpacity(0.5, '0px 0px 30px 0.5px white');
        index++;

        /** If the index is > the size of the array, we set it back to
         * zero so that it become circular. */
        if (index > array.length - 1)
            index = 0;

        // Sets the time out in displaying the next review for having a little bit of transition
        setTimeout(displayReview, 300);
        setTimeout(setOpacity, 320);
    });

    // Same logic in the above event.
    document.getElementById('backward').addEventListener('click', function() {

        setOpacity(0.5, '0px 0px 30px 0.5px white');
        index--;

        if (index < 0)
            index = array.length - 1;
        
        setTimeout(displayReview, 300);
        setTimeout(setOpacity, 320);
    });
})

function setOpacity(opacityValue = 1, boxShadow = '0px 0px 20px 0.5px rgba(35, 35, 149, 0.582)') {

    document.getElementById('quot-logo').style.transition = 'all 2s';
    document.getElementById('review-list').style.transition = 'all 2s';
    document.getElementById('person-photo').style.transition = 'all 2s';
    document.querySelector('h4').style.transition = 'all 2s';
    document.querySelector('h5').style.transition = 'all 2s';
    document.querySelector('p').style.transition = 'all 2s';

    document.getElementById('review-list').style.boxShadow = boxShadow;
    document.getElementById('quot-logo').style.opacity = opacityValue;
    document.getElementById('person-photo').style.opacity = opacityValue;
    document.querySelector('h4').style.opacity = opacityValue;
    document.querySelector('h5').style.opacity = opacityValue;
    document.querySelector('p').style.opacity = opacityValue;
}

function displayReview() {

    let img = document.getElementById('person-photo');
    let nameRev =  document.querySelector('h4');
    let profession = document.querySelector('h5');
    let reviewContent = document.querySelector('p');

    review = JSON.parse(array[index]);

    img.src = review['imgURL'];
    nameRev.textContent = review['personName'];
    profession.textContent = review['profession'];
    reviewContent.textContent = review['reviewContent'];
}

function getLocalStorageContent() {

    let j = 0;

    for (let i = window.localStorage.length - 1; i >= 0;  i--) {

        array[j] = window.localStorage.getItem(window.localStorage.key(i));
        j++;
    }
}

