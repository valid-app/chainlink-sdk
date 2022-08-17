import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-wallet";
export declare class Owned extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): Owned.OwnershipTransferRequestedEvent[];
    decodeOwnershipTransferRequestedEvent(event: Event): Owned.OwnershipTransferRequestedEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): Owned.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): Owned.OwnershipTransferredEvent;
    acceptOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    owner: {
        (): Promise<string>;
    };
    transferOwnership: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<void>;
    };
    private assign;
}
export declare module Owned {
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
