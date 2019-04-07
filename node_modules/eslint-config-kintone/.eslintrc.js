'use strict';
module.exports = {
    extends: ['./index.js'],
    rules: {
        // strict: ["error", "function"] is useful only in browser environments so we disable it for the repository
        strict: ["error", "global"]
    }
}