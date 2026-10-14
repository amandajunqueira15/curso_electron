const {app, BrowserWindow, ipcMain} = require("electron") // importa as funcionalidades do electron
const path = require("node:path") // importa o path do node.js

// Função para criar a janela do aplicativo
function createWindow(){
    const win = new BrowserWindow({
        width: 800, // largura da janela
        height: 800, // altura da janela
        webPreferences: {
            preload: path.join(__dirname, "preload.js") // caminho para o arquivo preload.js
        }
    })

    win.loadFile("index.html") // carrega o arquivo index.html na janela
}

// Evento que é disparado quando o aplicativo está pronto
app.whenReady().then(() => {
    ipcMain.handle("ping", () => "pong, pong") // cria um manipulador para o evento "ping" que retorna "pong, pong"
    //ipcMain.handle("username", () => "Sujeito Programador") // cria um manipulador para o evento "username" que retorna "Sujeito Programador"
    ipcMain.handle("username", (event, nome) => {
        console.log("MAIN NOME RECEBIDO: ", nome)
        return "Bem vindo(a) " + nome
    }) // cria um manipulador para o evento "username" que recebe o nome do usuário e imprime no console

    // Cria a janela do aplicativo
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }

    // Evento que é disparado quando o aplicativo é ativado (por exemplo, quando o usuário clica no ícone do aplicativo)
    app.on("activate", () => {
        // Cria a janela do aplicativo se não houver nenhuma janela aberta
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    })
})

// Evento que é disparado quando todas as janelas do aplicativo são fechadas
app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit(); // fecha o aplicativo se todas as janelas estiverem fechadas, exceto no macOS
    }
})