const Environment = require("jest-environment-jsdom");

module.exports = class extends Environment {
  /**
   * Creates class instance.
   *
   * @param config - Configuration.
   * @param context - Context.
   */
  constructor(config, context) {
    super(config);
    this.testPath = context.testPath;
  }

  /**
   * Setup.
   */
  async setup() {
    await super.setup();
    this.global.JEST_ENV = "jsdom";
    this.global.JEST_PATH = this.testPath;
    this.global.clearImmediate = this.global.clearImmediate ?? _clearImmediate;
    this.global.fetch = this.global.fetch ?? _fetch;
    this.global.setImmediate = this.global.setImmediate ?? _setImmediate;

    function _clearImmediate(id) {
      return global.clearTimeout(id);
    }

    function _fetch() {
      throw new Error("Not implemented");
    }

    function _setImmediate(callback) {
      return global.setTimeout(callback, 0);
    }
  }
};
