function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Bom dia agora são ${hora} horas. <br><br> Bom dia Victor`
if(hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora <= 18) {
    msg.innerHTML = `Boa tarde agora são ${hora} horas. <br><br> Boa Tarde Victor`
    // Boa Tarde!
    img.src =  'fototarde.png'
    document.body.style.background = '#b9846f'
}else{
    // Boa Noite!
    msg.innerHTML = `Boa noite agora são ${hora} horas. <br><br> Boa Noite Victor`
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}
}


