//Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
});

let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
	console.log("managed clicked")
	GetBooking()
})

function GetBooking() {
	let url = 'https://api.sheety.co/1ad25830927a93168640bade1ef761fb/quickie/bookings';
	fetch(url)
		.then((response) => response.json())
		.then(json => {
			// Do something with the data
			console.log(json.bookings);

			let bookingNameList = document.getElementById("bookingNameList")
			let bookingIds = []

			//delete all rows in the table
			console.log("delete row");
			for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
				bookingNameList.deleteRow(k)
			}

			//Reload sheet api

			for (let i = 0; i < json.bookings.length; i++) {
				let gName 		= json.bookings[i].name;
				let gRoomType 	= json.bookings[i].roomType;
				let gDate 		= json.bookings[i].startDate;
				let gId			= json.bookings[i].id;
				let gPax 		= json.bookings[i].pax;
				let btnId 		= "delete" + gId;

				let row = bookingNameList.insertRow(bookingNameList.rows.length)
				

				row.insertCell(0).innerHTML = gId
				row.insertCell(1).innerHTML = gName
				row.insertCell(2).innerHTML = gRoomType
				row.insertCell(3).innerHTML = gPax
				row.insertCell(4).innerHTML = gDate
				row.insertCell(5).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

				bookingIds.push(btnId)
			}

				for (let j = 0; j < bookingIds.length; j++) {
					let el = document.getElementById(bookingIds[j])
					console.log(bookingIds[j])

					
					el.addEventListener("click", function () {
						let theId = el.id.replace("delete", "")
						console.log(theId)
						
						DeleteBooking(theId)
					})
				}

			});
}


function DeleteBooking(id) {
    let url = 'https://api.sheety.co/1ad25830927a93168640bade1ef761fb/quickie/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
			console.log("delete reservation");
            alert("Reservation no " + id + " has been cancelled!")
			GetBooking()
        });
}