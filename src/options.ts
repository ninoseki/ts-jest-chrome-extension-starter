export function test(): string {
  const key = document.getElementById("key") as HTMLInputElement;
  if (key !== null) {
    return key!.value;
  } else {
    return "";
  }
}
