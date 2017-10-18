# Change Log

All notable changes to this project will be documented in this file  
This project adheres to [Semantic Versioning](http://semver.org/)  
Formatting help at [keepachangelog.com](http://keepachangelog.com/)  
[Unreleased changes]

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

[Unreleased changes]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.4...HEAD
[0.1.4]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.0.3...v0.1.0
[0.0.3]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/ChromatixAU/stylelint-config-chromatix/compare/6cce191...v0.0.1
