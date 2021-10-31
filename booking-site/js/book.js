//Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
});

let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    console.log("booknow clicked!")

    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let sDate = document.getElementById("sDate")
    let sDateVal = sDate.value

    let eDate = document.getElementById("eDate")
    let eDateVal = eDate.value

    let roomType = document.getElementById("roomType")
    let roomTypeVal = roomType.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    bookNow(userNameVal, userEmailVal, sDateVal, eDateVal, roomTypeVal, userPaxVal, userRemarksVal)

})

function bookNow(userName, userEmail, sDate, eDate, roomType, userPax, userRemarks) {

    /*console.log(userName)
    console.log(userEmail)
    console.log(sDate)
    console.log(eDate)
    console.log(roomType)
    console.log(userPax)
    console.log(userRemarks)
    */
    let url = 'https://api.sheety.co/1ad25830927a93168640bade1ef761fb/bookingSite/daBooks';
    let body = {
        daBooks: {
            name: userName,
            email: userEmail,
            pax: userPax,
            startDate: sDate,
            endDate: eDate,
            roomType: roomType,
            remarks: userRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.bookings);
            alert("Your booking was succesful! Please wait for us to email you the total cost.")
        });

}