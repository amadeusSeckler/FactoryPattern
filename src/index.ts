import { IdentifierFactory } from "./domain/identifier/identifier-factory"

const test = () => {
    const apple = IdentifierFactory.createIdentifier('EAN', '111')
    const banana = IdentifierFactory.createIdentifier('EAN', '222')
    const potato = IdentifierFactory.createIdentifier('SKU', '333')
    console.log(potato.toString())
    console.log(banana.toString())
    console.log(apple.toString())
}

test()