"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsService = void 0;
const common_1 = require("@nestjs/common");
const data_json_1 = __importDefault(require("../../data.json"));
const utils_1 = require("./utils");
let CommsService = class CommsService {
    async getNexDelivery(userId) {
        const [scheduledDeliveries] = data_json_1.default?.filter((delivery) => delivery.id === userId);
        if (!scheduledDeliveries) {
            return { error: 'No delivery found for that user' };
        }
        return (0, utils_1.parseMessage)(scheduledDeliveries);
    }
};
exports.CommsService = CommsService;
exports.CommsService = CommsService = __decorate([
    (0, common_1.Injectable)()
], CommsService);
//# sourceMappingURL=comms.service.js.map