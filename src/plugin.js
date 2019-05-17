class Plugin {
  constructor() {}
  apply(compiler) {
    compiler.hooks.done.tap("My plugin", params => {
      // console.log("tapping", params);
    });
  }
}
module.exports = Plugin;
