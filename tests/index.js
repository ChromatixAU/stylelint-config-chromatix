/**
 * Simple tests for stylelint-config-chromatix.
 *
 * @author Tim Malone <tim.malone@chromatix.com.au>.
 */

'use strict';

const isPlainObj = require( 'is-plain-obj' );
const config = require( '../index.js' );

const ONE_ENTRY = 1;

test( 'Config exists and exports an object', () => {
  expect( isPlainObj( config ) ).toBe( true );
});

test( 'Config extends at least one other config', () => {
  expect( Array.isArray( config.extends ) ).toBe( true );
  expect( config.extends.length ).toBeGreaterThanOrEqual( ONE_ENTRY );
});

test( 'Config sets one or more rules', () => {
  expect( isPlainObj( config.rules ) ).toBe( true );
  expect( config.extends.length ).toBeGreaterThanOrEqual( ONE_ENTRY );
});
