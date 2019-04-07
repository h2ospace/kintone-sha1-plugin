'use strict';

const assert = require('assert');
const path = require('path');
const CLIEngine = require('eslint').CLIEngine;

describe('index', () => {
    let cli;
    beforeEach(() => {
        cli = new CLIEngine({
            useEslintrc: false,
            configFile: path.resolve(__dirname, '..', 'index.js')
        });
    });
    describe('fixtures', () => {
        context('ok.js', () => {
            it('should pass without any errors', () => {
                const target = path.resolve(__dirname, 'fixtures', 'ok.js');
                const report = cli.executeOnFiles([target]);
                assert.equal(report.errorCount, 0);
            });
        });
        context('error.js', () => {
            it('should pass without any errors', () => {
                const target = path.resolve(__dirname, 'fixtures', 'error.js');
                const report = cli.executeOnFiles([target]);
                assert.equal(report.errorCount, 2);
                assert.deepStrictEqual(
                    report.results[0].messages.map(message => message.ruleId),
                    ['no-undef', 'no-else-return']
                );
            });
        });
    });
});
