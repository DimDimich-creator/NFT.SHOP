const url = "http://45.10.42.11:8000/api/get-nft?format=json";

let data;

fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
        data = responseData;
    });

setTimeout(() => {
    let out = document.getElementById("out");

    let cardItem = "";
    for (let i = 0; i < data.length; i++) {
        cardItem += `
        <div class="collection__item">
            <img class="collection__img" src="http://45.10.42.11:8000/${data[i].image}" alt="" />
            <h3 class="collection__title">${data[i].text}</h3>
            <h4 class="collection__subtitle">${data[i].subtext}</h4>
        </div>`;
    }

    out.insertAdjacentHTML("afterbegin", cardItem);
}, 259);

let music = document.getElementById("music");

music.onclick = () => {
    const card = document.querySelectorAll(".collection__item");
    cardItem = "";
    card.forEach((i) => i.classList.add("fade-out"));
    setTimeout(function() {
        card.forEach((i) => i.remove());
    }, 500);

    for (let i = 0; i < data.length - 4; i++) {
        cardItem += `
            <div class="collection__item">
                <img class="collection__img" src="http://45.10.42.11:8000/${data[i].image}" alt="" />
                <h3 class="collection__title">${data[i].text}</h3>
                <h4 class="collection__subtitle">${data[i].subtext}</h4>
            </div>`;
    }
    setTimeout(function() {
        out.insertAdjacentHTML("afterbegin", cardItem);
    }, 500);
};

let art = document.getElementById("art");

art.onclick = () => {
    const card = document.querySelectorAll(".collection__item");
    cardItem = "";
    card.forEach((i) => i.classList.add("fade-out"));

    card.forEach((i) => i.remove());

    for (let i = 0; i < data.length; i++) {
        cardItem += `
            <div class="collection__item fade-in">
                <img class="collection__img" src="http://45.10.42.11:8000/${data[i].image}" alt="" />
                <h3 class="collection__title">${data[i].text}</h3>
                <h4 class="collection__subtitle">${data[i].subtext}</h4>
            </div>`;
    }
    out.insertAdjacentHTML("afterbegin", cardItem);
};