let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/1ad25830927a93168640bade1ef761fb/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingId = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }
            //load all rows from sheety API
            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gRemarks = json.bookings[i].remarks;
                let gId = json.bookings[i].id;
                let btnId = "delete" + gId

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(0).innerHTML = gName
                row.insertCell(0).innerHTML = gEmail
                row.insertCell(0).innerHTML = gPax
                row.insertCell(0).innerHTML = gRemarks
                row.insertCell(0).innerHTML = "<button id=" + btnId + " type='button' class='btn btn-danger'>Delete</button>"

                bookingId.push(btnId)
            }

            for (let j = 0; j < bookingId.length; j++) {
                let el = document.getElementById(bookingId[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteBooking(theId)
                })
            }
        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/1ad25830927a93168640bade1ef761fb/bookingApp/bookings/2' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id" + id + " deleted!")
            GetBooking()
        });
    }