"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./infrastructure/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
// bodyがundefinedにならないように
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Route設定
app.use("/api", router_1.default);
app.listen(3000, () => {
    console.log("listening on port 3000");
});
exports.default = app;
//# sourceMappingURL=main.js.map