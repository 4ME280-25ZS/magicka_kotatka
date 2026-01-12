@echo off
echo Starting local web server...
echo.
echo Open your browser to: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
powershell -Command "& {Add-Type -AssemblyName System.Web; $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:8000/'); $listener.Start(); Write-Host 'Server running at http://localhost:8000/'; Start-Process 'http://localhost:8000/tarot-reading/'; while ($listener.IsListening) { $context = $listener.GetContext(); $request = $context.Request; $response = $context.Response; $path = $request.Url.LocalPath; if ($path -eq '/') { $path = '/index.html' }; $fullPath = Join-Path (Get-Location) ($path.TrimStart('/')); if (Test-Path $fullPath) { $content = [System.IO.File]::ReadAllBytes($fullPath); $ext = [System.IO.Path]::GetExtension($fullPath); $contentType = switch ($ext) { '.html' {'text/html'}; '.css' {'text/css'}; '.js' {'application/javascript'}; '.json' {'application/json'}; default {'application/octet-stream'} }; $response.ContentType = $contentType; $response.ContentLength64 = $content.Length; $response.OutputStream.Write($content, 0, $content.Length); } else { $response.StatusCode = 404; }; $response.Close(); }}"
