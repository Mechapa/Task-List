import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import stylistic from "@stylistic/eslint-plugin";
import stylisticJs from "@stylistic/eslint-plugin-js";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react": react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@stylistic": stylistic,
      "@stylistic/js": stylisticJs
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/js/quotes":["error", "double"],
      "no-multi-spaces": ["warn"],
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
      "max-len": ["error", {
        "code": 120,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }],
      "react/jsx-closing-bracket-location": [
        "error",
        "line-aligned"
      ],
      "indent": ["warn", 2],
      "react/jsx-boolean-value": ["warn", "never"],
      "react/jsx-curly-newline": [
        "warn",
        {
          "multiline": "consistent",
          "singleline": "consistent"
        }
      ],
      "react/jsx-curly-spacing": [
        "warn",
        {
          "when": "never",
          "children": {
            "when": "never"
          }
        }
      ],
      "react/jsx-equals-spacing": ["warn", "never"],
      "react/jsx-first-prop-new-line": ["warn", "multiline"],
      "react/jsx-max-props-per-line": [
        "warn",
        {
          "maximum": 1,
          "when": "multiline"
        }
      ],
      "react/jsx-sort-props": [
        "warn",
        {
          "shorthandFirst": true,
          "callbacksLast": true,
          "noSortAlphabetically": false,
          "multiline": "ignore",
          "locale": "auto"
        }
      ],
      "object-curly-newline": [
        "error",
        {
          "ImportDeclaration": {
            "multiline": true
          },
          "ObjectExpression": {
            "multiline": true,
            "minProperties": 3,
            "consistent": true
          },
          "ObjectPattern": {
            "multiline": true,
          }
        }
      ],
      "template-curly-spacing": [
        "error",
        "never"
      ],
      "semi-spacing": "warn",

      "curly": ["error", "all"],

      "react/jsx-tag-spacing": [
        "warn",
        {
          "beforeSelfClosing": "always",
          "beforeClosing": "never",
          "afterOpening": "never",
          "closingSlash": "never"
        }
      ],
      "react/jsx-wrap-multilines": [
        "warn",
        {
          "return": "parens-new-line",
          "condition": "parens-new-line",
          "logical": "parens-new-line"
        }
      ],
      "react/self-closing-comp": [
        "warn",
        {
          "component": true,
          "html": true
        }
      ],
      "@stylistic/semi": ["warn"],
      "@stylistic/member-delimiter-style": [
        "warn",
        {
          "multiline": {
            "delimiter": "semi",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false
          }
        }
      ],
    },
  },
];
