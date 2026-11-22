
let reservationForm = document.querySelector(".reservation-form");
let fullNameInput = document.getElementById("full-name");
let emailInput = document.getElementById("email");
let guestsInput = document.getElementById("guests");
let dateTimeInput = document.getElementById("reservation-datetime");
let confirmationBox = document.getElementById("reservation-confirmation");

function showError(message) {
    if (!confirmationBox) {
        return;
    }
    confirmationBox.style.display = "block";
    confirmationBox.className = "reservation-confirmation error";
    confirmationBox.textContent = message;
}

if (reservationForm && fullNameInput && emailInput && guestsInput && dateTimeInput && confirmationBox) {
    reservationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let fullName = fullNameInput.value.trim();
        let email = emailInput.value.trim();
        let guests = guestsInput.value.trim();
        let dateTime = dateTimeInput.value;

        if (fullName.length < 3) {
            showError("Veuillez entrer un nom complet valide (au moins 3 caractères).");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            showError("Veuillez saisir une adresse e-mail valide (ex: nom@domaine.com).");
            return;
        }

        let guestsNumber = Number(guests);
        if (guests === "" || isNaN(guestsNumber) || guestsNumber < 1 || guestsNumber > 30) {
            showError("Veuillez entrer un nombre de personnes valide (entre 1 et 30).");
            return;
        }

        if (dateTime === "") {
            showError("Veuillez choisir une date et une heure de réservation.");
            return;
        }

        let formattedDateTime = dateTime.replace("T", " à ");
        confirmationBox.style.display = "block";
        confirmationBox.className = "reservation-confirmation success";
        confirmationBox.innerHTML =
            "<strong>Réservation enregistrée !</strong><br>" +
            "Nom : " + fullName + "<br>" +
            "Email : " + email + "<br>" +
            "Nombre de personnes : " + guestsNumber + "<br>" +
            "Date et heure : " + formattedDateTime;

        reservationForm.reset();
    });
}


let formulaireContact = document.querySelector(".contact-form");
let zoneConfirmation = document.getElementById("contactConfirmation");

function afficherErreurContact(texteErreur) {
    zoneConfirmation.className = "reservation-confirmation error";
    zoneConfirmation.textContent = texteErreur;
    zoneConfirmation.style.display = "block";
}

function verifierEmailSimple(adresseEmail) {
    if (adresseEmail === "" || adresseEmail.includes(" ")) {
        return false;
    }

    let positionArobase = adresseEmail.indexOf("@");
    if (positionArobase <= 0) {
        return false;
    }

    // التأكد من وجود '@' واحدة فقط
    if (adresseEmail.indexOf("@", positionArobase + 1) !== -1) {
        return false;
    }

    let partieDomaine = adresseEmail.slice(positionArobase + 1);
    let positionPoint = partieDomaine.indexOf(".");

    
    if (positionPoint <= 0 || partieDomaine.endsWith(".")) {
        return false;
    }

    return true;
}

if (formulaireContact && zoneConfirmation) {
    formulaireContact.addEventListener("submit", function (event) {
        event.preventDefault();

        let champNom = document.getElementById("contactName");
        let champEmail = document.getElementById("contactEmail");
        let champMessage = document.getElementById("contactMessage");

        let nom = champNom.value.trim();
        let email = champEmail.value.trim();
        let message = champMessage.value.trim();

        if (nom.length < 2) {
            afficherErreurContact("Veuillez entrer un nom valide (au moins 2 caractères).");
            return;
        }

        if (!verifierEmailSimple(email)) {
            afficherErreurContact("Veuillez saisir une adresse e-mail valide (ex: nom@gmail.com).");
            return;
        }

        if (message.length < 5) {
            afficherErreurContact("Veuillez écrire un message d'au moins 5 caractères.");
            return;
        }

        zoneConfirmation.className = "reservation-confirmation success";
        zoneConfirmation.innerHTML =
            "Merci <strong>" + nom + "</strong>, votre message a bien été envoyé. Nous vous répondrons sur <strong>" + email + "</strong>.";
        zoneConfirmation.style.display = "block";

        formulaireContact.reset();
    });
}