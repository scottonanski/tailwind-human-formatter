const vscode = require('vscode');
const { formatHtmlHuman } = require('./src/formatter');

function activate(context) {
  const formatter = {
    provideDocumentFormattingEdits(document) {
      const fullText = document.getText();
      const formatted = formatHtmlHuman(fullText);

      const firstLine = document.lineAt(0);
      const lastLine = document.lineAt(document.lineCount - 1);
      const range = new vscode.Range(firstLine.range.start, lastLine.range.end);

      return [vscode.TextEdit.replace(range, formatted)];
    }
  };

  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider('html', formatter)
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
