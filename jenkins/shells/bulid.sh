#!/bin/bash
node -v 
npm -v 
# npm install -g yarn -registry=https://registry.npm.taobao.org 
yarn -v
# yarn install --pure-lockfile 
yarn build
rm -rf dist.tar     # 每次构建删除已存在的dist压缩包
tar -zcvf dist.tar ./dist  #将dist文件压缩成dist.tar