//1
const regExp = /^\d+$/;
const containsOnlyDigits = (str) => {
    return regExp.test(str);
};
console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("12a45")); 
console.log(containsOnlyDigits("1"));


//2
let count1 = 0;
const intervalId = setInterval(() => {
    count1++;
    console.log("Прошла секунда");
}, 1000);


//3
const countToOn = () => {
    let num = 1;
    const interval = setInterval(() => {
        console.log(num);
        num++;
        if (num > 10) {
            clearInterval(interval);
        }
    }, 1000);
};
countToOn();


//4
const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    box.classList.toggle("active");
});


//5
const xhr = new XMLHttpRequest();

xhr.open("GET", "data.json");
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        console.error("Ошибка:", xhr.status);
    }
};

xhr.send();
