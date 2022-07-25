"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
const constants_1 = require("./constants");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const readmeContents = yield fs.promises.readFile(constants_1.MustacheTemplateConstants.mainPath);
    const content = Mustache.render(readmeContents.toString(), {
        datetime: new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZoneName: 'short',
            timeZone: 'America/Toronto',
        }),
    });
    console.log('[INFO] Writing updated content to mustache to README.md ...');
    fs.writeFileSync('README.md', content);
}))();
