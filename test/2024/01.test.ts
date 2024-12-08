import { assertEquals } from "@std/assert";
import resolve from "../../src/2024/01.ts";

Deno.test("2024/01", () => {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
  assertEquals(resolve(input), [11, 31]);
});
