document.addEventListener("DOMContentLoaded", function() {
    const secTexto = document.getElementById("notfound");
    var ingreseElTexto = document.getElementById("textEncriptIn");
    var encriptText = document.getElementById("textEncriptOut");
    const secMsjEncrip = document.getElementById("msj");
    const encripBtn = document.getElementById("encript");
    const descripBtn = document.getElementById("descript");
    const cpyBtn = document.getElementById("btnCopy");
    secMsjEncrip.style.display = 'none'
    var longTxt=0;
    console.log("longitud ="+longTxt);
        ingreseElTexto.addEventListener('input', function() {
                const regex = /^[a-z\s]+$/;
                const regex1 = /^[\s\S]*$/;
                console.log(regex.test(ingreseElTexto.value));
                if(!regex.test(ingreseElTexto.value) && !regex1.test(ingreseElTexto.value)){
                    alert("Error: Solo se permiten letras minúsculas y sin caracteres especiales.");
                    ingreseElTexto.value="";
                }
              console.log(ingreseElTexto.value);
              longTxt=ingreseElTexto.value.length;
              console.log("tamano="+longTxt);
              if (longTxt===0) {
                secTexto.style.display = 'block'; // show
                secMsjEncrip.style.display = 'none'; // hide
              } else {
                secTexto.style.display = 'none'; // hide
                secMsjEncrip.style.display = 'block'; // show
              }
            }
        )
        ingreseElTexto.addEventListener('click', function() {
            encriptText.value="";
        })
        encripBtn.addEventListener("click", function() {
           if(encriptText.value.length!==0){ encriptText.value="";}
            encriptText.value=encriptarTexto(ingreseElTexto.value);
            ajustarTexto(encriptText);
        })
        descripBtn.addEventListener("click", function() {
            if(encriptText.value.length!==0){ encriptText.value="";}
            encriptText.value=dencriptarTexto(ingreseElTexto.value);
        })
        cpyBtn.addEventListener("click", function() {
            navigator.clipboard.writeText(encriptText.value).then(() => {
                console.log("Texto copiado al portapapeles");
            });
        })
  });
function encriptarTexto(texto) {
    const textoEncriptado = [];
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.split("")[i];
        if(caracter === 'e'){
            caracter = 'enter';
        }else if(caracter === 'i'){
            caracter = 'imes';
        }else if(caracter === 'o'){
            caracter = 'ober';
        }else if(caracter === 'u'){
            caracter = 'ufat';
        }else if(caracter === 'a'){
            caracter = 'ai';
        }
        textoEncriptado.push(caracter);
    }
    return textoEncriptado.join("");
}
function dencriptarTexto(texto) {
        if(texto.indexOf("enter") !== -1){
            texto = texto.replace('enter','e');
        }
        if(texto.indexOf("imes") !== -1) {
            texto = texto.replace('imes','i');
        }
        if(texto.indexOf("ober") !== -1){
            texto = texto.replace('ober','o');
        }
        if(texto.indexOf("ufat") !== -1){
            texto = texto.replace('ufat','u');
        }
        if(texto.indexOf("ai") !== -1){
            texto = texto.replace('ai','a');
        }
        return texto;
}
function ajustarTexto(textarea) {
    const anchoTextarea = textarea.offsetWidth;
    const texto = textarea.value;
    const palabras = texto.split(' ');
    let lineaActual = '';
    let textoAjustado = '';

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];
        const anchoPalabra = palabra.length * 10; // Asumiendo 10px por carácter

        if (anchoPalabra + lineaActual.length * 10 > anchoTextarea) {
            textoAjustado += lineaActual.trim() + '\n';
            lineaActual = palabra + ' ';
        } else {
            lineaActual += palabra + ' ';
        }
    }

    textoAjustado += lineaActual.trim();
    textarea.value = textoAjustado;
    if (textarea.scrollHeight > textarea.offsetHeight) {
        textarea.style.height = textarea.scrollHeight + 'px';
    }
}

