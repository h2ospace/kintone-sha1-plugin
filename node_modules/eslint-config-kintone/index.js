module.exports = {
    "env": {
        "browser": true,
        "commonjs": false,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "$": false,
        "jQuery": false,
        "kintone": false,
        "moment": false,
        "Handsontable": false,
        "hljs": false,
        "marked": false,
        "sweetAlert": false,
        "swal": false,
        "Chart": false,
        "DOMPurify": false,
        "Spinner": false,
        "UltraDate": false
    },
    "rules": {
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-spaced-func": "error",
        "no-shadow-restricted-names": "error",
        "no-trailing-spaces": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "error",
        "no-unused-vars": [
            "error",
            {"vars": "all", "args": "none"}
        ],
        "no-use-before-define": "error",
        "no-useless-call": "error",
        "no-with": "error",

        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "block-scoped-var": "error",
        "brace-style": [
            "error",
            "1tbs",
            {"allowSingleLine": true}
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "comma-spacing": "error",
        "complexity": [
            "error",
            30
        ],
        "curly": [
            "error",
            "all"
        ],
        "eol-last": "error",
        "eqeqeq": "error",
        "for-direction": "error",
        "getter-return": "error",
        "indent": [
            "error",
            4,
            {"SwitchCase": 1}
        ],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "max-depth": [
            "error",
            5
        ],
        "max-len": [
            "error",
            120
        ],
        "max-nested-callbacks": [
            "error",
            5
        ],
        "max-params": [
            "error",
            7
        ],
        "max-statements": [
            "error",
            50
        ],
        "new-cap": "error",
        "new-parens": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "radix": "error",
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "strict": [
            "error",
            "function"
        ],
        "switch-colon-spacing": "error",
        "wrap-iife": [
            "error",
            "any"
        ],
        "yoda": "error"
    }
};
