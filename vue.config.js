const path = require('path');
module.exports = {
    devServer:{
        proxy:{
            "/server":{
                target:"https://m.228.cn",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.resolve(__dirname,"./src"),
                "@api":path.resolve(__dirname,"./src/api"),
                "@common":path.resolve(__dirname,"./src/common"),
                "@components":path.resolve(__dirname,"./src/components"),
                "@utils":path.resolve(__dirname,"./src/utils"),
                "@views":path.resolve(__dirname,"./src/views")
            }
        }
    }
}