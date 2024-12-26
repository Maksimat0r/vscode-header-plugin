const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.getText().length === 0) {
            const edit = new vscode.WorkspaceEdit();
            const fileName = document.uri.fsPath.split('/').pop(); // Получаем имя файла
            const headerText = `/**\n * File Name: ${fileName}\n * File created: ${new Date().toISOString()}\n * Author: ${process.env.USERNAME || process.env.USER || 'Developer'}\n */\n\n`;
            
            edit.insert(document.uri, new vscode.Position(0, 0), headerText);
          
            vscode.workspace.applyEdit(edit);
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
