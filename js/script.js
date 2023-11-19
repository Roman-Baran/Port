// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //aktiv sektion für animationen scrollIn
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

// sticky header
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle icon and navbar when click navbar links (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// animation footer on scroll
let footer = document.querySelector('footer');

footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
/*
const circleSpin = document.getElementById("circle-spin");

let rotation = 0;

function spin() {
rotation += 1;
circleSpin.style.transform = `rotate(${rotation}deg)`;
requestAnimationFrame(spin);
}
requestAnimationFrame(spin);
*/
/*  --------------------TypeScript---------------------
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const subject = (document.getElementById('subject') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;

        if (validateForm(name, email, phone, subject, message)) {
            // Sende an den Server oder führe andere Aktionen durch.
            // fetch() oder AJAX-Bibliothek verwenden, um eine POST-Anfrage an das Backend zu senden.
        }
    });

    function validateForm(name: string, email: string, phone: string, subject: string, message: string): boolean {
        // Validierungslogik
        // Überprüfe, Validierungskriterien entsprechen.
        // true wenn das Formular gültig ist. Andernfalls Fehlermeldung-gib false zurück.

        // Überprüfe, E-Mail-Adresse ein gültiges Format hat, reguläre Expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return false;
        }

        //weitere Validierungsprüfungen für Name, Telefon, Betreff und Nachricht hinzu.

        return true; // Formular ist gültig.
    }
}); 
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (validateForm(name, email, phone, subject, message)) {
            // Formulardaten an Server
            // fetch() oder AJAX-Bibliothek verwenden

            // fetch():
            fetch('server-endpunkt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    subject,
                    message
                })
            })
            .then(response => {
                if (response.ok) {
                    // erfolgreich gesendet
                    alert('Vielen Dank für deine Nachricht.');
                    contactForm.reset();
                } else {
                    // Fehler
                    alert('Fehler beim Senden des Formulars. Bitte versuche es später erneut.');
                }
            })
            .catch(error => {
                console.error(error);
                alert('Fehler beim Senden des Formulars. Bitte versuche es später erneut.');
            });
        }
    });

    function validateForm(name, email, phone, subject, message) {
        // Hier Validierungslogik implementieren
        // Überprüfe
        // Gib true, wenn Formular gültig, Fehlermeldung = false

        // E-Mail-Adresse ein gültiges Format? reguläre Expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return false;
        }

        // Für weitere Validierungsprüfungen

        return true; // Formular ist gültig.
    }
});*/

const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const thema = document.getElementById("thema");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${username.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken: "45b8b5fe-d355-4c5d-ba2b-86fb2b183589",
        To: 'r.baran@gmx.at',
        From: "r.baran@gmx.at",
        Subject: thema.value,
        Body: bodyMessage
    }).then(message => {
        if (message === "OK") {
            showAlert("success", "Erfolgreich gesendet!", "Die E-Mail wurde erfolgreich versendet.");
        } else {
            showAlert("error", "Fehler beim Senden!", "Es gab einen Fehler beim Versenden der E-Mail. Bitte versuche es später erneut.");
        }
    });
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    }

    if (items[1].value !== "") {
        checkEmail();
    }

    items[1].addEventListener("keyup", () => {
        checkEmail();
    });

    function checkEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const errorTxtEmail = document.querySelector(".error-text.email");

        if (!email.value.match(emailRegex)) {
            email.classList.add("error");
            email.parentElement.classList.add("error");
            if (email.value !== "") {
                errorTxtEmail.innerText = "Bitte gültige Mailadresse eingeben!"
            }
            else{
                errorTxtEmail.innerText = "Feld darf nicht leer sein!"
            }
        } else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
            errorTxtEmail.innerText = "";
        }
    }
}

function showAlert(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        background: 'var(--second-bg-color)',
        confirmButtonColor: 'var(--main-color)',
        iconColor: 'var(--text-color)',
        customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            content: 'custom-content-class',
            confirmButton: 'custom-confirm-button-class'
        }
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    const hasErrors = Array.from(document.querySelectorAll(".item")).some(item => {
        return item.classList.contains("error");
    });

    if (!hasErrors) {
        sendEmail();
        form.reset();
    }
});

function showPopup(title, content) {
    const popup = document.createElement('div');
    popup.classList.add('custom-popup');

    const popupContent = `
        <div class="popup-header">
            <span class="popup-title">${title}</span>
            <span class="popup-close" onclick="closePopup()">&times;</span>
        </div>
        <div class="popup-body">
            <p>${content}</p>
        </div>
    `;

    popup.innerHTML = popupContent;

    document.body.appendChild(popup);

    // Schließe das Popup nach 5 Sekunden automatisch
    setTimeout(() => {
        closePopup();
    }, 5000);
}

function closePopup() {
    const popup = document.querySelector('.custom-popup');
    if (popup) {
        popup.style.animation = 'fadeOut 1s forwards'; /* Fügt die Fade-Out-Animation hinzu */
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 1000); /* Wartet 1 Sekunde, um die Fade-Out-Animation abzuschließen */
    }
}
