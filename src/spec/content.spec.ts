import * as chrome from "sinon-chrome";

import { test } from "../content";

describe("content_scripts", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="test">test</div>`;
  });

  afterEach(() => {
    chrome.flush();
  });

  it("should class chrome.runtime.sendMessage", () => {
    expect(chrome.runtime.sendMessage.notCalled).toBe(true);
    test();
    expect(chrome.runtime.sendMessage.calledOnce).toBe(true);
  });
});
