# stylelint-config-chromatix

Shareable config for [stylelint](https://stylelint.io/) for custom standards at [Chromatix Digital Agency](https://www.chromatix.com.au).

Based heavily on the [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/stylelint-config-wordpress/) but with some of our own too. Most notably, two spaces instead of tabs. Soz.

**This config is still in development.** If you have suggestions for improvement or if you disagree with anything this config makes you do, feel free to file an issue.

## Publishing to npm/yarn

**NOTE: This package is available on npm and once a Pull request has been merged to master the master branch needs to be published to npm/yarn to reflect any changes or updates.**

Consult LastPass or Julian for where to find login details for https://www.npmjs.com

Details for how to publish the config to npm can be found here: https://yarnpkg.com/lang/en/docs/publishing-a-package/

## Installation

Install globally to use on any project:

    yarn global add @chromatix/stylelint-config-chromatix

Install locally to one project:

    yarn add --dev @chromatix/stylelint-config-chromatix

You'll also need to have [stylelint](https://stylelint.io) installed in the same manner.

## Usage

Add this to your `.stylelintrc.js` file:

    module.exports = {
      'extends': [
        require.resolve( '@chromatix/stylelint-config-chromatix' )
      ]
    };

Then:
* Using globally?  
  Run `stylelint "**/*.scss"`.

* Using locally?  
  Add `"lint:sass": "stylelint \"**/*.scss\""` to your `package.json`'s `"scripts"` section, then run `yarn lint:sass`

### Additional Tips

* Want stylelint to list the filenames it is linting, even if everything passes? Add `--formatter verbose` to your `stylelint` command.

## See also

* [eslint-config-chromatix](https://github.com/ChromatixAU/eslint-config-chromatix)
* [phpcs-config-chromatix](https://github.com/ChromatixAU/phpcs-config-chromatix)

## License

[MIT](LICENSE).
