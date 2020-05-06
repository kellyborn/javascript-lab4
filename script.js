let buttonContainer = document.querySelector(".button-container")
let total = document.querySelector(".total")
let currentTotal = 0;

buttonContainer.addEventListener("click", (event) => {
    console.log(event)
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"));
        console.log(amount);
        currentTotal += amount;
        total.innerText = `Total: $${currentTotal.toFixed(2)}`;
    }
});

//2
let coinForm = document.querySelector("form"); //find form, set to variable
let coinContainer = document.querySelector(".coin-container")
coinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(coinForm);
    let amount = data.get("amount")
    let coin = data.get("coin")
    console.log(amount, coin)
    for (let i = 0; i < amount; i++) {
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin-div")
        coinDiv.innerText = coin;
        coinContainer.append(coinDiv);
    }
    coinForm.reset();
})

coinContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("coin-div")) {
        event.target.remove();
    }
})

//3 Light Bulb

let lightBulb = document.querySelector(".light-bulb");
let buttons = document.querySelector(".buttons");
let onBtn = document.querySelector(".on");
let offBtn = document.querySelector(".off");
let toggleBtn = document.querySelector(".toggle");
let endBtn = document.querySelector(".end");

onBtn.addEventListener("click", () => {
    lightBulb.style.backgroundColor = "#fafaaf";
})
offBtn.addEventListener("click", () => {
    lightBulb.style.backgroundColor = "#808080";
})
toggleBtn.addEventListener("click", () => {
    //     if (lightBulb.style.backgroundColor = "#fafaaf")) {
    //     lightBulb.classList.toggle();
    // }
    //     else (lightBulb.style.backgroundColor = "#808080")) {
    //     lightBulb.classList.toggle();
    // }
})
endBtn.addEventListener("click", () => {
    lightBulb.remove();
    buttons.disabled = true; //work on this
})


