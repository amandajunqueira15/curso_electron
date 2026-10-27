import {Menu, Tray, nativeImage, BrowserWindow, app} from 'electron'
import path from 'node:path'
import {is} from '@electron-toolkit/utils'

export function createTray(window: BrowserWindow){
    const appIcon = is.dev
    ? path.join(app.getAppPath(), 'resources', 'menuTemplate.png')
    : path.join(process.resourcesPath, 'menuTemplate.png')

    let icon = nativeImage.createFromPath(appIcon)

    const tray = new Tray(icon)

    const menu = Menu.buildFromTemplate([
        {label: 'Dev Clientes', enabled: false,},
        {type: 'separator'},
        {
            label: 'Cadastrar cliente',
            click: () => {
                // Enviar mensagem do processo principal (main) para o processo frontend (renderer)
                window.webContents.send("new-customer")

                if(window.isMinimized()) window.restore()

                window.focus()
            }
        },
        {
            label: 'Abrir',
            click: () => {
                window.show()
            }
        },
        {type: 'separator'},
        {
            label: 'Sair',
            role: 'quit'
        }
    ])

    tray.setToolTip('Dev Clientes')

    tray.setContextMenu(menu)
}