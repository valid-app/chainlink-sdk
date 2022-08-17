"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EACAggregatorProxy = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const EACAggregatorProxy_json_1 = __importDefault(require("./EACAggregatorProxy.json"));
class EACAggregatorProxy extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, EACAggregatorProxy_json_1.default.abi, EACAggregatorProxy_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.aggregator, params.accessController]);
    }
    parseAnswerUpdatedEvent(receipt) {
        return this.parseEvents(receipt, "AnswerUpdated").map(e => this.decodeAnswerUpdatedEvent(e));
    }
    decodeAnswerUpdatedEvent(event) {
        let result = event.data;
        return {
            current: new eth_wallet_1.BigNumber(result.current),
            roundId: new eth_wallet_1.BigNumber(result.roundId),
            updatedAt: new eth_wallet_1.BigNumber(result.updatedAt),
            _event: event
        };
    }
    parseNewRoundEvent(receipt) {
        return this.parseEvents(receipt, "NewRound").map(e => this.decodeNewRoundEvent(e));
    }
    decodeNewRoundEvent(event) {
        let result = event.data;
        return {
            roundId: new eth_wallet_1.BigNumber(result.roundId),
            startedBy: result.startedBy,
            startedAt: new eth_wallet_1.BigNumber(result.startedAt),
            _event: event
        };
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
        let accessController_call = async () => {
            let result = await this.call('accessController');
            return result;
        };
        this.accessController = accessController_call;
        let aggregator_call = async () => {
            let result = await this.call('aggregator');
            return result;
        };
        this.aggregator = aggregator_call;
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let description_call = async () => {
            let result = await this.call('description');
            return result;
        };
        this.description = description_call;
        let getAnswer_call = async (roundId) => {
            let result = await this.call('getAnswer', [eth_wallet_1.Utils.toString(roundId)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAnswer = getAnswer_call;
        let getRoundData_call = async (roundId) => {
            let result = await this.call('getRoundData', [eth_wallet_1.Utils.toString(roundId)]);
            return {
                roundId: new eth_wallet_1.BigNumber(result.roundId),
                answer: new eth_wallet_1.BigNumber(result.answer),
                startedAt: new eth_wallet_1.BigNumber(result.startedAt),
                updatedAt: new eth_wallet_1.BigNumber(result.updatedAt),
                answeredInRound: new eth_wallet_1.BigNumber(result.answeredInRound)
            };
        };
        this.getRoundData = getRoundData_call;
        let getTimestamp_call = async (roundId) => {
            let result = await this.call('getTimestamp', [eth_wallet_1.Utils.toString(roundId)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.getTimestamp = getTimestamp_call;
        let latestAnswer_call = async () => {
            let result = await this.call('latestAnswer');
            return new eth_wallet_1.BigNumber(result);
        };
        this.latestAnswer = latestAnswer_call;
        let latestRound_call = async () => {
            let result = await this.call('latestRound');
            return new eth_wallet_1.BigNumber(result);
        };
        this.latestRound = latestRound_call;
        let latestRoundData_call = async () => {
            let result = await this.call('latestRoundData');
            return {
                roundId: new eth_wallet_1.BigNumber(result.roundId),
                answer: new eth_wallet_1.BigNumber(result.answer),
                startedAt: new eth_wallet_1.BigNumber(result.startedAt),
                updatedAt: new eth_wallet_1.BigNumber(result.updatedAt),
                answeredInRound: new eth_wallet_1.BigNumber(result.answeredInRound)
            };
        };
        this.latestRoundData = latestRoundData_call;
        let latestTimestamp_call = async () => {
            let result = await this.call('latestTimestamp');
            return new eth_wallet_1.BigNumber(result);
        };
        this.latestTimestamp = latestTimestamp_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let phaseAggregators_call = async (param1) => {
            let result = await this.call('phaseAggregators', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.phaseAggregators = phaseAggregators_call;
        let phaseId_call = async () => {
            let result = await this.call('phaseId');
            return new eth_wallet_1.BigNumber(result);
        };
        this.phaseId = phaseId_call;
        let proposedAggregator_call = async () => {
            let result = await this.call('proposedAggregator');
            return result;
        };
        this.proposedAggregator = proposedAggregator_call;
        let proposedGetRoundData_call = async (roundId) => {
            let result = await this.call('proposedGetRoundData', [eth_wallet_1.Utils.toString(roundId)]);
            return {
                roundId: new eth_wallet_1.BigNumber(result.roundId),
                answer: new eth_wallet_1.BigNumber(result.answer),
                startedAt: new eth_wallet_1.BigNumber(result.startedAt),
                updatedAt: new eth_wallet_1.BigNumber(result.updatedAt),
                answeredInRound: new eth_wallet_1.BigNumber(result.answeredInRound)
            };
        };
        this.proposedGetRoundData = proposedGetRoundData_call;
        let proposedLatestRoundData_call = async () => {
            let result = await this.call('proposedLatestRoundData');
            return {
                roundId: new eth_wallet_1.BigNumber(result.roundId),
                answer: new eth_wallet_1.BigNumber(result.answer),
                startedAt: new eth_wallet_1.BigNumber(result.startedAt),
                updatedAt: new eth_wallet_1.BigNumber(result.updatedAt),
                answeredInRound: new eth_wallet_1.BigNumber(result.answeredInRound)
            };
        };
        this.proposedLatestRoundData = proposedLatestRoundData_call;
        let version_call = async () => {
            let result = await this.call('version');
            return new eth_wallet_1.BigNumber(result);
        };
        this.version = version_call;
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
        let confirmAggregator_send = async (aggregator) => {
            let result = await this.send('confirmAggregator', [aggregator]);
            return result;
        };
        let confirmAggregator_call = async (aggregator) => {
            let result = await this.call('confirmAggregator', [aggregator]);
            return;
        };
        this.confirmAggregator = Object.assign(confirmAggregator_send, {
            call: confirmAggregator_call
        });
        let proposeAggregator_send = async (aggregator) => {
            let result = await this.send('proposeAggregator', [aggregator]);
            return result;
        };
        let proposeAggregator_call = async (aggregator) => {
            let result = await this.call('proposeAggregator', [aggregator]);
            return;
        };
        this.proposeAggregator = Object.assign(proposeAggregator_send, {
            call: proposeAggregator_call
        });
        let setController_send = async (accessController) => {
            let result = await this.send('setController', [accessController]);
            return result;
        };
        let setController_call = async (accessController) => {
            let result = await this.call('setController', [accessController]);
            return;
        };
        this.setController = Object.assign(setController_send, {
            call: setController_call
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
exports.EACAggregatorProxy = EACAggregatorProxy;
