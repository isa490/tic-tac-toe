function alerta(txt) {
    setTimeout(() => {
        alert(txt)
    }, 500);
}

let letra = "X"
const tds = document.querySelectorAll('td');

let pos = 1;
tds.forEach(td => {
    td.setAttribute('id', 'c' + pos)
    td.onclick = () => {
        if (td.innerHTML != "X" && td.innerHTML != "O") {
            td.innerHTML = letra
            letra = letra == "X" ? "O" : "X"
            verificaVencedor()
        }
    }
    pos++;
    console.log(`ID do td: c${pos - 1}`); // Log para verificar IDs
})

function verificaVencedor() {
    const [c1, c2, c3, c4, c5, c6, c7, c8, c9] = tds
    const arr = [c1, c2, c3, c4, c5, c6, c7, c8, c9]

    if ( // Verticais
        (c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML) || (c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML) || (c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML) ||
        // Horizontais
        (c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML) || (c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML) || (c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML) ||
        // Diagonais
        (c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML) || (c3.innerHTML == c5.innerHTML && c5.innerHTML == c7.innerHTML)
    ) {
        if (letra == "X") {
            alerta("Segundo jogador venceu!")
        } else {
            alerta("Primeiro jogador venceu!")
        }
    }

    if (arr.every(td => td.innerHTML == "X" || td.innerHTML == "O")) {
        alerta("DEU VELHA")
    }
}

window.onkeydown = (e) => {
    if (e.keyCode >= 49 && e.keyCode <= 57) {
        const pos = Math.abs(48 - e.keyCode)
        console.log(`Tecla pressionada: ${e.keyCode}, posição: ${pos}`); // Log para verificar teclas pressionadas
        document.querySelector("#c" + pos).click()
    }
}

// Bizu do desafio
console.table(document.querySelector('table').getBoundingClientRect());