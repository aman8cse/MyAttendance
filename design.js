function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    const userType = document.querySelector('input[name="user-type"]:checked').value;
    if (userType === "student") {
        window.location.href = "design2.html"; // Replace with the actual student dashboard URL
    } else if (userType === "teacher") {
        window.location.href = "design2t.html"; // Replace with the actual teacher dashboard URL
    }
} 


function punchIn() {
    const inTime = new Date().toLocaleTimeString();
    localStorage.setItem('inTime', inTime);
    document.getElementById('inTimeDisplay').innerText = `In-Time: ${inTime}`;
}

function punchOut() {
    const outTime = new Date().toLocaleTimeString();
    localStorage.setItem('outTime', outTime);
    document.getElementById('outTimeDisplay').innerText = `Out-Time: ${outTime}`;
}

function sendMessage() {
    const message = document.getElementById('studentMessage').value;
    localStorage.setItem('message', message);
    document.getElementById('messageStatus').innerText = "Message sent to the teacher.";
    document.getElementById('studentMessage').value = ""; // Clear the text area
}


document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('userDisplay')) {
        document.getElementById('userDisplay').innerText = localStorage.getItem('username');
    }
    if (localStorage.getItem('inTime')) {
        document.getElementById('inTimeDisplay').innerText = `In-Time: ${localStorage.getItem('inTime')}`;
    }
    if (localStorage.getItem('outTime')) {
        document.getElementById('outTimeDisplay').innerText = `Out-Time: ${localStorage.getItem('outTime')}`;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const attendanceList = document.getElementById("attendance-list");
    const leaveList = document.getElementById("leave-list");
    const messageForm = document.getElementById("message-form");

    // Sample data
    const attendanceData = ["Student A - Present", "Student B - Absent"];
    const leaveData = ["Student C - Sick Leave", "Student D - Personal Leave"];

    // Populate attendance list
    attendanceData.forEach(record => {
        const li = document.createElement("li");
        li.textContent = record;
        attendanceList.appendChild(li);
    });

    // Populate leave list
    leaveData.forEach(record => {
        const li = document.createElement("li");
        li.textContent = record;
        leaveList.appendChild(li);
    });

    // Handle message form submission
    messageForm.addEventListener("submit", event => {
        event.preventDefault();
        const studentName = document.getElementById("message-student-name").value;
        const message = document.getElementById("message-content").value;
        alert(`Message to ${studentName}: ${message}`);
        // Clear form
        messageForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    // Sample data
    const classes = ["A7", "A8", "B4", "B2"];
    const attendanceData = [
        { name: "Aman", date: "2024-11-20", status: "Present" },
        { name: "Shreyansh", date: "2024-11-20", status: "Absent" },
        { name: "Pratik", date: "2024-11-21", status: "Present" },
    ];

    // Populate classes list
    const classesList = document.getElementById("classes-list");
    classes.forEach(className => {
        const li = document.createElement("li");
        li.textContent = className;
        classesList.appendChild(li);
    });

    // Populate attendance table
    const attendanceTableBody = document.getElementById("attendance-table").querySelector("tbody");
    attendanceData.forEach(record => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${record.name}</td>
            <td>${record.date}</td>
            <td>${record.status}</td>
        `;
        attendanceTableBody.appendChild(tr);
    });
});
