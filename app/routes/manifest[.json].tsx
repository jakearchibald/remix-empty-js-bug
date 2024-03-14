import { json } from "@remix-run/node";
import url from "./images/maskable.png?url";

export async function loader() {
  return json({ foo: "bar!!", icon: url });
}
