document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (document.getElementById('userDisplay')) {
        document.getElementById('userDisplay').innerText = username;
    }

    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messageList = document.getElementById('message-list');
    messages.forEach(msg => {
        const li = document.createElement('li');
        li.textContent = `${msg.username}: ${msg.message}`;
        messageList.appendChild(li);
    });

    loadAttendanceData();
    loadLeaveData();
});

function loadAttendanceData() {
    const attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
    const attendanceTableBody = document.getElementById('attendance-table').querySelector('tbody');

    // Clear the existing data
    attendanceTableBody.innerHTML = '';

    attendanceData.forEach(record => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${record.name}</td>
            <td>${record.inTime || 'N/A'}</td>
            <td>${record.outTime || 'N/A'}</td>
        `;
        attendanceTableBody.appendChild(tr);
    });
}

function loadLeaveData() {
    const leaveData = JSON.parse(localStorage.getItem('leaveData')) || [];
    const leaveTableBody = document.getElementById('leave-table').querySelector('tbody');

    // Clear the existing data
    leaveTableBody.innerHTML = '';

    leaveData.forEach(record => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${record.name}</td>
            <td>${record.date}</td>
            <td>${record.reason}</td>
        `;
        leaveTableBody.appendChild(tr);
    });
}
