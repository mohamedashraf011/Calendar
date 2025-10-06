(function() {
    const date = document.getElementById('date');
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');

    if (!date || !day || !month || !year) {
        console.error("One or more required elements are missing.");
        return;
    }

    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function updateDate() {
        const now = new Date();
        date.innerHTML = (now.getDate() < 10 ? "0" : "") + now.getDate();
        day.innerHTML = days[now.getDay()];
        month.innerHTML = months[now.getMonth()];
        year.innerHTML = now.getFullYear();
    }

    updateDate();

    setInterval(updateDate, 60000);
})();