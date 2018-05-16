// exports.modifyWebpackConfig = ({config, stage}, options) => {
//     options.sourceMap = true;
  
//     const sassFiles = /\.s[ac]ss$/;
//     const sassModulesFiles = /\.module\.s[ac]ss$/;
//     const sassLoader = `sass?${JSON.stringify(options)}`;
  
//     switch (stage) {
//         case 'develop': {
//             config.removeLoader('sass');
//             config.removeLoader('sassModules');
    
//             config.loader('sass', {
//             test: sassFiles,
//             exclude: sassModulesFiles,
//             loaders: ['style', 'css?sourceMap', sassLoader],
//             });
    
//             config.loader('sassModules', {
//             test: sassModulesFiles,
//             loaders: ['style', `${cssModulesConfig(stage)}&sourceMap=true`, sassLoader],
//             });
    
//             return config;
//         } 
//         default: {
//             return config;
//         }
//     }
// };