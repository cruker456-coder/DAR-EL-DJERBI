// الخطوة 1: الوصول إلى عناصر الصفحة
const reservationForm = document.querySelector(".reservation-form");
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const guestsInput = document.getElementById("guests");
const dateTimeInput = document.getElementById("reservation-datetime");
const confirmationBox = document.getElementById("reservation-confirmation");

// دالة مساعدة لإظهار رسالة خطأ حمراء في الصندوق
function showError(message) {
    confirmationBox.style.display = "block";
    confirmationBox.className = "reservation-confirmation error";
    confirmationBox.textContent = message;
}

// الخطوة 2: الاستماع لحدث إرسال النموذج
reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // الخطوة 3: قراءة القيم
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const guests = guestsInput.value.trim();
    const dateTime = dateTimeInput.value;

    // الخطوة 4: التحقق من الاسم الكامل
    if (fullName.length < 3) {
        showError("Veuillez entrer un nom complet valide (au moins 3 caractères).");
        return;
    }

    // الخطوة 5: التحقق من صيغة البريد الإلكتروني (وجود @ ونقطة)
    if (!email.includes("@") || !email.includes(".")) {
        showError("Veuillez saisir une adresse e-mail valide (ex: nom@domaine.com).");
        return;
    }

    // الخطوة 6: التحقق من عدد الضيوف (يجب أن يكون رقماً بين 1 و 30)
    const guestsNumber = Number(guests);
    if (guests === "" || isNaN(guestsNumber) || guestsNumber < 1 || guestsNumber > 30) {
        showError("Veuillez entrer un nombre de personnes valide (entre 1 et 30).");
        return;
    }

    // الخطوة 7: التحقق من إدخال التاريخ والوقت
    if (dateTime === "") {
        showError("Veuillez choisir une date et une heure de réservation.");
        return;
    }

    // الخطوة 8: إذا كانت جميع البيانات صحيحة، نعرض رسالة النجاح الخضراء
    const formattedDateTime = dateTime.replace("T", " à ");
    confirmationBox.style.display = "block";
    confirmationBox.className = "reservation-confirmation success";
    confirmationBox.innerHTML =
        "<strong>Réservation enregistrée !</strong><br>" +
        "Nom : " + fullName + "<br>" +
        "Email : " + email + "<br>" +
        "Nombre de personnes : " + guestsNumber + "<br>" +
        "Date et heure : " + formattedDateTime;

    // الخطوة 9: تفريغ الحقول
    reservationForm.reset();
});