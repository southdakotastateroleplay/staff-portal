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

    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(formData);

    localStorage.setItem('submissions', JSON.stringify(submissions));

    alert('Form submitted successfully!');

    window.location.href = 'thank_you.html';
});
