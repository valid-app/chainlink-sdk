import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./Owned.json";

export class Owned extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): Owned.OwnershipTransferRequestedEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferRequested").map(e=>this.decodeOwnershipTransferRequestedEvent(e));
    }
    decodeOwnershipTransferRequestedEvent(event: Event): Owned.OwnershipTransferRequestedEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): Owned.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): Owned.OwnershipTransferredEvent{
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
    owner: {
        (): Promise<string>;
    }
    transferOwnership: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<void>;
    }
    private assign(){
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
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
export module Owned{
    export interface OwnershipTransferRequestedEvent {from:string,to:string,_event:Event}
    export interface OwnershipTransferredEvent {from:string,to:string,_event:Event}
}