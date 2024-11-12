document.addEventListener('DOMContentLoaded', function() {
    // Get all the view job buttons
    const viewJobButtons = document.querySelectorAll('.view-job-btn');

    // Add click event listener to each button
    viewJobButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent job card
            const jobCard = button.closest('.job-card');

            // Extract job details from data attributes
            const jobTitle = jobCard.getAttribute('data-job-title');
            const companyName = jobCard.getAttribute('data-company-name');
            const hourlyRate = jobCard.getAttribute('data-hourly-rate');
            const jobType = jobCard.getAttribute('data-job-type');

            // Display an alert with job details
            alert(`Job Title: ${jobTitle}\nCompany: ${companyName}\nHourly Rate: ${hourlyRate}\nJob Type: ${jobType}`);
        });
    });
});