/* @flow */

const body = document.body;
if (body) {
  document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null, false);
}
