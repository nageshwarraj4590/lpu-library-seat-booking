# LPU Library Seat Booking System
CSE326 Academic Project - Lovely Professional University

Technologies: HTML5, CSS3, very basic JavaScript. No framework, no backend, no database, no localStorage.

---

## 1. How to run the project in VS Code

1. Install **Visual Studio Code** from code.visualstudio.com.
2. Keep all files in one folder like this:
   ```
   lpu-library-booking/
   ├── index.html
   ├── style.css
   ├── script.js
   └── images/
       ├── hero.jpg
       ├── reading-hall.jpg
       ├── digital-library.jpg
       ├── quiet-study.jpg
       └── group-discussion.jpg
   ```
3. Open VS Code, click **File > Open Folder** and choose `lpu-library-booking`.
4. Click `index.html`, then right-click it and choose **Open with Live Server** (install the "Live Server" extension first). The website opens in your browser and refreshes every time you save.
5. No Live Server? Just double-click `index.html` in File Explorer. It works too.

Hinglish: Poora folder VS Code me open karo, `index.html` pe right click karke "Open with Live Server" dabao. Extension na ho to `index.html` ko double-click karke browser me khol sakte ho.

---

## 2. How to add LPU library photographs

The `images` folder already has 5 placeholder pictures. To use your own photos:

1. Take or download real LPU library photos.
2. Rename each photo to **exactly** one of these names: `hero.jpg`, `reading-hall.jpg`, `digital-library.jpg`, `quiet-study.jpg`, `group-discussion.jpg`.
3. Paste them into the `images` folder and replace the old files.
4. Refresh the browser. No code change is needed.

If your photo is a `.png`, change the name in the code too, for example `images/hero.png` in `style.css` and `images/reading-hall.png` in `index.html`.

Tip: use photos around 1200 x 800 pixels so the website loads fast.

---

## 3. What each HTML section does

| Section | What it does |
|---|---|
| `<header class="navbar">` | Logo and menu links (Home, Library Areas, Book a Seat, About Us, Contact). |
| `<section id="home" class="hero">` | Big photo, heading "Welcome to LPU Library", subheading and Book Now button. |
| `<section id="areas">` | Four cards: Reading Hall, Digital Library, Quiet Study Area, Group Discussion Area. |
| `<section id="seats">` | Three seat layouts with 15 seats each. Green = available, red = booked, blue = selected. |
| `<section id="groups">` | Four discussion tables with Available/Booked labels and Book Now buttons. |
| `<section id="booking">` | The booking form with six fields and the Confirm Booking button. |
| `<section id="about">` | Project description and problem statement. |
| `<section id="contact">` | Project name, college, course and team members. Edit the names inside the `<ul>` list. |
| `<footer>` | Project name, course, university and copyright text. |

How the seats work (no JavaScript):
- Every seat is an `<input type="radio">` followed by a `<label>` with the seat number.
- All radio buttons share `name="seat"`, so only one seat can be selected at a time.
- A **booked** seat has the word `disabled` in its radio button, so it cannot be clicked and CSS paints it red.
- To mark a seat as booked or available, add or remove `disabled` in the HTML.

How the menu links work: `<a href="#areas">` jumps to the section that has `id="areas"`. CSS `scroll-behavior: smooth` makes the jump smooth.

---

## 4. How CSS is used for the design

| CSS idea | Where it is used |
|---|---|
| `:root` variables (`--navy`, `--yellow`) | Store the colours once and reuse them everywhere with `var(--navy)`. |
| `*  { margin:0; padding:0; box-sizing:border-box }` | Removes default spacing so layout is predictable. |
| `display: flex` | Navbar: logo on the left, links on the right. Hero: centres the text. |
| `display: grid` | Cards, seat boxes, seat numbers and table cards in neat rows and columns. |
| `border-radius` | Rounded corners on cards, buttons and form. |
| `box-shadow` | Soft shadow below cards. |
| `:hover` with `transition` | Buttons and cards move or change colour smoothly when the mouse is over them. |
| `position: sticky` | Navbar stays at the top while scrolling. |
| `background: linear-gradient(...), url(...)` | Dark blue layer over the hero photo so text is readable. |
| `input:checked + label` | Selected seat turns blue. |
| `input:disabled + label` | Booked seat turns red. |
| `@keyframes fadeIn` | One simple fade-in animation for the hero text. |
| `@media (max-width: 768px)` | Mobile design: menu becomes a button, spacing becomes smaller. |

