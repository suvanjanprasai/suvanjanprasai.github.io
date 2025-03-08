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

const snippets = [
    { code: `import datetime

def greet(name,date):
print(f"Hello {name}!")

if date==True:
dateTime = datetime.datetime.now()
print(f"The date is: {datetime}")

greet("Suvanjan",True)`, lang: "python" },
    { code: `function greet(name,show) {
document.write("Hello, " + name +" ");

if (show == True){
const date = new Date();
document.write(date);
}
}

greet(prompt());`, lang: "javascript" },
    { code: `#include <stdio.h>
#include <time.h>
void main(){
char name[50];
scanf("%s",name);
time_t now;time(&now);
struct tm *local = localtime(&now);
printf("Current Time: %02d:%02d\n",
local->tm_hour, local->tm_min);       
printf("Hello %s",name);}`, lang: "c" }
];

let index = 0;
const codeElement = document.getElementById("code");

function typeCode(snippet, callback) {
    let i = 0;
    codeElement.textContent = "";
    function type() {
        if (i < snippet.code.length) {
            codeElement.textContent = snippet.code.substring(0, i + 1);
            i++;
            Prism.highlightElement(codeElement);
            setTimeout(type, 50);
        } else {
            if (callback) setTimeout(callback, 2000);
        }
    }
    type();
}

function cycleSnippets() {
    const snippet = snippets[index];
    codeElement.className = `language-${snippet.lang}`;
    typeCode(snippet, () => {
        index = (index + 1) % snippets.length;
        setTimeout(cycleSnippets, 1000);
    });
}

cycleSnippets();