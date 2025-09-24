

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B2UIBHM6.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/9k5XX93a.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/2.DDuWs5yv.css"];
export const fonts = [];
