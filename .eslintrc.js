module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "@zbinlin/eslint-config/javascript",
        "@zbinlin/eslint-config/typescript",
    ],
    overrides: [
        {
            files: ["src/**/*.ts", "src/**/*.tsx"],
            settings: {
                "import/resolver": {
                    typescript: {
                        project: "src/tsconfig.json",
                    },
                },
            },
            env: {
                serviceworker: true,
            },
        },
        {
            files: [
                "tests/**/*.ts", "tests/**/*.tsx",
            ],
            settings: {
                "import/resolver": {
                    typescript: {
                        project: "tests/tsconfig.json",
                    },
                },
            },
            env: {
                jest: true,
            },
        },
    ],
};
