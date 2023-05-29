function toggleMode () {
    //trocar fundo com o botão
    const html = document.documentElement
    html.classList.toggle('light')
    
    //pegar a tag img
    const img = document.querySelector('#profile img')
    

    //substituir a imagem
    if(html.classList.contains('light')){
        //se tiver lightmode, adicionar a imagem light
        img.setAttribute('src', 'images/avatar-light.png')
        img.setAttribute('ALT', 'OCULOS ESCUROS')
    }else{
        //se tiver sem lightmode, manter a imagem normal
        img.setAttribute('src', 'images/avatar.png')
        img.setAttribute('ALT', 'SORRINDO')
    }
}