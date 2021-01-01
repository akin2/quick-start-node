const { expect: chaiExpect } = require('chai');
require('dotenv').config();
const constants = require('../constants');

describe('mocha chai', function () {
    it('should tell apart true & false', function () {
        chaiExpect(true).to.eql(true);
        chaiExpect(true).to.not.eql(false);
        chaiExpect(false).to.eql(false);
        chaiExpect(false).to.not.eql(true);
    });
});

describe('environment variables & constants', function () {
    it('should load correctly', function () {
        chaiExpect(constants.DOTENV_TEST_VAR).to.not.be.null;
        chaiExpect(process.env.DOTENV_TEST_VAR).to.not.be.null;
        chaiExpect(constants.DOTENV_TEST_VAR).to.eql(process.env.DOTENV_TEST_VAR);
    });

});