const countDown = document.querySelector('.countdown');

// set the launch Date 
const launchDate = new Date('April 26, 2020 15:45:00').getTime();

// update every second 
const intv1 = setInterval(() => {
    // get todays date and time in ms
    const now = new Date().getTime()

    // time  from now to launch
    const distance = launchDate - now;

    // time  calculations
    const days = Math.floor(distance / (1000 * 60 *60 *24));
    const hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 *60));
    const mins = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // display the result
    countDown.innerHTML = `
    <div>${days} <span>Days</span></div>   
    <div>${hours} <span>Hours</span></div>   
    <div>${mins} <span>Minutes</span></div>   
    <div>${seconds} <span>Seconds</span></div>   
    `;

    // if launch date pased
    if(distance < 0 ) {
        // stop countdown
        clearInterval(intv1);

        // style output text
        countDown.style.color = '#d90368';
        countDown.innerHTML = 'Launched';
    }
}, 1000);