import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import session from "hono-session";

const student = {
  name: "John",
  age: 20,
};

const app = new Hono();
app.use(
  "*",
  session({
    store: new Map(),
    cookieName: "sid",
    cookieOptions: {
      httpOnly: true,
      secure: false,
      maxAge: 87000,
      path: "/",
    },
    existsCookieOptions: {
      secure: false,
      httpOnly: false,
      path: "/",
    },
  }),
);
app.get("/", serveStatic({ path: "./static/index.html" }));
app.get("/student", async (c) => {
  return await c.json(student);
});
app.get("*", serveStatic({ root: "./static" }));

Deno.serve(app.fetch);
