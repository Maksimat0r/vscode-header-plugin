const vscode = require('vscode');

/**
 * Функция, вызываемая при активации расширения
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Extension "vscode-header-plugin" is now active!');

    // Пример: регистрируем команду "extension.sayHello"
    let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        vscode.window.showInformationMessage('Hello from Header Plugin!');
    });

    context.subscriptions.push(disposable);
}

/**
 * Функция, вызываемая при деактивации расширения
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
