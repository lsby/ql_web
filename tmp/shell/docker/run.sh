work_path=$(dirname $(readlink -f $0))

echo '设置源'
bash ${work_path}/setMirror.sh

# echo '安装依赖'
# apt-get update -y
# apt-get install libaio1 -y

echo '安装npm依赖'
# npm install -g cnpm --registry=https://registry.npm.taobao.org
# cnpm i
npm i

echo '设置日志'
npm run pm2_setlog
