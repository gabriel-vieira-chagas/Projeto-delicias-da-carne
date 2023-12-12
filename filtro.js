let cards = Array.from(document.getElementsByClassName("cardproduto"))
let cardsoriginal = cards.slice();
let container = document.getElementById('conteudosec');

for (let i = 0; i < cards.length - 1; i++) {
    for (let j = 0; j < cards.length - 1 - i; j++) {
        if (Number(cards[j].getAttribute("data-preco")) > Number(cards[j + 1].getAttribute("data-preco"))) {
            [cards[j], cards[j + 1]] = [cards[j + 1], cards[j]];
        }
    }
}

console.log(cards)


let filtro = document.getElementById("filtro")
filtro.addEventListener("change", function () {
    console.log(this.value)
    if (this.value == "maiorpreco") {
        for (let i = 0; i < cards.length - 1; i++) {
            for (let j = 0; j < cards.length - 1 - i; j++) {
                if (Number(cards[j].getAttribute("data-preco")) < Number(cards[j + 1].getAttribute("data-preco"))) {
                    [cards[j], cards[j + 1]] = [cards[j + 1], cards[j]];
                }
            }
        } 
        cards.forEach(card => container.appendChild(card));
    } else if(this.value == "menorpreco"){
        for (let i = 0; i < cards.length - 1; i++) {
            for (let j = 0; j < cards.length - 1 - i; j++) {
                if (Number(cards[j].getAttribute("data-preco")) > Number(cards[j + 1].getAttribute("data-preco"))) {
                    [cards[j], cards[j + 1]] = [cards[j + 1], cards[j]];
                }
            }
        }
        cards.forEach(card => container.appendChild(card));
    }
    else {
        cardsoriginal.forEach(card => container.appendChild(card))
    }
})