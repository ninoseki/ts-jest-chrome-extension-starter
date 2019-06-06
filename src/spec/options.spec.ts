import * as chrome from "sinon-chrome";

import { test } from "../options";

describe("options", () => {
  beforeEach(() => {
    document.body.innerHTML = `<input id="key" value="test"/>`;
  });

  afterEach(() => {
    chrome.flush();
  });

  it("should return input#key's value", () => {
    const value = test();
    expect(value).toBe("test");
  });
});
