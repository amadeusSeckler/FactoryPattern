import { EANIdentifier } from "./ean";
import { Identifier } from "./identifier";
import { SKUIdentifier } from "./sku";

export enum IdentifiersCode {
    EAN = 'EAN',
    SKU = 'SKU'
}

export class IdentifierFactory { 
    static createIdentifier(idType: string, value: string): Identifier {
        const formatedIdType = idType.toLocaleUpperCase()

        switch (formatedIdType) {
            case IdentifiersCode.EAN:
                return new EANIdentifier(value);
            case IdentifiersCode.SKU:
                return new SKUIdentifier(value);
            default:
                throw new Error('Unknown identifier type');
        }
    }
}
