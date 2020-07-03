work_path=$(dirname $(readlink -f $0))
npm run web_build
npm run service_build
npm run pm2_start
npm run pm2_log
