document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");
    const iframe1 = document.getElementById("frame1");
    const iframe2 = document.getElementById("frame2");

    iframe1.src = "about:blank";
    iframe2.src = "about:blank";
    iframe1.style.display = "none";
    iframe2.style.display = "none";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");
            if (button.classList.contains("skysport-button")) {
                enableIframe(iframe1, iframe2, target);
                iframe1.scrollIntoView({ behavior: "smooth" });
            } else if (button.classList.contains("official-button")) {
                enableIframe(iframe2, iframe1, target);
                iframe2.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

function enableIframe(activeIframe, inactiveIframe, target) {
    activeIframe.src = target;
    activeIframe.style.display = "block";
    activeIframe.style.width = "100%";
    activeIframe.style.height = "60%";
    inactiveIframe.src = "about:blank";
    inactiveIframe.style.display = "none";
}
