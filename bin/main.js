#!/usr/bin/env node
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var spawnSync = require("child_process").spawnSync;
var args = process.argv.slice(2);
var command = args.shift();
switch (command) {
    case 'b':
        console.log('build');
        break;
    case 'eject':
        console.log('eject');
        break;
    case 'new':
        if (args.length > 0) {
            spawnSync('vue', ['create', args[0]], { shell: true });
        }
        else {
            console.log(chalk_1.default.yellowBright('=> WARNING: Folder exist! Failed to create Project.\n'));
        }
        break;
    case 'g':
        console.log('generate');
        break;
    case 's':
        console.log('serve');
        break;
    case 'upgrade':
        console.log('upgrade');
        break;
    case 'v':
        console.log('version');
        break;
    default:
        showUsage();
}
function showUsage() {
    console.log(chalk_1.default.greenBright("\nThe missing Vue.js CLI for TypeScript \uD83D\uDE0D (v1.9.1)\n\nUsage: vu <command> [options]\n\nCMD\tOptions\t\t\tDescription\n===\t=======\t\t\t===========\nnew\t<name>\t\t\tCreate Vue.js Project\nb\t\t\t\tProduction build\ng\tc <name>\t\tGenerate Component under \"components\" folder\ng\tv <name>\t\tGenerate Component under \"views\" folder\ng\t<folder> <name>\t\tGenerate Component under declared folder\ns\t\t\t\tRun development Server\nv\t\t\t\tShow version\n\neject\t\t\t\tEject code generation Templates\nupgrade\t\t\t\tUpgrade vu script\n\n"));
}
//# sourceMappingURL=../src/main.js.map