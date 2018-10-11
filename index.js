/**
 * Main configuration for stylelint shareable configuration stylelint-config-chromatix.
 *
 * @author Tim Malone <tim.malone@chromatix.com.au>
 */

'use strict';

module.exports = {

  // Ignore magic numbers in config for ESLint.
  /* eslint-disable no-magic-numbers */

  // @see
  // https://github.com/bjankord/stylelint-config-sass-guidelines/blob/master/index.js
  // https://github.com/hudochenkov/stylelint-order
  // https://github.com/kristerkari/stylelint-scss
  // https://github.com/WordPress-Coding-Standards/stylelint-config-wordpress/blob/master/index.js
  // https://github.com/stylelint/stylelint-config-recommended/blob/master/index.js
  extends: [
    'stylelint-config-sass-guidelines', // Includes stylelint-order & stylelint-scss.
    'stylelint-config-wordpress' // Includes stylelint-config-recommended.
  ],

  rules: {

    // @see http://stylelint.io/user-guide/rules/

    // General guidelines for choosing rules:
    // - If the Sass Guidelines & WordPress guidelines disagree, WordPress wins.
    // - If we think something is incorrect, really stupid, or just doesn't work, we win. We have a
    //   particular focus on trying to get parity across our PHP, JS and Sass rules where possible.

    // Set a rule to 'null' to disable it, NOT to false!
    // All rules are initially disabled by default, BUT we do need to set null on those we want to
    // override still, because our extends and plugins above will be enabling some of them.

    // Please add comments to explain the rule changes if it's not clear what's happening.

    // Override stylelint-config-sass-guidelines disallowing @debug, as it can be helpful to warn
    // of errors in mixin arguments.
    'at-rule-blacklist': [],

    'at-rule-empty-line-before': null,

    // Allow common Sass at-rules (@....) through the at-rule-no-unknown rule.
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'at-root',
          'content',
          'debug',
          'else',
          'elseif',
          'error',
          'extend',
          'for',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'warn',
          'while'
        ]
      }
    ],

    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: [
          'if',
          'else'
        ]
      }
    ],

    'indentation':       2,
    'max-line-length':   100,
    'max-nesting-depth': [
      4,
      {
        ignoreAtRules: [ 'include' ]
      }
    ],

    'no-eol-whitespace': [
      true,
      {
        ignore: 'empty-lines'
      }
    ],

    // @see https://github.com/hudochenkov/stylelint-order

    'order/order': [
      'at-variables',
      'declarations',
      'rules'
    ],

    'order/properties-alphabetical-order': null,

    'order/properties-order': null, // Order/properties-order.

    // TODO: This rule no longer exists in stylelint and may need to be replaced.
    // @see https://github.com/stylelint/stylelint/issues/2229
    //'rule-nested-empty-line-before': null,

    'scss/at-import-no-partial-leading-underscore': null,

    // Stylelint-config-sass-guidelines already adds this rule, but we include the 'css' extension
    // to ensure that live @import statements don't accidentally leak through (they're bad for
    // performance!)
    'scss/at-import-partial-extension-blacklist': [
      'scss',
      'css'
    ],

    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'selector-max-compound-selectors':             6,

    // This was useful, but it's currently applying to eg. &.test {} as well.
    'selector-no-qualifying-type':                 null,
    'selector-pseudo-element-colon-notation':      null,
    'string-quotes': 'single'

  } // Rules.
}; // Module.exports
