# eslint-config-chromatix

Shareable config for ESLint for custom standards at [Chromatix Digital Agency](https://www.chromatix.com.au).

Based heavily on the [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/eslint-config-wordpress/) but with some of our own too. Most notably, two spaces instead of tabs. Soz.

**This config is still in development.** If you have suggestions for improvement or if you disagree with anything this config makes you do, feel free to file an issue.

## Installation

Install globally to use on any project:

    npm install --global @chromatix/eslint-config-chromatix

Install locally to one project:

    npm install --save-dev @chromatix/eslint-config-chromatix

## Usage

Add this to your `.eslintrc.js` file:

    module.exports = {
      "extends": [
        "@chromatix/chromatix"
      ]
    };

Then:
* Using globally?<br />
  Run `eslint **/*.js`.

* Using locally?<br />
  Add `"lint": "eslint **/*.js"` to your `package.json`'s `"scripts"` section, then run `npm run lint`

## License

[MIT](LICENSE).
