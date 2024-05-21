//your JS code here. If requi
// Function to create a delay
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get references to the form elements
// const ageForm = document.getElementById('ageForm');
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const btn = document.getElementById('btn');

// Add event listener to form submission
btn.addEventListener('click', () => {
   // Prevent form from submitting

    // Get values from inputs
    const age = parseInt(ageInput.value);
    const name = nameInput.value;

    // Validate inputs
    if (isNaN(age) || age <= 0 || name.trim() === '') {
        alert('Please enter valid age and name.');
        return;
    }

    // Create and handle promise
    const agePromise = new Promise((resolve, reject) => {
        // Simulate async processing
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // Resolve after 4 seconds
    });

    // Handle promise resolution or rejection
    agePromise
        .then(message => {
            alert(message);
        })
        .catch(error => {
            alert(error);
        });
});
