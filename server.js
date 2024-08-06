var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
import { Client, StorageLocalStorage } from "@mtkruto/node";
const apiID = 29033643;
const apiHash = "a8cc5f16eddd5e0083b2534ecd31123c";
const Storage = new StorageLocalStorage('mtkruto');
const client = new Client({
    storage: Storage,
    apiId: apiID,
    apiHash: apiHash,
});
const tokem = '6944039755:AAFEynYXqTXqLbMUHibDSHC8YabAhIqtbvw'; // '7151123341:AAFSjlITivymVeT3l0OUojA4uqnt47kcel';
function hello() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.start({ botToken: tokem });
        console.log(yield client.getMe());
        client.on('message:document', (ctx) => __awaiter(this, void 0, void 0, function* () {
            var _a, e_1, _b, _c;
            const fileId = ctx.message.document.fileId;
            console.log('before downloading');
            try {
                for (var _d = true, _e = __asyncValues(client.download(fileId, {
                    offset: 0,
                    chunkSize: 256 * 1024
                })), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
                    _c = _f.value;
                    _d = false;
                    let chunks = _c;
                    console.log('chunk is ', chunks);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log('after downloading');
        }));
    });
}
hello();
