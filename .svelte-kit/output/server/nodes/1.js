

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BZSJ0q9e.js","_app/immutable/chunks/C1zFF-FI.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/BojEurt1.js"];
export const stylesheets = [];
export const fonts = [];
