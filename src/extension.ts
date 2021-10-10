// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "deprintify" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerTextEditorCommand('deprintify.deprintify', (textEditor, edit) => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		if (textEditor.document.languageId !== 'python') return;
		const lines = textEditor.document.getText(textEditor.selection).split('\n');
		const deprintified = lines.map(line => {
			if (!line.includes(' = ')) return line;
			return line + `\nprint('${line.split(' = ')[0]} is now:', ${line.split(' = ')[0]})\n`;
		}).join('');

		textEditor.edit(editBuilder => {
			editBuilder.replace(textEditor.selection, deprintified);
		});
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
