# Deploy project in gitHub

1. create a repository in git
2. give the repository name: first-clock-project
3. open the vite.config.js
4. put the uri path name for the website as the base:
```js
export default defineConfig({
  plugins: [react()],
  base: "/first-clock-project"
})
```
5. open the package.json
6. add homepage path name:
```js
"homepage": "https://JoydebGIThub.github.io/first-clock-project/",
```
7. install the git hub pages package:
```js
npm install gh-pages
```
8. create 2 scripts:
```js
"predeploy":"npm run build",
"deploy": "gh-pages -d dist"
```
9. git init
10. git add .
11. put rest of the things in terminal and run:
```js
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:JoydebGIThub/first-clock-project.git
git push -u origin main
```
12. After push all the things run:
```js
npm run deploy
```