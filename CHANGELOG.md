# Change Log

All notable changes to this project will be documented in this file  
This project adheres to [Semantic Versioning](http://semver.org/)  
Formatting help at [keepachangelog.com](http://keepachangelog.com/)  
[Unreleased changes]

## [0.1.10] - 2017-12-06

- Add additional at-rules `error`, `warn` and `while`

## [0.1.9] - 2017-12-04

- Prevent .css for @import's, as it's bad for performance

## [0.1.8] - 2017-10-26

- Updates to documentation and linting/CI configuration
- Made tests a little more granular

## [0.1.7] - 2017-10-24

- Added @extend to list of known at-rules.

## [0.1.6] - 2017-10-23

- Fixed issue with max-nesting-depth and mixins contributing to the depth (eg. Media Query mixin)

## [0.1.5] - 2017-10-20

- Removed the requirement of space inside selectors, media queries and pseudo selector parentheses. Moved the margin properties to be after padding in the properties order. This means the properties follow the box-model naturally.

## [0.1.4] - 2017-10-18

- Remove the requirement for @import to not include leading underscores, as it's sometimes needed for globbing.

## [0.1.3] - 2017-10-18

- Reverse the positions on function-parentheses-space-inside, media-feature-parentheses-space-inside and number-leading-zero to better match WordPress' examples and Sass Guidelines.
- Updated upstream dependencies.

## [0.1.2] - 2017-10-17

- Fixed the prohibition on using @at-root.
- Fixed minor JS linting issues that failed the last release.

## [0.1.1] - 2017-10-17

- Fixed the rule allowing up to 120 chars on a line; it now allows 100 to match our other languages.
- Fixed the rule prohibiting spaces inside parens in pseudo class selectors - it now matches other rules & other languages by requiring spaces.

## [0.1.0] - 2017-10-16

- Added requirement for single quotes, to match other language rules.
- Added some minor inline documentation assistance.
- Fixed property ordering rules to group similar rules together rather than alphabetically.
- Fixed the prohibition on using some common Sass at-rules.
- Removed stylelint-order plugin, as it is already included by our upstream dependencies.

## [0.0.3] - 2017-10-13

- Fixed indentation rule to require 2 spaces instead of tabs.
- Fixed devDependencies for linting, as well as ignoring test coverage reports.

## [0.0.2] - 2017-10-13

- Added linting & CI.
- Updated README documentation.
- Removed stylelint rules that have been removed since our original config was written.
- Fixed linting issues and tests.

## [0.0.1] - 2017-10-12

- Initial release.

[Unreleased changes]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.10...HEAD
[0.1.10]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.9...v0.1.10
[0.1.9]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.8...v0.1.9
[0.1.8]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.7...v0.1.8
[0.1.7]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.6...v0.1.7
[0.1.6]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.0.3...v0.1.0
[0.0.3]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/6cce191...v0.0.1
