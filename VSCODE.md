# Recommended VSCode settings
Below are the recommended `.vscode` settings.

To ignore `.vscode` globally, add it into global .gitignore:

```bin 
vi ~/.gitignore_global
```

## client settings

```json
{
  "files.autoSave": "off",
  "editor.formatOnSave": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.reportStyleChecksAsWarnings": false,
  "workbench.colorCustomizations": {
    "titleBar.activeForeground": "#fff",
    "titleBar.inactiveForeground": "#fff",
    "titleBar.activeBackground": "#f38525",
    "titleBar.inactiveBackground": "#f38525"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "debug.node.autoAttach": "on",
  "tslint.alwaysShowStatus": true,
  "tslint.autoFixOnSave": true,
  "tslint.packageManager": "yarn",
  "prettier.tslintIntegration": true
}
```

## graphql settings
```json
{
  "files.autoSave": "off",
  "editor.formatOnSave": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.reportStyleChecksAsWarnings": false,
  "workbench.colorCustomizations": {
    "titleBar.activeForeground": "#fff",
    "titleBar.inactiveForeground": "#fff",
    "titleBar.activeBackground": "#257ef3",
    "titleBar.inactiveBackground": "#257ef3"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "debug.node.autoAttach": "on",
  "tslint.alwaysShowStatus": true,
  "tslint.packageManager": "yarn",
  "tslint.autoFixOnSave": true,
  "prettier.tslintIntegration": true
}
```