#!/usr/bin/env node
'use strict';
import chalk from 'chalk';
// import sh from 'shelljs';

const { spawnSync } = require( "child_process" );

// import * as fs from 'fs';

// const config_file = process.env.HOME + '/.vurc';

// let config: any = { project: {} };

// if ( fs.existsSync( config_file ) ) {
//   config = JSON.parse( fs.readFileSync( config_file, 'utf8' ) );
// }

const args = process.argv.slice( 2 );
const command = args.shift();

switch ( command ) {
  case 'b':
    console.log( 'build' );
    break;

  case 'eject':
    console.log( 'eject' );
    break;

  case 'new':

    if ( args.length > 0 ) {
      spawnSync( 'vue', [ 'create', args[ 0 ] ], { shell: true } );
      //   if ( error ) {
      //     console.log( `error: ${ error.message }` );
      //     return;
      //   }
      //   if ( stderr ) {
      //     console.log( `stderr: ${ stderr }` );
      //     return;
      //   }
      //   console.log( `stdout: ${ stdout }` );
      // } );
      // sh.exec( `vue create ${ args[ 0 ] }`, { async: true } );
    } else {
      console.log( chalk.yellowBright( '=> WARNING: Folder exist! Failed to create Project.\n' ) );
    }
    break;

  case 'g':
    console.log( 'generate' );
    break;

  case 's':
    console.log( 'serve' );
    break;

  case 'upgrade':
    console.log( 'upgrade' );
    break;

  case 'v':
    console.log( 'version' );
    break;

  default:
    showUsage();
}

function showUsage(): void {
  console.log(
    chalk.greenBright( `
The missing Vue.js CLI for TypeScript 😍 (v1.9.1)\n
Usage: vu <command> [options]\n
CMD\tOptions\t\t\tDescription
===\t=======\t\t\t===========
new\t<name>\t\t\tCreate Vue.js Project
b\t\t\t\tProduction build
g\tc <name>\t\tGenerate Component under \"components\" folder
g\tv <name>\t\tGenerate Component under \"views\" folder
g\t<folder> <name>\t\tGenerate Component under declared folder
s\t\t\t\tRun development Server
v\t\t\t\tShow version\n
eject\t\t\t\tEject code generation Templates
upgrade\t\t\t\tUpgrade vu script\n\n`)
  );
}
