const {app, BrowserWindow, ipcMain} = require("electron") // importa as funcionalidades do electron
const path = require("node:path") // importa o path do node.js

// Função para criar a janela do aplicativo
function createWindow(){
    // Cria uma nova janela do navegador
    const win = new BrowserWindow({

        // configurações da janela
        width: 800, // largura da janela
        height: 800, // altura da janela
        //maxwidth: 1000, // largura máxima da janela
        //maxHeight: 800, // altura máxima da janela
        minWidth: 500, // largura mínima da janela
        minHeight: 500, // altura mínima da janela
        autoHideMenuBar: true, // oculta a barra de menu automaticamente
        backgroundColor: '#ccc', // cor de fundo da janela
        //alwaysOnTop: false, // define se a janela deve ficar sempre no topo de outras janelas
        //fullscreenable: true, // define se a janela pode ser colocada em tela cheia
        //title: "Meu primeiro app", // título da janela

        // webPreferences é um objeto que contém configurações para a janela
        webPreferences: {
            preload: path.join(__dirname, "preload.js") // caminho para o arquivo preload.js
        }
    })

    const child = new BrowserWindow({
        // cria uma janela filha que é modal e não é exibida inicialmente
        parent: win, // define a janela pai da janela filha
        modal: true, // define a janela filha como modal, ou seja, bloqueia a interação com a janela pai enquanto estiver aberta
        show: false // define que a janela filha não será exibida inicialmente
    })

    // Evento que é disparado quando a janela filha está pronta para ser exibida
    child.once("ready-to-show", () => {
        child.show() // exibe a janela filha quando ela estiver pronta para ser exibida
    })

    // child.loadFile("child.html") // carrega o arquivo child.html na janela filha
    child.loadURL("https://www.google.com") // carrega a URL do Google na janela filha

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