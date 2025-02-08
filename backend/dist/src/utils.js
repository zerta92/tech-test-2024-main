"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePrice = void 0;
const prices = {
    A: 55.5,
    B: 59.5,
    C: 62.75,
    D: 66,
    E: 69.0,
    F: 71.25,
};
const calculatePrice = (cats) => {
    return cats?.reduce((sum, cat) => {
        return sum + (prices[cat.pouchSize] || 0);
    }, 0);
};
exports.calculatePrice = calculatePrice;
//# sourceMappingURL=utils.js.map