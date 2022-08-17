"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owned = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Owned_json_1 = __importDefault(require("./Owned.json"));
class Owned extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Owned_json_1.default.abi, Owned_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    parseOwnershipTransferRequestedEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferRequested").map(e => this.decodeOwnershipTransferRequestedEvent(e));
    }
    decodeOwnershipTransferRequestedEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    assign() {
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let acceptOwnership_send = async () => {
            let result = await this.send('acceptOwnership');
            return result;
        };
        let acceptOwnership_call = async () => {
            let result = await this.call('acceptOwnership');
            return;
        };
        this.acceptOwnership = Object.assign(acceptOwnership_send, {
            call: acceptOwnership_call
        });
        let transferOwnership_send = async (to) => {
            let result = await this.send('transferOwnership', [to]);
            return result;
        };
        let transferOwnership_call = async (to) => {
            let result = await this.call('transferOwnership', [to]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
    }
}
exports.Owned = Owned;
