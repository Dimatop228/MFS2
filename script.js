// Проигрывание звука клика
function playClickSound() {
    const clickSound = document.getElementById('click-sound');
    clickSound.play();
}
emailjs.init("Y0OGOqcFb7xm14VyG");

// Обработка отправки формы
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('fio').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageElement = document.getElementById('form-message');
    const successSound = document.getElementById('success-sound');

    if (name && email && message) {
        messageElement.textContent = `Спасибо, ${name}! Ваше сообщение отправлено.`;
        messageElement.style.color = 'yellow';
        successSound.play();
        event.target.reset();
        emailjs.send("service_ssskk5s", "template_sxhjbd6", { name: `${fio}`, message: `${message}`, reply_to: `${email}` }) .then(response => console.log('Письмо успешно отправлено!', response)) .catch(error => console.log('Возникла ошибка...', error));
    } else {
        messageElement.textContent = 'Пожалуйста, заполните все поля.';
        messageElement.style.color = 'red';
    }
}

// Прокрутка к разделу
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

