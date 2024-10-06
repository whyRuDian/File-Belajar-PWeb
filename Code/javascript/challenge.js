let nama = document.getElementById('name')
let inputnama = document.getElementById('')
let button = document.getElementById('button')

button.addEventListener('click', function() {
    alert(inputnama.value)
})

{
    const update = inputnama.value;
    nama.innerHTML = update;
}
