@echo off
echo [1/3] Staging changes...
git add .
echo [2/3] Committing changes...
git commit -m "Auto-update: %date% %time%"
echo [3/3] Pushing to GitHub...
git push origin main
echo.
echo ================================
echo Done! Your website is updated.
echo ================================
pause
