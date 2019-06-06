export function test() {
  chrome.runtime.sendMessage({}, response => {});
}
