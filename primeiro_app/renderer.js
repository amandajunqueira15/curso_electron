async function teste(){
    const response = await window.api.ping() // chama a função ping exposta no preload.js e aguarda a resposta
    console.log(response) // imprime a resposta no console
}

teste(); // chama a função teste para testar a comunicação entre o processo de renderização e o processo principal

window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button") // seleciona o botão pelo id
    const text = document.getElementById("text") // seleciona o elemento strong pelo id

    button.addEventListener("click", async () => {
        const username = await window.api.getName(); // chama a função getName exposta no preload.js e aguarda a resposta
        //console.log(username) // imprime o nome de usuário no console
        text.textContent = username // atualiza o conteúdo do elemento strong com o nome de usuário
    })
})