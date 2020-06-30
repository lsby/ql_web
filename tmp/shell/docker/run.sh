work_path=$(dirname $(readlink -f $0))

echo '设置源'
bash ${work_path}/setMirror.sh

# echo '安装依赖'
# apt-get update -y
# apt-get install libaio1 -y

echo '安装npm依赖'
npm i

echo '设置npm'
npm run pm2_setlog
npm run web_build
npm run service_build
