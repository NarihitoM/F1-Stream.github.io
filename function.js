document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");
    const iframe1 = document.getElementById("frame1");
    const iframe2 = document.getElementById("frame2");
    const container1 = document.querySelector(".container1");
    const container2 = document.querySelector(".container2");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");
            const buttonId = button.id;
            console.log(`Button clicked: ${buttonId}`);
            if (button.classList.contains("skysport-button")) {
                loadIframe(iframe1, iframe2, container1, container2, target, "skysport");
                scrollToContainer(container1);
            } else if (button.classList.contains("official-button")) {
                loadIframe(iframe1, iframe2, container1, container2, target, "official");
                scrollToContainer(container2);
            }
        });
    });
});

function loadIframe(iframe1, iframe2, container1, container2, target, type) {
    if (type === "skysport") {
        iframe1.src = target;
        iframe2.src = "about:blank";
        container1.style.display = "block";
        container2.style.display = "none";
    } else if (type === "official") {
        iframe2.src = target;
        iframe1.src = "about:blank";
        container1.style.display = "none";
        container2.style.display = "block";
    }
}

function scrollToContainer(container) {
    container.scrollIntoView({ behavior: "smooth", block: "start" });
}
