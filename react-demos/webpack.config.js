var path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'react study',
            template:path.resolve(__dirname,'./src/index.html')
        })
    ]
}