// ===== PART 1: MOBILE MENU =====
var menuButton = document.getElementById("menuButton");
var navLinks = document.getElementById("navLinks");

menuButton.onclick = function () {
  navLinks.classList.toggle("open");
};

navLinks.onclick = function () {
  navLinks.classList.remove("open");
};

// ===== PART 2: BOOKING FORM =====
var form = document.getElementById("bookingForm");
var message = document.getElementById("message");

form.onsubmit = function (event) {
  event.preventDefault();

  var name = document.getElementById("studentName").value.trim();
  var regNo = document.getElementById("regNo").value.trim();
  var area = document.getElementById("area").value;
  var seatNo = document.getElementById("seatNo").value.trim();
  var date = document.getElementById("bookingDate").value;
  var slot = document.getElementById("timeSlot").value;

  if (name == "" || regNo == "" || area == "" || seatNo == "" || date == "" || slot == "") {
    message.innerText = "Please fill in all the fields before confirming.";
    message.className = "error";
  } else {
    message.innerText = "";
    message.className = "";
    alert("Booking Confirmed!\n\nName: " + name + "\nReg. No.: " + regNo + "\nArea: " + area + "\nSeat/Table: " + seatNo + "\nDate: " + date + "\nTime: " + slot);
    form.reset();
  }
};
