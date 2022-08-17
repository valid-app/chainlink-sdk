import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class AggregatorProxy extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(aggregator: string): Promise<string>;
    parseAnswerUpdatedEvent(receipt: TransactionReceipt): AggregatorProxy.AnswerUpdatedEvent[];
    decodeAnswerUpdatedEvent(event: Event): AggregatorProxy.AnswerUpdatedEvent;
    parseNewRoundEvent(receipt: TransactionReceipt): AggregatorProxy.NewRoundEvent[];
    decodeNewRoundEvent(event: Event): AggregatorProxy.NewRoundEvent;
    parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): AggregatorProxy.OwnershipTransferRequestedEvent[];
    decodeOwnershipTransferRequestedEvent(event: Event): AggregatorProxy.OwnershipTransferRequestedEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): AggregatorProxy.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): AggregatorProxy.OwnershipTransferredEvent;
    acceptOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    aggregator: {
        (): Promise<string>;
    };
    confirmAggregator: {
        (aggregator: string): Promise<TransactionReceipt>;
        call: (aggregator: string) => Promise<void>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    description: {
        (): Promise<string>;
    };
    getAnswer: {
        (roundId: number | BigNumber): Promise<BigNumber>;
    };
    getRoundData: {
        (roundId: number | BigNumber): Promise<{
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
    };
    getTimestamp: {
        (roundId: number | BigNumber): Promise<BigNumber>;
    };
    latestAnswer: {
        (): Promise<BigNumber>;
    };
    latestRound: {
        (): Promise<BigNumber>;
    };
    latestRoundData: {
        (): Promise<{
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
    };
    latestTimestamp: {
        (): Promise<BigNumber>;
    };
    owner: {
        (): Promise<string>;
    };
    phaseAggregators: {
        (param1: number | BigNumber): Promise<string>;
    };
    phaseId: {
        (): Promise<BigNumber>;
    };
    proposeAggregator: {
        (aggregator: string): Promise<TransactionReceipt>;
        call: (aggregator: string) => Promise<void>;
    };
    proposedAggregator: {
        (): Promise<string>;
    };
    proposedGetRoundData: {
        (roundId: number | BigNumber): Promise<{
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
    };
    proposedLatestRoundData: {
        (): Promise<{
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
    };
    transferOwnership: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<void>;
    };
    version: {
        (): Promise<BigNumber>;
    };
    private assign;
}
export declare module AggregatorProxy {
    interface AnswerUpdatedEvent {
        current: BigNumber;
        roundId: BigNumber;
        updatedAt: BigNumber;
        _event: Event;
    }
    interface NewRoundEvent {
        roundId: BigNumber;
        startedBy: string;
        startedAt: BigNumber;
        _event: Event;
    }
    interface OwnershipTransferRequestedEvent {
        from: string;
        to: string;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        from: string;
        to: string;
        _event: Event;
    }
}
