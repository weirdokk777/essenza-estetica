# Install dependencies for DevSantos portfolio
$logFile = "C:\Users\User\deps-install-log.txt"

try {
    $nodeExe = "C:\Users\User\node-portable\node-v20.18.0-win-x64\node.exe"
    
    if (Test-Path $nodeExe) {
        Add-Content $logFile "Node found at: $nodeExe"
        $version = & $nodeExe --version 2>&1
        Add-Content $logFile "Node version: $version"
        
        $nodeDir = Split-Path $nodeExe
        $npmCmd = Join-Path $nodeDir "npm.cmd"
        Add-Content $logFile "npm at: $npmCmd"
        
        if (Test-Path $npmCmd) {
            $projectPath = "C:\Users\User\.vscode\portfolio\devsantos"
            Push-Location $projectPath
            Add-Content $logFile "Installing dependencies in: $projectPath"
            $output = & cmd /c "cd /d $projectPath && `"$env:Path`"$npmCmd`" install" 2>&1
            Add-Content $logFile "npm install output: $output"
            Pop-Location
        } else {
            Add-Content $logFile "npm.cmd not found"
        }
    } else {
        Add-Content $logFile "Node not found at: $nodeExe"
    }
} catch {
    Add-Content $logFile "ERROR: $_"
}
Add-Content $logFile "Script completed"