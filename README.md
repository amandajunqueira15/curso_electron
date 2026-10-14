# Repositório do curso Electron - Criar apps desktop do zero ao profissional

### Comandos Utilizados

- Criando primeiro projeto com electron:

    ```bash
    npm install --save-dev electron
    ```

- Configurando .gitignore:
    - Criado arquivo com nome .gitignore
    - Adicionado no conteúdo:
    ```bash
        node_modules
        ./node_modules
    ```

- Editado arquivo package.json:
    ```json
    {
        "name": "primeiro_app",
        "version": "1.0.0",
        "description": "",
        "main": "main.js", <-- Alterado nome do arquivo principal para main.js
        "scripts": {
            "dev": "electron ." <-- Adicionado script dev
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "type": "commonjs",
        "devDependencies": {
            "electron": "^44.7.1"
        }
    }
    ```

- Criado os arquivos index.html, renderer.js e main.js do primeiro projeto

- Main: Este processo é responsável por gerenciar os aspectos do ciclo de vida do aplicativo, basicamente o servidor a parte nodejs

- Renderer: É utilizado para enviar mensagens do processo de renderização para o arquivo principal

- Preload: Este script tem a capacidade de acessar APIs do Node.js e APIs do navegador

- Criando segundo projeto com electron-vite:

    ```bash
        npm create @quick-start/electron@latest

        Project name: >> devclientes
        Select a framework: >> react
        Add TypeScript? ... Yes
        Add Electron updater plugin? ... No
        Enable Electron download mirror proxy? ... No
    ```

- Instalando dependências do projeto:

    ```bash
        npm install
    ```
