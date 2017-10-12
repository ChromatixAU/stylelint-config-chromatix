'use strict';

// TODO: This config is NOT complete or fully tested yet! DO NOT USE.

module.exports = {

  plugins: [

    // @see https://www.npmjs.com/package/stylelint-scss
    'stylelint-scss',

  ],

  extends: [

    // @see https://www.npmjs.com/package/stylelint-config-sass-guidelines
    'stylelint-config-sass-guidelines',

    // @see https://www.npmjs.com/package/stylelint-config-wordpress
    'stylelint-config-wordpress',

  ],

  rules: {

    // @see http://stylelint.io/user-guide/rules/

    // If the Sass Guidelines & WordPress guidelines disagree, WordPress wins.
    // If we think something is incorrect, really stupid, or just doesn't work, we can override it
    // below.

    // Set a rule to 'null' to disable it, NOT to false!
    // All rules are initially disabled by default, BUT we do need to set null on those we want to
    // override still, because our extends and plugins above will be enabling some of them.

    'at-rule-empty-line-before': null,

    // Ignore common Sass at-rules.
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'content',
          'for',
          'include',
          'mixin',
          'if',
          'elseif',
          'else',
          'debug'
        ]
      }
    ],

    // Override stylelint-config-sass-guidelines disallowing @debug, as it can be helpful to warn
    // of errors in mixin arguments!
    'at-rule-blacklist': [],

    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: [
          'if',
          'else'
        ]
      }
    ],

    // TODO: declaration-block-properties-order has been deprecated, and needs replacement.
    // @see https://github.com/stylelint/stylelint/issues/2010
    /*
    'declaration-block-properties-order': [

      // WordPress says: display, positioning, box model, colours/typography, other.
      // This is based directly on the examples used in grunt-wp-css.
      // @see https://github.com/cedaro/grunt-wp-css/blob/develop/tasks/config/default.json

      // Display.
      'display',
      'visibility',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'zoom',
      'flex',

      // Positioning.
      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',

      // Box model.
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',

      // Colors/Typography.
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'opacity',
      'filter',
      'color',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-attachment',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-clip',
      'background-origin',
      'background-size',
      'box-decoration-break',
      'box-shadow',
      'text-shadow',
      'font',
      'font-family',
      'src',
      'font-size',
      'font-weight',
      'font-style',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      'line-height',
      'text-align',
      'text-align-last',
      'vertical-align',
      'white-space',
      'text-decoration',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-indent',
      'text-justify',
      'letter-spacing',
      'word-spacing',
      'text-outline',
      'text-transform',
      'text-wrap',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'word-wrap',
      'word-break',
      'tab-size',
      'hyphens',

      // Other.
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'content',
      'quotes',
      'counter-reset',
      'counter-increment',
      'resize',
      'cursor',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      'transition',
      'transition-delay',
      'transition-timing-function',
      'transition-duration',
      'transition-property',
      'transform',
      'transform-origin',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'backface-visibility',
      'text-rendering',
      'pointer-events',

    ], // Declaration-block-properties-order.
    */

    'max-nesting-depth': 4,
    'selector-max-compound-selectors': 4,
    'max-line-length': 120,
    'no-eol-whitespace': [ true, { ignore: 'empty-lines' } ],

    // TODO: This rule no longer exists in stylelint and may need to be replaced.
    // @see https://github.com/stylelint/stylelint/issues/2229
    //'rule-nested-empty-line-before': null,

    'scss/at-mixin-argumentless-call-parentheses': 'never',

    // This was useful, but it's currently applying to eg. &.test {} as well.
    'selector-no-qualifying-type': null,

  } // Rules.
}; // Module.exports
