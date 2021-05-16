const copy_mail = document.querySelector('.copy-mail');
const txt_mail = document.querySelector('.copy-mail p');
const copy_phone = document.querySelector('.copy-phone');
const txt_phone = document.querySelector('.copy-phone p');

copy_mail.addEventListener('click', () => {
    navigator.clipboard.writeText(txt_mail.innerText);
})
copy_phone.addEventListener('click', () => {
    navigator.clipboard.writeText(txt_phone.innerText);
})