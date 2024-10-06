let title = document.getElementById('title')
let paragraf1 = document.getElementsByClassName("paragraf")
let judul = document.querySelector('#judul')


title.innerHTML = "Hello World"
paragraf1.innerHTML = "Paragraf diubah dari javascript"
paragraf1[0].innerHTML = "Paragraf diubah dari javascript"

title.addEventListener(click, function() {
    title.innerHTML= "Kamu Kena Hack"
    title.style.color = "red"
    title.style.fontSize = "200px"
})