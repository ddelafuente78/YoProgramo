var btnModal = document.getElementById('btnLogin');
var miModal = document.getElementById('miModal');
var v_span = document.getElementsByClassName("close")[0];
var v_body = document.getElementsByTagName("body")[0];
btnModal.onclick = function () {
    miModal.style.display = "block";
    v_body.style.position = "static";
    v_body.style.height = "100%";
    v_body.style.overflow = "hidden";
};
v_span.onclick = function () {
    miModal.style.display = "none";
    v_body.style.position = "inherit";
    v_body.style.height = "auto";
    v_body.style.overflow = "visible";
};
window.onclick = function (event) {
    if (event.target == miModal) {
        miModal.style.display = "none";
        v_body.style.position = "inherit";
        v_body.style.height = "auto";
        v_body.style.overflow = "visible";
    }
};
/*
btnModal.addEventListener('onclick', (e: Event) => {
    e.preventDefault;
    
    miModal.style.display = "block";
    v_body.style.position = "static";
    v_body.style.height = "100%";
    v_body.style.overflow = "hidden";
});

v_span.addEventListener('onclick', (e: Event) => {
    e.preventDefault;

    miModal.style.display = "none";
    v_body.style.position = "inherit";
    v_body.style.height = "auto";
    v_body.style.overflow = "visible";
});

window.addEventListener('onclick', (e: Event) => {
    e.preventDefault;

    if (e.target == miModal) {
        miModal.style.display = "none";
        v_body.style.position = "inherit";
        v_body.style.height = "auto";
        v_body.style.overflow = "visible";
    }
});
*/ 
