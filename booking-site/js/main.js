//Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})

// editttt
let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let destination = document.getElementById("destination")
    let destinationVal = destination.value

    let checkIn = document.getElementById("checkIn")
    let checkInVal = checkIn.value

    let checkOut = document.getElementById("checkOut")
    let checkOutVal = userPax.value

    let adults = document.getElementById("adults")
    let adultsVal = adults.value

    let children = document.getElementById("children")
    let childrenVal = children.value

    BookNow(destinationVal, checkInVal, checkOutVal, adultsVal, childrenVal)
})

function BookNow(destination, checkIn, checkOut, adults, children) {
    let url = 'https://api.sheety.co/1ad25830927a93168640bade1ef761fb/bookingApps/sheet1';
    let body = {
        sheet1: {
            destination: destination,
            in: checkIn,
            out: checkOut,
            adults: adults,
            children: children
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
            console.log(json.sheet1);
        });
    }