window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-12345678").addEventListener("click", changeElementContent)
})

function changeElementContent() {
    console.debug("Change element content")
    var element = window.document.getElementById("test-12345678");
    element.innerText = "Nur ein Test.";
}