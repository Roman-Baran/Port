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
        let id = sec.getAttribute('id') ;

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
}); */
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
});