
// @see https://github.com/WordPress-Coding-Standards/eslint-config-wordpress/blob/95cd70536/__tests__/index.js

'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'index.js', () => {

  const config = require( '../index.js' );

  expect( isPlainObj( config ) ).toBe( true );
  expect( Array.isArray( config.extends ) ).toBe( true );
  expect( isPlainObj( config.env ) ).toBe( true );
  expect( isPlainObj( config.rules ) ).toBe( true );

});
