

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D6iD6JvI.js","_app/immutable/chunks/5OpJEkJ-.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/CYksUkoP.js"];
export const stylesheets = [];
export const fonts = [];
