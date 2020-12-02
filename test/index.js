const log = require('./../index');
let chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon');

chai.use(sinonChai);
const MSG = 'Hello, I am testing the package';

describe('Test de las funciones', () => {

    beforeEach(() => {
        sinon.spy(console, 'log');
    });

    afterEach(() => {
        console.log.restore();
        //delete console.log;
    });

    it('Función ok', () => {
        log.ok(MSG);
        expect(console.log).to.be.called;
    });

    it('Función info', () => {
        log.info(MSG);
        expect(console.log).to.be.called;
    });

    it('Función error', () => {
        log.error(MSG);
        expect(console.log).to.be.called;
    });

    it('Función warning', () => {
        log.warning(MSG);
        expect(console.log).to.be.called;
    });

    it('No llama al console log', () => {
        log.ok(MSG);
        expect(console.log).to.not.be.called;
    });
});
