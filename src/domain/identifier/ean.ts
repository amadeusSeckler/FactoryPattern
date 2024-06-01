import { Identifier } from "./identifier";

export class EANIdentifier implements Identifier { 
    type: string = 'EAN';
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