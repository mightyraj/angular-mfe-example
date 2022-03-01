const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
// const environment = require("./src/environments/environment");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ["sh-lib"]);

module.exports = {
  output: {
    uniqueName: "host",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: {
        type: "module"
      },

      // For remotes (please adjust)
      // name: "host",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './projects/host/src/app/app.component.ts',
      // },        

      // For hosts (please adjust)
      remotes: {
        // "mfe1": environment.environment.mfe.mfe1Url,
        // "mfe2": environment.environment.mfe.mfe2Url,
        mfe1: "mfe1@http://localhost:4201/mfe1remoteEntry.js",
        mfe2: "mfe2@http://localhost:4202/mfe2remoteEntry.js"
      },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
