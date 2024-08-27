//Initialize Popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//Initialize Toast

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
})

/*map fucntion iterates over each element of an array and applies
a callback function to each element, then it collects the results
from the callback function in a new array. */

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;
    //the .options are used to access the options tag in the html and capture
    //the data
    var message = "Purchase confirmed for: " + movie + "\n Time: " + time + "\n Tickets: " + quantity; 

//Display toast
var toastBody = document.getElementById('toastBody');
toastBody.textContent = message;
var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
toast.show()
}

function buyTickets() {
    displaySelectedMovieOptions();
}

