function popup() {
    let popupBtn = document.getElementsByTagName("body")[0],
        popupDesign = document.querySelector(".popup-design");

    popupBtn.addEventListener("click", (event) => {
        let target = event.target;

        if (target && target.classList.contains("show")) {
            target.classList.remove('show');
            document.body.style.overflow = '';
        }

        if (target && target.classList.contains("button-design")) {
            popupDesign.classList.add("show");
            popupDesign.classList.add("smooth");
        } 
    });

    let popupClose = document.querySelectorAll(".popup-close");
    popupClose.forEach( (item) => {
        item.addEventListener("click",  () => {
            popupDesign.classList.remove("show");
            popupDesign.classList.remove("smooth");
            document.body.style.overflow = "";
        });
    });
}

module.exports = popup;