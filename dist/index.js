"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const contactRoute_1 = require("./routes/contactRoute");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//   res.send("<h2>It is working</h2>");
// });
app.use(express_1.default.json());
app.use("/api/v1", index_1.router);
app.use("/api/v1/contact", contactRoute_1.router);
console.log("Hello index.js");
app.listen(PORT, () => {
    console.log("API is listening to PORT: ", PORT);
});
//# sourceMappingURL=index.js.map