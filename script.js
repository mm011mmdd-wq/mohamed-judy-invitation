const weddingDate = new Date("August 7, 2026 20:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("countdown").innerHTML =
    `
    ${days} Days 
    ${hours} Hours 
    ${minutes} Minutes 
    ${seconds} Seconds
    <br>
    <span>
    ${days} يوم 
    ${hours} ساعة 
    ${minutes} دقيقة 
    ${seconds} ثانية
    </span>
    `;


    if(distance < 0){

        clearInterval(countdown);

        document.getElementById("countdown").innerHTML =
        "The Wedding Day Has Arrived ❤️<br>وصل يوم الفرح ❤️";
    }


},1000);
