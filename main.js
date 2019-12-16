let subscribePopup, shown = false;

function initSubscribePopup() {
    subscribePopup = document.querySelector('.subscribe-popup');
     document.onbeforeunload = showSubscribePopup;
    setTimeout(showSubscribePopup, 2000);
    document.addEventListener('click', hideSubscribePopup);
}

function showSubscribePopup() {
    if (shown) return;
    subscribePopup.className += ' active';
    shown = true;
    return "Важное сообщение, нажми Отмена";
}

function hideSubscribePopup() {
    subscribePopup.className = subscribePopup.className.replace("active", "");
}

initSubscribePopup();