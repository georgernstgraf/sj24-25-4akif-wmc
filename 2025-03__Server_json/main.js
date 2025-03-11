import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const student = {
    name: "John",
    age: 20,
};

const app = new Hono();
app.get("/", serveStatic({ path: "./static/index.html" }));
app.get("/student", async (c) => {
    return await c.json(student);
});
app.get("*", serveStatic({ root: "./static" }));

Deno.serve(app.fetch);
