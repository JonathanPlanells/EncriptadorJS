copiar();
function copiar() {
    let copiarBtn = document.getElementById('btnCopiar');
    let textarea = document.getElementById('txtFinal');
    let pop = document.getElementById('notificacion');
    copiarBtn.addEventListener("click", () => {
        pop.innerHTML = ``
        textarea.select();
        document.execCommand("copy");
        pop.innerHTML += `!Texto Copiado!`
    })
}

function btnEnriptador() {
    let cadena = document.getElementById('txtInicial').value;
    if (cadena === "") {
        x.style.visibility = 'block';
    } else {
        let pop = document.getElementById('notificacion');
        pop.innerHTML = ``
        document.getElementById("btnCopiar").disabled = false;
        let x = document.getElementById('cajaIlu2');
        if (x.style.display === 'none') {
            x.style.visibility = 'block';
        } else {
            x.style.display = 'none';
        }
        document.getElementById('txtFinal').innerHTML = encriptador(cadena);
    }
}

function encriptador(texto) {
    const caracteres = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" }
    let nueva = texto.replace(/[eiaou]/g, m => caracteres[m])
    return nueva
}

function btnDesenriptador() {
    let cadena = document.getElementById('txtInicial').value;
    if (cadena === "") {
        x.style.visibility = 'block';
    } else {
        let pop = document.getElementById('notificacion');
        pop.innerHTML = ``
        document.getElementById("btnCopiar").disabled = false;
        let x = document.getElementById('cajaIlu2');
        if (x.style.display === 'none') {
            x.style.visibility = 'hidden';

        } else {
            x.style.display = 'none';
        }
        let cadena = document.getElementById('txtInicial').value;
        document.getElementById('txtFinal').innerHTML = desencriptador(cadena);
    }
}

function desencriptador(texto) {
    const caracteres = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" }
    let nueva = texto.replace(/enter|imes|ai|ober|ufat/g, m => caracteres[m])
    return nueva
}