window.onload = (e) => {
    setInterval(setDate, 1000);
    setDate();
}

let setDate = () => {
    const hours = document.querySelector('.house-hand');
    const mins  = document.querySelector('.min-hand');
    const secs  = document.querySelector('.second-hand');

    let now    = new Date();
    let hour   = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    // ((hour / 12) * 360) + ((mins/60)*30) + 90; (hour / 60) * 360 + 90
    // ((mins / 60) * 360) + ((seconds/60)*6) + 90; (minute / 60) * 360 + 90
    // ((seconds / 60) * 360) + 90 ;(second / 60) * 360 + 90
    let hourDeg   = ((hour / 12) * 360) + 90;
    let minuteDeg = ((minute / 60) * 360) + 90;
    let secondDeg = ((second / 60) * 360) + 90;
    // hours.style.transform = `rotate(420deg) scale(0.5, 2)`;
    
    hours.style.transform = `rotate(${hourDeg}deg) scale(0.5, 2)`;
    mins.style.transform = `rotate(${minuteDeg}deg) scale(0.6, 1)`;
    secs.style.transform = `rotate(${secondDeg}deg) scale(0.8, 0.5)`;
}

