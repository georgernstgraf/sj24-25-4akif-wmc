import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

// serve index.html
app.get("/", serveStatic({ path: "./static/index.html" }));

// serve json
const arr = [1, 2, 3, 4, 5];
const obj = { name: "John", age: 30, city: "New York" };
app.get("/obj", (c) => c.json(obj));
app.get("/arr", (c) => c.json(arr));
app.get("rnd", (c) => c.json(Math.round(Math.random() * 50)));
app.get(
  "rnda",
  (c) => {
    console.log("rnda");
    return c.json(
      new Array(10).fill(0).map((_) => Math.round(Math.random() * 50))
        .toSorted(),
    );
  },
);
app.get("/checkprim", (c) => {
  const num = Number.parseInt(c.req.query("num") || "0");
  if (isNaN(num)) {
    return c.json({ error: "num is not a number" });
  }
  return c.json({ result: isPrime(num) });
});
app.get("/secret", (c) => c.json({ secret: Deno.env.get("SECRET") }));
function isPrime(num: number) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// serve all other static files
app.get("*", serveStatic({ root: "./static" }));

Deno.serve({ port: 8000 }, app.fetch);
