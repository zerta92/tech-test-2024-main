"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CommsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsModule = void 0;
const common_1 = require("@nestjs/common");
const comms_service_1 = require("./comms.service");
let CommsModule = CommsModule_1 = class CommsModule {
    static register() {
        return {
            module: CommsModule_1,
            providers: [comms_service_1.CommsService],
            exports: [comms_service_1.CommsService],
        };
    }
};
exports.CommsModule = CommsModule;
exports.CommsModule = CommsModule = CommsModule_1 = __decorate([
    (0, common_1.Module)({})
], CommsModule);
//# sourceMappingURL=comms.module.js.map