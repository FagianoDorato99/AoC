async function main() {
  const year = prompt();
  const day = prompt();

  const input = await Deno.readTextFile("./input.txt");

  const module = await import(`./${year}/${day}.ts`);
  console.table(module.default(input));
}

main();
