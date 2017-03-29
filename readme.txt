-Modules need to be installed(This file should be used when the project is getting developed in different machines at the same time to avoid problems)
-Modules installation depend on course flow given at: https://www.coursera.org/specializations/full-stack

1) NodeJS and NPM installation
Go to https://nodejs.org/en/ and depending on your OS, download the NodeJS.
For Ubuntu, insttrustions are given at: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

/** Run each of below commands inside the project**/

2)Installing the lessc Compiler
sudo npm install -g less

3) Installing Bower and Bower components
sudo npm install -g bower
bower install bootstrap -S (For Bootstrap)
bower install font-awesome -S (For Font Awesome)

4) Installing Grunt
sudo npm install -g grunt-cli
sudo npm install grunt --save-dev

5) Installing the various tasks related to Grunt
npm install grunt-contrib-jshint --save-dev
npm install jshint-stylish --save-dev
npm install time-grunt --save-dev
npm install jit-grunt --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-filerev --save-dev
npm install grunt-usemin --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-connect --save-dev

6) Installing Gulp
sudo npm install -g gulp
sudo npm install gulp --save-dev

7) Installing the various tasks related to Gulp
sudo npm install jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev
npm install gulp-ng-annotate --save-dev

8) Install ngRoute in project
bower install angular-route -S

9) Install angular-ui-router in project
bower install angular-ui-router -S

10) Setting up server using json-server
https://www.coursera.org/learn/angular-js/supplement/ttSa6/exercise-instructions-setting-up-a-server-using-json-server
-Installing json-server
sudo npm install json-server -g
-Configuring Server folder
At any convenient location on your computer, create a new folder named json-server, and move to this folder.
Download the db.json file provided above to this folder.

11) Installing ngResource module inside project
bower install angular-resource -S