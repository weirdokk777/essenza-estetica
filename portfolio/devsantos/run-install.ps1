# Script para instalar dependências
$logFile = "C:\Users\User\.vscode\portfolio\devsantos\install-log.txt"
$npmPath = "C:\Program Files\nodejs\npm.cmd"
$projectPath = "C:\Users\User\.vscode\portfolio\devsantos"

Set-Content $logFile "Iniciando instalacao..."

# Verificar node_modules
if (Test-Path "$projectPath\node_modules") {
    Add-Content $logFile "node_modules JA EXISTE"
} else {
    Add-Content $logFile "node_modules NAO EXISTE - instalando..."
    Set-Location $projectPath
    $output = & $npmPath install 2>&1 | Out-String
    Add-Content $logFile "Saida do npm install:"
    Add-Content $logFile $output
}

# Verificar novamente
if (Test-Path "$projectPath\node_modules") {
    Add-Content $logFile "RESULTADO: node_modules criado com sucesso"
} else {
    Add-Content $logFile "RESULTADO: node_modules NAO foi criado"
}

Add-Content $logFile "Script concluido"