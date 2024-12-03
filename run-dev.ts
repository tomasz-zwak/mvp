import concurrently from "npm:concurrently";

const { result } = concurrently([
  { command: "deno task client:start", name: "WEB", prefixColor: "cyan" },
  { command: "deno task server:start", name: "API", prefixColor: "green" },
]);

result.then((d) => {
  console.log("Done", d);
}, (e) => {
  console.log("Error", e);
});
