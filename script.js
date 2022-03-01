let captcha = document.querySelector("#captcha-img-code")
let captchaEnter = document.querySelector("#enter")
let captchaBtn = document.querySelector("#btn-captcha")
let captchaInfo = document.getElementById("info")
let notMatch = "Captcha Not Match"
let match = "Captcha Matched";

let captchaCode = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    2, 3, 4, 5, 6, 7, 8, 9, 0
]

captcha.innerText = " ";
for (let i = 0; i < 6; i++) {
    captcha.innerHTML += captchaCode[Math.round(Math.floor(Math.random() * captchaCode.length))];
}


captchaBtn.addEventListener("click", function() {
    if (captchaEnter.value === captcha.innerText) {
        captchaInfo.innerText = match;
        captchaInfo.style.color = "green";
    } else if (captchaEnter.value != captcha.innerText) {
        captchaInfo.innerText = notMatch;
        captchaInfo.style.color = "red";

    }
})