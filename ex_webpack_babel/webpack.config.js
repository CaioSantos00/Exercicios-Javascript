module.exports={
    entry:{
        main:'./src/index.js'
    },
    mode: 'production',
    module:{
    rules: [{
        test: /\.css$/,
        use: ['style-loader','css-loader']
    }, {
        test:/\.js/,
        use:['babel-loader']       
    }],
    output:{
        filename: '[name].min.js'
    }
    
},
/*module:{
    rules:[{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
         loader:'babel-loader',
         options:{
            presets:['@babel/present-env']
         }
        }
    }]
}*/
}