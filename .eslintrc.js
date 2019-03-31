module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended", "google"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "require": false,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "require-jsdoc": 0,
        "max-len": [1, 120, 2],
        'arrow-parens': ['error', 'as-needed'],
    }
};