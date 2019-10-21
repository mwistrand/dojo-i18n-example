const locales = {
  fr: () => import("./fr/home")
};

const messages = {
  counter: `{count, plural,
	=1 {item left}
	other {items left}}`
};

export default { messages, locales };
