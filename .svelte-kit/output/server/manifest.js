export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cerveza-cristal.png","cerveza.mp4"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.B-VlV3Pa.js",app:"_app/immutable/entry/app.dj8fr5GI.js",imports:["_app/immutable/entry/start.B-VlV3Pa.js","_app/immutable/chunks/BojEurt1.js","_app/immutable/chunks/C1zFF-FI.js","_app/immutable/entry/app.dj8fr5GI.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/C1zFF-FI.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
