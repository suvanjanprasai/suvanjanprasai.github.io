function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var content = "Suvanjan Prasai."
window.onload = async function () {
    const heading = document.getElementById("content-heading");
    for (i = 0; i < content.length; i = i + 1) {
        await sleep(300);
        heading.textContent += content[i];
    }
    await sleep(1000);
    heading.style.borderRight = "none";
    heading.style.animation = "none";
}