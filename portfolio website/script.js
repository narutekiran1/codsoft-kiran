document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const responseDiv = document.getElementById("response");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "your_contact_form_handler.php"); // Replace with your actual backend handler

        xhr.onload = function() {
            if (xhr.status === 200) {
                responseDiv.textContent = "Message sent successfully!";
                form.reset();
            } else {
                responseDiv.textContent = "There was a problem sending your message. Please try again.";
            }
        };

        xhr.onerror = function() {
            responseDiv.textContent = "There was a problem sending your message. Please try again.";
        };

        xhr.send(formData);
    });
});
