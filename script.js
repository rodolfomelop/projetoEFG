function registre() {
    console.log("Aqui")

    let name = document.getElementById('name').value

    let cpf = document.getElementById('cpf').value
    

    localStorage.setItem('meuNome', name.value)
    localStorage.setItem('meuCpf', cpf.value)

    // console.log(`nome : ${name}, Cpf : ${cpf}`)
    console.log(localStorage.getItem('meuNome'))
    console.log(localStorage.getItem('cpf'))
}