Colours used: navy `#0b2a5b`, yellow `#ffc933`, white `#ffffff`, light background `#f3f6fb`.

---

## 5. JavaScript - every line explained (English + Hinglish)

The whole `script.js` has only two parts: the mobile menu and the booking form.

### Part 1: Mobile menu

```js
var menuButton = document.getElementById("menuButton");
```
English: Find the menu button in the HTML (the one with id `menuButton`) and store it in a variable.
Hinglish: HTML se menu button dhundo aur `menuButton` variable me rakh lo.

```js
var navLinks = document.getElementById("navLinks");
```
English: Find the menu links box (id `navLinks`) and store it in a variable.
Hinglish: Menu ke links wala box dhundo aur `navLinks` me rakh lo.

```js
menuButton.onclick = function () {
```
English: When the menu button is clicked, run the code inside the curly brackets.
Hinglish: Jab menu button pe click ho, to neeche wala code chalao.

```js
  navLinks.classList.toggle("open");
```
English: If the class `open` is not on the menu, add it (menu shows). If it is already there, remove it (menu hides).
Hinglish: Agar `open` class nahi hai to laga do (menu dikhega), agar hai to hata do (menu chhup jayega).

```js
};
```
English: End of the click function.
Hinglish: Click wale function ka end.

```js
navLinks.onclick = function () {
  navLinks.classList.remove("open");
};
```
English: When any menu link is clicked, remove the class `open` so the mobile menu closes after choosing a page section.
Hinglish: Menu ke kisi link pe click karte hi `open` class hata do, taaki mobile me menu apne aap band ho jaye.

### Part 2: Booking form

```js
var form = document.getElementById("bookingForm");
```
English: Find the booking form and store it in the variable `form`.
Hinglish: Booking form dhundo aur `form` variable me rakh lo.

```js
var message = document.getElementById("message");
```
English: Find the empty paragraph where the error message will be shown.
Hinglish: Wo paragraph dhundo jahan error message dikhana hai.

```js
form.onsubmit = function (event) {
```
English: When the Confirm Booking button is pressed (form submit), run this function. `event` has information about the submit action.
Hinglish: Jab Confirm Booking dabaya jaye, to ye function chalao. `event` me submit ki information hoti hai.

```js
  event.preventDefault();
```
English: Stop the browser from reloading the page, so we can check the fields first.
Hinglish: Browser ko page reload karne se roko, taaki pehle hum fields check kar sakein.

```js
  var name = document.getElementById("studentName").value.trim();
  var regNo = document.getElementById("regNo").value.trim();
  var seatNo = document.getElementById("seatNo").value.trim();
```
English: Read what the student typed in each text box. `.value` gives the typed text and `.trim()` removes extra spaces from the start and end.
Hinglish: Student ne text box me jo likha wo padho. `.value` text deta hai aur `.trim()` shuru aur end ke extra spaces hata deta hai.

```js
  var area = document.getElementById("area").value;
  var date = document.getElementById("bookingDate").value;
  var slot = document.getElementById("timeSlot").value;
```
English: Read the selected library area, the chosen date and the chosen time slot. An unselected dropdown or date gives an empty text `""`.
Hinglish: Selected area, date aur time slot padho. Agar kuch select nahi kiya to value khali `""` hoti hai.

```js
  if (name == "" || regNo == "" || area == "" || seatNo == "" || date == "" || slot == "") {
```
English: Check if any one of the six fields is empty. `==` means "is equal to" and `||` means "OR".
Hinglish: Dekho kya koi bhi ek field khali hai. `==` ka matlab "barabar hai" aur `||` ka matlab "ya (OR)".

