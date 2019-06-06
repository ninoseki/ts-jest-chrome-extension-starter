import * as chrome from "sinon-chrome";

describe("background", () => {
  afterEach(() => {
    chrome.flush();
  });

  it("should add listner", () => {
    expect(chrome.runtime.onMessage.addListener.notCalled).toBe(true);
    require("../background");
    expect(chrome.runtime.onMessage.addListener.calledOnce).toBe(true);
  });
});
