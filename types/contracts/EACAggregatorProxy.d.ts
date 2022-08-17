import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    aggregator: string;
    accessController: string;
}
export declare class EACAggregatorProxy extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAnswerUpdatedEvent(receipt: TransactionReceipt): EACAggregatorProxy.AnswerUpdatedEvent[];
    decodeAnswerUpdatedEvent(event: Event): EACAggregatorProxy.AnswerUpdatedEvent;
    parseNewRoundEvent(receipt: TransactionReceipt): EACAggregatorProxy.NewRoundEvent[];
    decodeNewRoundEvent(event: Event): EACAggregatorProxy.NewRoundEvent;
    parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): EACAggregatorProxy.OwnershipTransferRequestedEvent[];
    decodeOwnershipTransferRequestedEvent(event: Event): EACAggregatorProxy.OwnershipTransferRequestedEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): EACAggregatorProxy.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): EACAggregatorProxy.OwnershipTransferredEvent;
    acceptOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    accessController: {
        (): Promise<string>;
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
    setController: {
        (accessController: string): Promise<TransactionReceipt>;
        call: (accessController: string) => Promise<void>;
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
export declare module EACAggregatorProxy {
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
