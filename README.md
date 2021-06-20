# Project setup

Create a Typescript Node.js based project.

1. To build, type "__npm run dev__".
1. To run in dev watch mode, type "__npm run watch__".

Create Project folder, initialize Typescript and NPM configurations.

```sh
mkdir ts-node
cd ts-node
touch main.ts README.md
npm init -y
npx tsc --init
```

Install NPM modules

```sh
npm i rxjs
npm i -D typescript nodemon
npm i -D @types/node
```

## package.json

Update "__main__" with "main.js"

Add the following under "__scripts__".

```json
    "dev": "tsc -p tsconfig.json -w",
    "watch": "nodemon build/main.js",
```

## tsconfig.json

Add file to include and exclude before "__compilerOptions__".

```json
  "exclude": [
    "bin/**/*",
    "build/**/*",
    "dist/**/*",
    "docs/**/*",
    "log/*",
    "node_modules/**/*",
    "test/**/*"
  ],
  "include": [
    "src/**/*"
  ],
```

Update "__lib__" with:

```json
    "lib": [                                  /* Specify library files to be included in the compilation. */
      "es2018",
      "es2017",
      "dom",
      "es5",
      "es6",
      "es2015.core",
      "es2015.collection",
      "es2015.generator",
      "es2015.iterable",
      "es2015.promise",
      "es2015.proxy",
      "es2015.reflect",
      "es2015.symbol",
      "es2015.symbol.wellknown",
      "esnext.asynciterable"
    ],
```

Uncomment and update "__outDir__", this controls the build output.

```json
    "outDir": "./build",                      /* Redirect output structure to the directory. */
```
