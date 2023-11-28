# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 读取package.json中的version
version='0.1.1'

# 打包构建
npm run build

npm run push

# 发布到npm，npm(高性能的npm)
npm publish

# 升级 vue-super-ui 依赖版本
npm up vue-super-ui@$version

# 提交版本更新代码到github
git add .
git commit -m "update $version"
git push
