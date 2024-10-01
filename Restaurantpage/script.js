
//Function to open the modal dyal image
function openModal(imagePath) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    modal.style.display = 'block'; // Display the modal
    modalImage.src = imagePath; // Set the image source
}

//Function to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Hide the modal
}







//Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    //Get form values
    var name = document.getElementById('Name').value.trim();// trim c pour supprimer lespace dyal lwl
    var email = document.getElementById('Email').value.trim();
    var subject = document.getElementById('Subject').value.trim();
    var message = document.getElementById('Message').value.trim();

    //Validate form fields
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('All fields are required.'); // Show an alert if any field is empty
        return; // Stop further execution
    }

    //Log form data to console (replace with actual form submission logic)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    //Reset the form after successful submission (optional)
    document.getElementById('contact-form').reset();
});

//Function to open and close modal on DOM content load
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');

    function openModal(imagePath) {
        modal.style.display = 'block';
        modalImage.src = imagePath;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    //Add event listener to close modal when clicking on the close button
    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeModal);
});



//Reservation modal functionality
document.addEventListener("DOMContentLoaded", function() {
    const reservationModal = document.getElementById("reservation-modal");
    const reservationButton = document.querySelector(".btn-reservation");//le premier element avec la class btn-res
    const closeButton = document.querySelector(".close");

    //Open modal when reservation button is clicked
    reservationButton.addEventListener("click", function() {
        reservationModal.style.display = "block";
    });

    //Close modal when close button is clicked
    closeButton.addEventListener("click", function() {
        reservationModal.style.display = "none";
    });

    //Close modal when clicking outside the modal
    window.addEventListener("click", function(event) {
        if (event.target == reservationModal) {
            reservationModal.style.display = "none";
        }
    });

    //Handle form submission
    const reservationForm = document.getElementById("reservation-form");
    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // send data to server
        alert("Reservation submitted!"); //Show alert for demonstration
        reservationModal.style.display = "none"; //Close modal mora submission
    });
});
