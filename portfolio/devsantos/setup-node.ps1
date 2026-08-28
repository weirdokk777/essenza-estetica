# Setup Node.js script
$logFile = "C:\Users\User\node-setup-log.txt"

try {
    # Check current state
    $nodeExists = Test-Path "C:\Program Files\nodejs\node.exe"
    Add-Content $logFile "Node in Program Files: $nodeExists"

    $portableZip = "C:\Users\User\node-portable.zip"
    $zipExists = Test-Path $portableZip
    Add-Content $logFile "Portable ZIP exists: $zipExists"

    if ($zipExists) {
        $size = (Get-Item $portableZip).Length
        Add-Content $logFile "ZIP Size: $size bytes"
        
        # Extract
        $extractPath = "C:\Users\User\node-portable"
        if (Test-Path $extractPath) {
            Remove-Item $extractPath -Recurse -Force
        }
        Expand-Archive -Path $portableZip -DestinationPath $extractPath -Force
        Add-Content $logFile "Extraction complete"
        
        # Find node.exe
        $nodeExe = Get-ChildItem $extractPath -Filter "node.exe" -Recurse | Select-Object -First 1
        if ($nodeExe) {
            Add-Content $logFile "Found node.exe at: $($nodeExe.FullName)"
            $version = & $nodeExe.FullName --version 2>&1
            Add-Content $logFile "Node version: $version"
            
            # Get npm path
            $nodeDir = $nodeExe.DirectoryName
            $npmPath = Join-Path $nodeDir "npm.cmd"
            Add-Content $logFile "npm path: $npmPath"
            
            # Install dependencies
            $projectPath = "C:\Users\User\.vscode\portfolio\devsantos"
            Push-Location $projectPath
            $npmOutput = & $npmPath install 2>&1
            Add-Content $logFile "npm install output: $npmOutput"
            Pop-Location
        }
    }
} catch {
    Add-Content $logFile "ERROR: $_"
}
Add-Content $logFile "Script completed"