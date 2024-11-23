function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    const userType = document.querySelector('input[name="user-type"]:checked').value;
    if (userType === "student") {
        window.location.href = "student_dashboard.html"; // Redirect to the student dashboard
    } else if (userType === "teacher") {
        window.location.href = "teacher_dashboard.html"; // Redirect to the teacher dashboard
    }
}
