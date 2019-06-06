export function test(): string {
  const key = document.getElementById("key") as HTMLInputElement;
  return key!.value;
}
