import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

export const app = new Application();

const router = new Router();

router.get("/", (context) => {
  context.response.body = { message: "Hello world" };
});

app.use(router.routes());

if (import.meta.main) {
  console.log("Server listening on port http://localhost:4000");
  await app.listen({ port: 4000 });
}
