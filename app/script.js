const issueForm = document.getElementById("issueForm");
const reportsContainer = document.getElementById("reports");

issueForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const userType = document.getElementById("userType").value;
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const evidence = document.getElementById("evidence").files[0];

    const evidenceName = evidence ? evidence.name : "No evidence uploaded";

    const emptyMessage = document.querySelector(".empty-message");
    if (emptyMessage) {
        emptyMessage.remove();
    }

    const reportCard = document.createElement("div");
    reportCard.className = "report-card";

    reportCard.innerHTML = `
        <h3>${category}</h3>
        <p><strong>Reporter:</strong> ${fullname}</p>
        <p><strong>User Type:</strong> ${userType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Evidence:</strong> ${evidenceName}</p>
        <span class="status">Pending Review</span>
    `;

    reportsContainer.prepend(reportCard);

    alert("Issue submitted successfully!");

    issueForm.reset();
});