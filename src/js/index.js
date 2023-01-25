const url = "http://45.10.42.11:8001/";
const out = document.getElementById("out");
const musicBtn = document.getElementById("music");
const artBtn = document.getElementById("art");

async function getFromServer(tag) {
    const data = await fetch(`${url}api/get-nft?tag=${tag}&limit=8`).then(
        (response) => response.json()
    );
    return data;
}

function inHtml(data) {
    let card = "";
    for (let i = 0; i < data.length; i++) {
        card += `
        <div class="collection__item">
            <img class="collection__img"  src="${url}${data[i].image}" alt="" />
            <h3 class="collection__title">${data[i].text}</h3>
            <h4 class="collection__subtitle">${data[i].subtext}</h4>
        </div>`;
    }
    return card;
}

getFromServer("art").then((res) =>
    out.insertAdjacentHTML("afterbegin", inHtml(res))
);

musicBtn.onclick = () => {
    let card = document.querySelectorAll(".collection__item");
    card.forEach((i) => i.classList.add("fade-out"));
    setTimeout(function() {
        card.forEach((i) => i.remove());
    }, 500);
    setTimeout(function() {
        getFromServer("music").then((res) =>
            out.insertAdjacentHTML("afterbegin", inHtml(res))
        );
    }, 500);
};

artBtn.onclick = () => {
    let card = document.querySelectorAll(".collection__item");
    card.forEach((i) => i.classList.add("fade-out"));
    setTimeout(function() {
        card.forEach((i) => i.remove());
    }, 500);
    setTimeout(function() {
        getFromServer("art").then((res) =>
            out.insertAdjacentHTML("afterbegin", inHtml(res))
        );
    }, 500);
};

// console.log(getHTMLStringByTagFromServer("art"));
// out.insertAdjacentHTML("afterbegin", cardItem());

// musicBtn.onclick = () => {
//     const card = document.querySelectorAll(".collection__item");
//     cardItem = "";
//     card.forEach((i) => i.classList.add("fade-out"));
//     setTimeout(function() {
//         card.forEach((i) => i.remove());
//     }, 500);

//     for (let i = 0; i < data.length - 4; i++) {
//         cardItem += `
//             <div class="collection__item">
//                 <img class="collection__img" src="http://45.10.42.11:8001/${data[i].image}" alt="" />
//                 <h3 class="collection__title">${data[i].text}</h3>
//                 <h4 class="collection__subtitle">${data[i].subtext}</h4>
//             </div>`;
//     }
//     setTimeout(function() {
//         out.insertAdjacentHTML("afterbegin", cardItem);
//     }, 500);
// };

// let art = document.getElementById("art");

// art.onclick = () => {
//     const card = document.querySelectorAll(".collection__item");
//     cardItem = "";
//     card.forEach((i) => i.classList.add("fade-out"));

//     card.forEach((i) => i.remove());

//     for (let i = 0; i < data.length; i++) {
//         cardItem += `
//             <div class="collection__item fade-in">
//                 <img class="collection__img" src="http://45.10.42.11:8000/${data[i].image}" alt="" />
//                 <h3 class="collection__title">${data[i].text}</h3>
//                 <h4 class="collection__subtitle">${data[i].subtext}</h4>
//             </div>`;
//     }
//     out.insertAdjacentHTML("afterbegin", cardItem);
// };