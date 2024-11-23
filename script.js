document.addEventListener("DOMContentLoaded", () => {
    // Set teacher's name
    const teacherName = "Anushree Verma"; // Replace with dynamic data as needed
    document.getElementById("teacher-name").textContent = `Welcome, ${teacherName}`;

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
