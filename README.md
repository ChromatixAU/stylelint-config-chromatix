# stylelint-config-chromatix

Shareable config for stylelint for custom standards at [Chromatix Digital Agency](https://www.chromatix.com.au).

# Coming soon. The following is probably not correct yet and is based on a template. DO NOT USE THIS YET.

Based heavily on the [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/stylelint-config-wordpress/) but with some of our own too. Most notably, two spaces instead of tabs. Soz.

**This config is still in development.** If you have suggestions for improvement or if you disagree with anything this config makes you do, feel free to file an issue.

## Installation

Install globally to use on any project:

    npm install --global @chromatix/stylelint-config-chromatix

Install locally to one project:

    npm install --save-dev @chromatix/stylelint-config-chromatix

## Usage

Add this to your `.stylelintrc.js` file:

    module.exports = {
      "extends": [
        "@chromatix/chromatix"
      ]
    };

Then:
* Using globally?<br />
  Run `stylelint **/*.scss`.

* Using locally?<br />
  Add `"lint": "stylelint **/*.scss"` to your `package.json`'s `"scripts"` section, then run `npm run lint`

## License

[MIT](LICENSE).
