$(document).ready(function () {
    $("#hero-content").fadeIn().css("visibility", "visible").css("opacity", 1);
    $(".tool-icon").mouseenter(function () {
        $(this).css("transform", "scale(1.2)").css("transition", "transform 0.3s ease-in-out").css("cursor", "pointer");
    }).mouseleave(function () {
        $(this).css("transform", "scale(1)").css("transition", "transform 0.3s ease-in-out");
    });
});

/*
document.addEventListener("DOMContentLoaded", function () {
    // Your code here runs after the DOM is fully loaded
    console.log("Document is ready!");

    const heroElement = document.querySelector(".hero-content");
    if (heroElement) {
        setTimeout(() => {
            heroElement.style.visibility = "visible";
            heroElement.style.opacity = 1;
        }, 1500);
    }
});

*/

