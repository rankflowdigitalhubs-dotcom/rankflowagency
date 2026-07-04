const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            company: document.getElementById("company").value,
            website: document.getElementById("website").value,
            service: document.getElementById("service").value,
            message: document.getElementById("message").value
        };

        emailjs.send(
            "service_4uv60ir",
            "template_g58kgep",
            params
        ).then(function () {

            alert("✅ Thank you! Your message has been sent successfully.");

            form.reset();

        }).catch(function (error) {

            alert("❌ Message could not be sent. Please try again.");

            console.error(error);

        });

    });
}
