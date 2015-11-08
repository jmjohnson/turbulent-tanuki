#!/bin/bash

sudo apt-get install nodejs-legacy npm

cd "$(dirname "${BASH_SOURCE[0]}")"

npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher --save-dev
