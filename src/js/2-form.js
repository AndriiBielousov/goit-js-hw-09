"use strict"
const formData = {
    email: "",
    message: "",
}
const form = document.querySelector('.feedback-form');
form.addEventListener('input', getData);
form.addEventListener('submit', validationForm);
function getData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
function validationForm(event) {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = '';
    formData.message = '';
    form.reset()
}

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
}