const {contextBridge, ipcRenderer} = require('electron') // importa as funcionalidades do electron

// Expondo a função ping para o processo de renderização
contextBridge.exposeInMainWorld('api', {
    ping: () => ipcRenderer.invoke('ping'), // cria uma função ping que envia uma mensagem para o processo principal e retorna a resposta
    getName: (nome) => ipcRenderer.invoke('username', nome) // cria uma função getName que envia uma mensagem para o processo principal e retorna a resposta
})