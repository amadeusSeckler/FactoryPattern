import { Identifier } from "./identifier";

export class SKUIdentifier implements Identifier { 
    type: string = 'SKU';
    value: string = '';
    
    constructor(value: string) {
        this.value = value;
    }

    getType(): string {
        return this.type;
    }
    getValue(): string {
        return this.value
    }

    toString(): string {
        return `${this.type}:${this.value}`
    }
}