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
exports.knightPossibleDestinations = void 0;
function knightPossibleDestinations(x, y) {
    const directions = [];
    x - 2 > 0 && y - 1 > 0 ? directions.push([x - 2, y - 1]) : null;
    x - 2 > 0 && y + 1 < 9 ? directions.push([x - 2, y + 1]) : null;
    x + 2 < 9 && y - 1 > 0 ? directions.push([x + 2, y - 1]) : null;
    x + 2 < 9 && y + 1 < 8 ? directions.push([x + 2, y + 1]) : null;
    x - 1 > 0 && y - 2 > 0 ? directions.push([x - 1, y - 2]) : null;
    x - 1 > 0 && y + 2 < 9 ? directions.push([x - 1, y + 2]) : null;
    x + 1 < 9 && y - 2 > 0 ? directions.push([x + 1, y - 2]) : null;
    x + 1 < 9 && y + 2 < 9 ? directions.push([x + 1, y + 2]) : null;
    return directions;
}
exports.knightPossibleDestinations = knightPossibleDestinations;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield knightPossibleDestinations(1, 1);
        console.log("results-->", results);
    }
    catch (error) {
        console.log("error--->", error);
    }
}))();
