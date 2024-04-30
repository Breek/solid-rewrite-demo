import { Title } from "@solidjs/meta";
import {
  RouteSectionProps,
  createAsync,
  type RouteDefinition,
} from "@solidjs/router";
import { Show } from "solid-js";
import { getPost } from "~/lib/api";

export const route = {
  load({ params }) {
    void getPost(params.id);
  },
} satisfies RouteDefinition;

export default function Post(props: RouteSectionProps) {
  const post = createAsync(() => getPost(props.params.id));
  return (
    <Show when={post()} fallback={<p>No content</p>}>
      <main>
        title
        <Title>{post()?.title}</Title>
        <h1>{post()?.title}</h1>
        <p>{post()?.body.repeat(10)}</p>
      </main>
    </Show>
  );
}
