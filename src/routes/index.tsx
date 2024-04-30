import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import Counter from "~/components/Counter";

const postsMaps = [
  {
    id: 1,
    slug: "/blog/sunt-aut-facere.html",
    title: "Sunt aut facere",
  },
  {
    id: 2,
    slug: "/blog/qui-est-esse.html",
    title: "Qui est esse",
  },
  {
    id: 3,
    slug: "/blog/ea-molestias.html",
    title: "Ea molestias",
  },
];

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>

      <br />
      <Counter />

      <br />
      <br />
      <br />

      <ul>
        <For each={postsMaps}>
          {({ id, slug, title }) => (
            <li>
              <a href={slug}>{title}</a>
            </li>
          )}
        </For>
      </ul>

      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
