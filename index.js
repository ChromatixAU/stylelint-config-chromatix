'use strict';

const INDENTATION_SPACES = 2;

module.exports = {

  env: {
    browser: true,
    es6:     true,
    jest:    true,
    jquery:  true,
    node:    true
  },

  // @see https://eslint.org/docs/rules/{NAME-OF-RULE}
  // @see https://github.com/WordPress-Coding-Standards/eslint-config-wordpress/blob/master/index.js
  // @see https://github.com/WordPress-Coding-Standards/eslint-plugin-wordpress/tree/master/lib
  extends: [
    'eslint:recommended',
    'wordpress'
  ],

  rules: {

    // Coming soon.
    //
    //'no-var':       [ 'error' ],
    //'prefer-const': [ 'error' ],
    //
    // @see https://www.npmjs.com/package/eslint-plugin-dollar-sign
    //'dollar-sign/dollar-sign': [2, 'ignoreProperties'],

    // Rule categories:
    // - Best practices (and quality code).
    // - Documentation.
    // - Indentation.
    // - Handled elsewhere.
    // - Node safety.
    // - Purely helpful.
    // - Security.
    // - Stylistic.
    // - UX.
    // - Variables.

    'array-bracket-newline': [ // Stylistic.
      'error',
      {
        minItems: 2
      }
    ],

    'array-callback-return': [ 'warn' ], // Purely helpful.

    'array-element-newline': [ // Stylistic.
      'error',
      'always'
    ],

    'callback-return': [ 'error' ], // Node safety.

    'capitalized-comments': [ // Documentation.
      'warn',
      'always',
      {
        ignoreConsecutiveComments: true
      }
    ],

    'complexity': [ // Best practices.
      'error',
      {
        max: 20
      }
    ],

    'dot-location': [ // Stylistic.
      'error',
      'property'
    ],

    'eqeqeq': [ // Best practices.
      'error',
      'always'
    ],

    'guard-for-in':        [ 'error' ], // Best practices.
    'handle-callback-err': [ 'error' ], // Node safety.

    'id-length': [ // Variables.
      'error',
      {
        max: 25,
        min: 2
      }
    ],

    // Indentation.
    // @see https://eslint.org/docs/rules/indent
    'indent': [
      'error',
      INDENTATION_SPACES,
      {
        flatTernaryExpressions: true,
        SwitchCase:             1,

        VariableDeclarator: {
          const: 3,
          let:   2,
          var:   2
        }
      }
    ],

    'key-spacing': [ // Stylistic.
      'error',
      {
        'align': {
          afterColon:  true,
          beforeColon: false,
          on:          'value'
        }
      }
    ],

    'linebreak-style': [ 'off' ], // Handled by git.

    'lines-around-comment': [ // Documentation.
      'warn',
      {
        beforeBlockComment: true,
        beforeLineComment:  true
      }
    ],

    'max-depth': [ // Best practices.
      'error',
      {
        max: 3
      }
    ],

    'max-len': [ // Stylistic.
      'error',
      {
        code:       100,
        ignoreUrls: true,
        tabWidth:   2
      }
    ],

    'max-lines': [ // Stylistic.
      'error',
      {
        max:            800,
        skipBlankLines: false,
        skipComments:   false
      }
    ],

    'max-nested-callbacks': [ // Best practices.
      'error',
      {
        max: 3
      }
    ],

    'max-params': [ // Best practices.
      'error',
      {
        max: 3
      }
    ],

    'max-statements': [ // Best practices.
      'error',
      {
        max: 15
      }
    ],

    'max-statements-per-line': [ 'error' ], // Stylistic.

    'no-alert':              [ 'error' ], // UX.
    'no-array-constructor':  [ 'error' ], // Stylistic.
    'no-buffer-constructor': [ 'error' ], // Node safety.
    'no-console':            [ 'off' ], // Handled by strip-debug during minify for prod.
    'no-empty-function':     [ 'error' ], // Stylistic.
    'no-eq-null':            [ 'error' ], // Best practices.
    'no-eval':               [ 'error' ], // Security.
    'no-implicit-coercion':  [ 'error' ], // Best practices.
    'no-implied-eval':       [ 'error' ], // Security.
    'no-lone-blocks':        [ 'error' ], // Stylistic.
    'no-lonely-if':          [ 'error' ], // Stylistic.
    'no-loop-func':          [ 'error' ], // Best practices.
    'no-magic-numbers':      [ 'error' ], // Best practices.
    'no-mixed-requires':     [ 'error' ], // Node safety.
    'no-multi-spaces':       [ 'error' ], // Stylistic.
    'no-multi-str':          [ 'error' ], // Stylistic.

    'no-multiple-empty-lines': [ // Stylistic.
      'error',
      {
        max:    1,
        maxBOF: 1,
        maxEOF: 1
      }
    ],
    'no-negated-condition':    [ 'error' ], // Stylistic.
    'no-new-object':           [ 'error' ], // Stylistic.
    'no-param-reassign':       [ 'error' ], // Best practices.
    'no-path-concat':          [ 'error' ], // Node safety.
    'no-plusplus':             [ 'error' ], // Best practices.
    'no-process-env':          [ 'error' ], // Node safety.
    'no-process-exit':         [ 'error' ], // Node safety.
    'no-return-assign':        [ 'error' ], // Best practices.
    'no-self-compare':         [ 'error' ], // Best practices.
    'no-tabs':                 [ 'error' ], // Stylistic.
    'no-unused-expressions':   [ 'error' ], // Best practices.
    'no-use-before-define':    [ 'error' ], // Variables.
    'no-warning-comments':     [ 'warn' ], // Documentation.
    'object-property-newline': [ 'error' ], // Stylistic.
    'require-jsdoc':           [ 'warn' ], // Documentation.

    'sort-keys': [ // Stylistic.
      'error',
      'asc',
      {
        caseSensitive: false,
        natural:       true
      }
    ],

    'strict': [ // Best practices.
      'error',
      'safe'
    ],

    'valid-jsdoc': [ 'warn' ] // Documentation.

  } // Rules.
}; // Module.exports
