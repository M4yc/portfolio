document.addEventListener("DOMContentLoaded", function () {
    const typedTextElement = document.getElementById("typed-text");
    const textToType = "Desenvolvedor web";
    let index = 0;

    function typeText() {
        typedTextElement.textContent += textToType[index];
        index++;

        if (index < textToType.length) {
            setTimeout(typeText, 100); // Ajuste o intervalo conforme necessário
        }
    }

    typeText();
});