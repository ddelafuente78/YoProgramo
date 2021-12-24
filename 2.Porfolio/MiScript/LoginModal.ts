const btnModal = document.getElementById('btnLogin') as HTMLButtonElement;
const miModal = document.getElementById('miModal') as HTMLDivElement;
const v_span = document.getElementsByClassName("close")[0] as HTMLSpanElement;
const v_body = document.getElementsByTagName("body")[0] as HTMLBodyElement;

btnModal.onclick = function() {

    miModal.style.display = "block";

    v_body.style.position = "static";
    v_body.style.height = "100%";
    v_body.style.overflow = "hidden";
}

v_span.onclick = function() {

    miModal.style.display = "none";

    v_body.style.position = "inherit";
    v_body.style.height = "auto";
    v_body.style.overflow = "visible";
}

window.onclick = function(event) {

    if (event.target == miModal) {
        miModal.style.display = "none";

        v_body.style.position = "inherit";
        v_body.style.height = "auto";
        v_body.style.overflow = "visible";
    }
}