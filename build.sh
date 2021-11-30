#!/bin/bash

set -ex

git pull
npm install
npm run build
