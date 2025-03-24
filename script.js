document.getElementById("abrirEnvelope").addEventListener("click", function() {
    // Abrir o envelope
    document.getElementById("envelope").style.transform = "rotateX(180deg)";
    document.getElementById("envelope").querySelector(".top").style.transform = "rotateX(180deg)";
    document.getElementById("envelope").querySelector(".bottom").style.transform = "rotateX(180deg)";
    
    // Exibir a cartinha
    setTimeout(function() {
        document.getElementById("cartinha").style.display = "block";
    }, 500);  // Delay para dar tempo do efeito de abertura
});
