function punchIn() {
    const inTime = new Date().toLocaleString();
    const username = localStorage.getItem('username');
    const attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];

    let studentRecord = attendanceData.find(record => record.name === username);
    if (!studentRecord) {
        studentRecord = { name: username, inTime: null, outTime: null };
        attendanceData.push(studentRecord);
    }
    studentRecord.inTime = inTime;

    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
    document.getElementById('inTimeDisplay').innerText = `In-Time: ${inTime}`;
}

function punchOut() {
    const outTime = new Date().toLocaleString();
    const username = localStorage.getItem('username');
    const attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];

    let studentRecord = attendanceData.find(record => record.name === username);
    if (studentRecord) {
        studentRecord.outTime = outTime;
    } else {
        studentRecord = { name: username, inTime: null, outTime: outTime };
        attendanceData.push(studentRecord);
    }

    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
    document.getElementById('outTimeDisplay').innerText = `Out-Time: ${outTime}`;
}

function applyLeave() {
    const leaveReason = prompt("Enter the reason for your leave:");
    if (leaveReason) {
        const username = localStorage.getItem('username');
        const leaveData = JSON.parse(localStorage.getItem('leaveData')) || [];
        leaveData.push({ name: username, reason: leaveReason, date: new Date().toLocaleDateString() });
        localStorage.setItem('leaveData', JSON.stringify(leaveData));
        alert("Leave applied successfully.");
    }
}

function sendMessage() {
    const message = document.getElementById('studentMessage').value;
    const username = localStorage.getItem('username');
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ username: username, message: message });
    localStorage.setItem('messages', JSON.stringify(messages));
    document.getElementById('messageStatus').innerText = "Message sent to the teacher.";
    document.getElementById('studentMessage').value = ""; // Clear the text area
}

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (document.getElementById('userDisplay')) {
        document.getElementById('userDisplay').innerText = username;
    }
    if (localStorage.getItem('inTime')) {
        document.getElementById('inTimeDisplay').innerText = `In-Time: ${localStorage.getItem('inTime')}`;
    }
    if (localStorage.getItem('outTime')) {
        document.getElementById('outTimeDisplay').innerText = `Out-Time: ${localStorage.getItem('outTime')}`;
    }
});
