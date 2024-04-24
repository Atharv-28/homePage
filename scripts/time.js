function updateLiveTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours) as 12 AM
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Get the day of the week and convert it to a string
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = days[now.getDay()];

    // Get the month and convert it to a string
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = months[now.getMonth()];

    // Get the date
    var date = now.getDate();

    // Display the time, date, and day in the desired format
    var currentTime = hours + ":" + minutes + ":" + seconds + ' ' + ampm;
    
    // Update the content of the liveTime div with the current time
    document.querySelector('#liveTime .date').textContent = month + ' ' + date;
    document.querySelector('#liveTime .day').textContent = dayOfWeek;
    document.querySelector('#liveTime .time').textContent = currentTime;
}

// Call updateLiveTime every second to update the time dynamically
setInterval(updateLiveTime, 1000);