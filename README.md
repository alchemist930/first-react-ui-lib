
npm init
npm install --save-dev react react
 # create src/component/ folder...

npm sb init
 # to run story book type:
npm run storybook
npm install rollup rollup-plugin-babel @rollup/plugin-node-resolve rollup-plugin-peer-deps-external --save-dev
npm install --save-dev @babel/preset-react

# create rollup.config.js
# add to package.json scripts {"build-lib": "rollup -c"}
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook",
    "build-lib": "rollup -c" // add this
  },


npm install --save-dev rollup-plugin-postcss
 # add to rollup.config.js
 # install rollup-plugin-terser

npm install --save-dev rollup-plugin-terser

 # run build-lib

npm run build-lib

# upload to npm change package.json
 "name": "arneil-reactui", // name is unique
  "version": "1.0.0",
  "description": "this is my react UI library",
  "main": "dist/index.js", // the source minified js
  "module": "dist/index.es.js", // the source module js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook",
    "build-lib": "rollup -c" // build lib to dist folder
  },

  # login to npm
   npm login
   # input username and password
   # email add
   npm publish
   # done
   =======================
   # upload to github.com
   download and install git bash
   create new repository in your github account
   in terminal
   initialize the local directory as a Git repository
   run:
    git init
    add key generate key
 ssh-keygen -o
    locate and add to github settings add ssh
    set user.email and user.name // git config --global user.name "FIRST_NAME LAST_NAME"
    git status
    git remote -v
    git add -A //.gitignore , set folder exclude to git upload
    git commit -m " description... "
    git remote add origin the_address.git
    git push -u origin main
