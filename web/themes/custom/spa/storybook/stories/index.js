// Find all component stories by file pattern '*.story.js'.
// @ref: https://getstorybook.io/docs/basics/writing-stories#loading-stories-dynamically
const _require = require.context('../../src', true, /.*\.story\.js/)
_require.keys().forEach(_require)
