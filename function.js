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
                enableIframe(iframe1, iframe2, target, "80%", "35%");
                iframe1.scrollIntoView({ behavior: "smooth" });
            } else if (button.classList.contains("official-button")) {
                enableIframe(iframe2, iframe1, target, "90%", "500px"); 
                iframe2.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    window.addEventListener("orientationchange", () => {
        if (window.orientation === 90 || window.orientation === -90) {
            document.body.style.height = "180vh"; 
        } else {
            document.body.style.height = "180vh"; 
        }
    });
});

function enableIframe(activeIframe, inactiveIframe, target, width, height) {
    activeIframe.src = target;
    activeIframe.style.display = "block";
    activeIframe.style.width = width;
    activeIframe.style.height = height;
    inactiveIframe.src = "about:blank";
    inactiveIframe.style.display = "none";
}