```js
    message.innerText = "Please fill in all the fields before confirming.";
```
English: Show an error message on the page.
Hinglish: Page pe error message dikhao.

```js
    message.className = "error";
```
English: Give the message the class `error`, which makes it red in CSS.
Hinglish: Message ko `error` class do, jisse CSS me wo red ho jata hai.

```js
  } else {
```
English: Otherwise, which means all fields are filled.
Hinglish: Nahi to, yani saari fields bhari hui hain.

```js
    message.innerText = "";
    message.className = "";
```
English: Clear any old error message and its red colour.
Hinglish: Purana error message aur uska red colour hata do.

```js
    alert("Booking Confirmed!\n\nName: " + name + "\nReg. No.: " + regNo + ...);
```
English: Show a pop-up box with the booking details. `+` joins text and variables together, and `\n` starts a new line.
Hinglish: Booking ki details ka pop-up box dikhao. `+` text aur variables ko jodta hai aur `\n` nayi line banata hai.

```js
    form.reset();
```
English: Clear the form so it is ready for the next booking.
Hinglish: Form ko khali kar do taaki agli booking ke liye ready ho.

```js
  }
};
```
English: End of the if-else and end of the submit function.
Hinglish: if-else aur submit function ka end.

---

## 6. Fifteen viva questions and answers

**1. What is the aim of your project?**
To help students explore the library areas and send a request for a library seat or group discussion table in a simple way.

**2. Which technologies did you use?**
HTML5 for structure, CSS3 for design and basic JavaScript for form checking and the mobile menu.

**3. Why did you not use a backend or database?**
This is a frontend project for CSE326. It shows the interface only. A real booking system needs a backend and a database to save bookings.

**4. What is the role of HTML, CSS and JavaScript?**
HTML makes the content and structure, CSS makes it look good, JavaScript makes it respond to the user.

**5. What does the `<section>` tag do?**
It groups related content together, such as the About section or the Contact section.

**6. How does the navbar link jump to a section?**
The link `href="#areas"` points to the element with `id="areas"`. Clicking it scrolls to that element. CSS `scroll-behavior: smooth` makes it smooth.

**7. How did you make the seat layout without JavaScript?**
Each seat is a radio button with a label. CSS hides the round button and styles the label like a seat. `:checked` makes it blue and `:disabled` makes it red.

**8. Why can only one seat be selected?**
All seat radio buttons have the same `name="seat"`. Radio buttons with the same name allow only one choice.

**9. How is a booked seat shown?**
The radio button has the `disabled` attribute, so it cannot be clicked, and CSS shows it in red. It is set manually in the HTML for this demo.

**10. What is the difference between Flexbox and Grid?**
Flexbox arranges items in one direction (a row or a column). Grid arranges items in rows and columns together. I used Flexbox for the navbar and Grid for cards and seats.

**11. How is the website responsive?**
I used `@media (max-width: 768px)` to change the layout on small screens, and `grid-template-columns: repeat(auto-fit, minmax(...))` so cards move to the next line when there is not enough space.

**12. What does `meta name="viewport"` do?**
It tells mobile browsers to use the real screen width, so the page does not look zoomed out.

**13. How does the form validation work?**
On submit, JavaScript reads each field. If any field is empty, it shows a red error message. If all are filled, it shows a confirmation alert.

**14. What does `event.preventDefault()` do?**
It stops the form from reloading the page, so JavaScript can check the data first.

**15. What improvements can you make in future?**
Add a backend and database to save bookings, add student login, show live seat availability, and stop two students from booking the same seat.

---

## Editing checklist before submission

- [ ] Replace the placeholder images with real LPU library photos.
- [ ] Change team member names and registration numbers in the Contact section of `index.html`.
- [ ] Test on a phone-size window (press F12 in the browser, then the phone icon).
- [ ] Read the JavaScript explanation once, because the viva will mostly ask about it.
