document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.design-checkbox');
    const form = document.getElementById('curationForm');

    // Attach real-time update listeners to all design selection blocks
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCounter);
    });

    // Handle portfolio inquiry submissions
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

// Track checked elements dynamically
function updateCounter() {
    const checkedBoxes = document.querySelectorAll('input[name="designs"]:checked');
    const displayElement = document.getElementById('countDisplay');
    if (displayElement) {
        displayElement.innerText = checkedBoxes.length;
    }
}

// Logic processing submitted client profiles
function handleFormSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const notes = document.getElementById('notes').value;

    // Collect array of all checked styles
    const selectedDesigns = [];
    const checkedBoxes = document.querySelectorAll('input[name="designs"]:checked');
    checkedBoxes.forEach((cb) => {
        selectedDesigns.push(cb.value);
    });

    // Enforce selection requirement
    if (selectedDesigns.length === 0) {
        alert("Maison D'Or Notice: Please choose at least one design styling from the collection above to build your lookbook portfolio.");
        return;
    }

    // Pop up Confirmation Message
    const confirmationMessage = `Thank you, ${firstName} ${lastName}.\n\nYour luxury style portfolio has been logged successfully.\nA dedicated fashion concierge will contact you at ${email} or via phone (${phone}) within 24 hours to schedule your ${experience}.\n\nSummary of Selected Styles (${selectedDesigns.length}):\n${selectedDesigns.map(design => "• " + design).join('\n')}`;

    alert(confirmationMessage);
    
    // Reset form state after valid transmission
    document.getElementById('curationForm').reset();
    updateCounter();
}