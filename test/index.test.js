const { expect:chaiExpect } = require('chai');
const { helloWorld } = require('../src/index');
const constants = require('../constants');

describe('helloWorld()', function () {
    it('should eql constants.HELLO_WORLD', function () {
        chaiExpect(helloWorld()).to.eql(constants.HELLO_WORLD);
    });
});