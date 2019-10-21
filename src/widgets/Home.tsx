import { tsx, create } from "@dojo/framework/core/vdom";
import i18n from "@dojo/framework/core/middleware/i18n";
import { systemLocale } from "@dojo/framework/i18n/i18n";

import * as css from "./styles/Home.m.css";
import bundle from "./nls/Home";

const factory = create({ i18n });

export default factory(function Home({ middleware: { i18n } }) {
  const { format } = i18n.localize(bundle);
  let error: any;
  let singular: any;
  let plural: any;
  try {
    singular = format("counter", { count: 1 });
    plural = format("counter", { count: 2 });
  } catch (e) {
    error = e;
    console.log(e);
  }
  return (
    <div>
      <h1 classes={[css.root]}>Home Page</h1>
      <div>{`System Locale: ${systemLocale}`}</div>
      <button
        onclick={() => {
          i18n.set({ locale: "fr" });
        }}
      >
        french (fr)
      </button>
      <button
        onclick={() => {
          i18n.set({ locale: "fr-CA" });
        }}
      >
        french (fr-CA)
      </button>
      <button
        onclick={() => {
          i18n.set({ locale: "en" });
        }}
      >
        english (en)
      </button>
      <button
        onclick={() => {
          i18n.set({ locale: "en-GB" });
        }}
      >
        english (en-GB)
      </button>
      <button
        onclick={() => {
          i18n.set({});
        }}
      >
        default
      </button>
      {singular && <div key="s">{singular}</div>}
      {plural && <div key="p">{plural}</div>}
      {error && <div key="e">{error.message}</div>}
    </div>
  );
});
