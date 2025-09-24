

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D86jIZK6.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/C1zFF-FI.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/2.1TbCfV07.css"];
export const fonts = [];
