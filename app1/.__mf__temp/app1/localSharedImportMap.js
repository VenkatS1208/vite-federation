
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/app1__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "react/jsx-dev-runtime": async () => {
          let pkg = await import("__mf__virtual/app1__prebuild__react_mf_1_jsx_mf_2_dev_mf_2_runtime__prebuild__.js")
          return pkg
        }
      ,
        "react/jsx-runtime": async () => {
          let pkg = await import("__mf__virtual/app1__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "18.2.0",
            scope: ["default"],
            loaded: false,
            from: "app1",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^18.2.0"
            }
          }
        ,
          "react/jsx-dev-runtime": {
            name: "react/jsx-dev-runtime",
            version: "18.2.0",
            scope: ["default"],
            loaded: false,
            from: "app1",
            async get () {
              usedShared["react/jsx-dev-runtime"].loaded = true
              const {"react/jsx-dev-runtime": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^18.2.0"
            }
          }
        ,
          "react/jsx-runtime": {
            name: "react/jsx-runtime",
            version: "18.2.0",
            scope: ["default"],
            loaded: false,
            from: "app1",
            async get () {
              usedShared["react/jsx-runtime"].loaded = true
              const {"react/jsx-runtime": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^18.2.0"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      