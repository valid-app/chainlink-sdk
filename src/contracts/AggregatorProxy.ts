import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./AggregatorProxy.json";

export class AggregatorProxy extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(aggregator:string): Promise<string>{
        return this.__deploy([aggregator]);
    }
    parseAnswerUpdatedEvent(receipt: TransactionReceipt): AggregatorProxy.AnswerUpdatedEvent[]{
        return this.parseEvents(receipt, "AnswerUpdated").map(e=>this.decodeAnswerUpdatedEvent(e));
    }
    decodeAnswerUpdatedEvent(event: Event): AggregatorProxy.AnswerUpdatedEvent{
        let result = event.data;
        return {
            current: new BigNumber(result.current),
            roundId: new BigNumber(result.roundId),
            updatedAt: new BigNumber(result.updatedAt),
            _event: event
        };
    }
    parseNewRoundEvent(receipt: TransactionReceipt): AggregatorProxy.NewRoundEvent[]{
        return this.parseEvents(receipt, "NewRound").map(e=>this.decodeNewRoundEvent(e));
    }
    decodeNewRoundEvent(event: Event): AggregatorProxy.NewRoundEvent{
        let result = event.data;
        return {
            roundId: new BigNumber(result.roundId),
            startedBy: result.startedBy,
            startedAt: new BigNumber(result.startedAt),
            _event: event
        };
    }
    parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): AggregatorProxy.OwnershipTransferRequestedEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferRequested").map(e=>this.decodeOwnershipTransferRequestedEvent(e));
    }
    decodeOwnershipTransferRequestedEvent(event: Event): AggregatorProxy.OwnershipTransferRequestedEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): AggregatorProxy.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): AggregatorProxy.OwnershipTransferredEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    acceptOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    aggregator: {
        (): Promise<string>;
    }
    confirmAggregator: {
        (aggregator:string): Promise<TransactionReceipt>;
        call: (aggregator:string) => Promise<void>;
    }
    decimals: {
        (): Promise<BigNumber>;
    }
    description: {
        (): Promise<string>;
    }
    getAnswer: {
        (roundId:number|BigNumber): Promise<BigNumber>;
    }
    getRoundData: {
        (roundId:number|BigNumber): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    getTimestamp: {
        (roundId:number|BigNumber): Promise<BigNumber>;
    }
    latestAnswer: {
        (): Promise<BigNumber>;
    }
    latestRound: {
        (): Promise<BigNumber>;
    }
    latestRoundData: {
        (): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    latestTimestamp: {
        (): Promise<BigNumber>;
    }
    owner: {
        (): Promise<string>;
    }
    phaseAggregators: {
        (param1:number|BigNumber): Promise<string>;
    }
    phaseId: {
        (): Promise<BigNumber>;
    }
    proposeAggregator: {
        (aggregator:string): Promise<TransactionReceipt>;
        call: (aggregator:string) => Promise<void>;
    }
    proposedAggregator: {
        (): Promise<string>;
    }
    proposedGetRoundData: {
        (roundId:number|BigNumber): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    proposedLatestRoundData: {
        (): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    transferOwnership: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<void>;
    }
    version: {
        (): Promise<BigNumber>;
    }
    private assign(){
        let aggregator_call = async (): Promise<string> => {
            let result = await this.call('aggregator');
            return result;
        }
        this.aggregator = aggregator_call
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let description_call = async (): Promise<string> => {
            let result = await this.call('description');
            return result;
        }
        this.description = description_call
        let getAnswer_call = async (roundId:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('getAnswer',[Utils.toString(roundId)]);
            return new BigNumber(result);
        }
        this.getAnswer = getAnswer_call
        let getRoundData_call = async (roundId:number|BigNumber): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('getRoundData',[Utils.toString(roundId)]);
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.getRoundData = getRoundData_call
        let getTimestamp_call = async (roundId:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('getTimestamp',[Utils.toString(roundId)]);
            return new BigNumber(result);
        }
        this.getTimestamp = getTimestamp_call
        let latestAnswer_call = async (): Promise<BigNumber> => {
            let result = await this.call('latestAnswer');
            return new BigNumber(result);
        }
        this.latestAnswer = latestAnswer_call
        let latestRound_call = async (): Promise<BigNumber> => {
            let result = await this.call('latestRound');
            return new BigNumber(result);
        }
        this.latestRound = latestRound_call
        let latestRoundData_call = async (): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('latestRoundData');
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.latestRoundData = latestRoundData_call
        let latestTimestamp_call = async (): Promise<BigNumber> => {
            let result = await this.call('latestTimestamp');
            return new BigNumber(result);
        }
        this.latestTimestamp = latestTimestamp_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let phaseAggregators_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('phaseAggregators',[Utils.toString(param1)]);
            return result;
        }
        this.phaseAggregators = phaseAggregators_call
        let phaseId_call = async (): Promise<BigNumber> => {
            let result = await this.call('phaseId');
            return new BigNumber(result);
        }
        this.phaseId = phaseId_call
        let proposedAggregator_call = async (): Promise<string> => {
            let result = await this.call('proposedAggregator');
            return result;
        }
        this.proposedAggregator = proposedAggregator_call
        let proposedGetRoundData_call = async (roundId:number|BigNumber): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('proposedGetRoundData',[Utils.toString(roundId)]);
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.proposedGetRoundData = proposedGetRoundData_call
        let proposedLatestRoundData_call = async (): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('proposedLatestRoundData');
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.proposedLatestRoundData = proposedLatestRoundData_call
        let version_call = async (): Promise<BigNumber> => {
            let result = await this.call('version');
            return new BigNumber(result);
        }
        this.version = version_call
        let acceptOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('acceptOwnership');
            return result;
        }
        let acceptOwnership_call = async (): Promise<void> => {
            let result = await this.call('acceptOwnership');
            return;
        }
        this.acceptOwnership = Object.assign(acceptOwnership_send, {
            call:acceptOwnership_call
        });
        let confirmAggregator_send = async (aggregator:string): Promise<TransactionReceipt> => {
            let result = await this.send('confirmAggregator',[aggregator]);
            return result;
        }
        let confirmAggregator_call = async (aggregator:string): Promise<void> => {
            let result = await this.call('confirmAggregator',[aggregator]);
            return;
        }
        this.confirmAggregator = Object.assign(confirmAggregator_send, {
            call:confirmAggregator_call
        });
        let proposeAggregator_send = async (aggregator:string): Promise<TransactionReceipt> => {
            let result = await this.send('proposeAggregator',[aggregator]);
            return result;
        }
        let proposeAggregator_call = async (aggregator:string): Promise<void> => {
            let result = await this.call('proposeAggregator',[aggregator]);
            return;
        }
        this.proposeAggregator = Object.assign(proposeAggregator_send, {
            call:proposeAggregator_call
        });
        let transferOwnership_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[to]);
            return result;
        }
        let transferOwnership_call = async (to:string): Promise<void> => {
            let result = await this.call('transferOwnership',[to]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
    }
}
export module AggregatorProxy{
    export interface AnswerUpdatedEvent {current:BigNumber,roundId:BigNumber,updatedAt:BigNumber,_event:Event}
    export interface NewRoundEvent {roundId:BigNumber,startedBy:string,startedAt:BigNumber,_event:Event}
    export interface OwnershipTransferRequestedEvent {from:string,to:string,_event:Event}
    export interface OwnershipTransferredEvent {from:string,to:string,_event:Event}
}