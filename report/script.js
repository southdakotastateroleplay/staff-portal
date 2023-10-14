document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const explanation = document.getElementById('explanation').value;
    const username = document.getElementById('username').value;
    const videoLink = document.getElementById('video').value;

    const formData = {
        explanation,
        username,
        videoLink
    };

    // Retrieve existing submissions or initialize an empty array
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(formData);

    // Save to local storage
    localStorage.setItem('submissions', JSON.stringify(submissions));

    // Redirect to the thank you page
    window.location.href = 'thank_you.html'; // Replace with your thank you page URL
});
