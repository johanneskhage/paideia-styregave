export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cerveza-cristal.png","cerveza.mp4","favicon.ico","favicon.png","paideia_jub15.jpg","paideia_logo.png","paideia_logo_white.jpg"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CwE29RDc.js",app:"_app/immutable/entry/app.CZfEEsXK.js",imports:["_app/immutable/entry/start.CwE29RDc.js","_app/immutable/chunks/CYksUkoP.js","_app/immutable/chunks/5OpJEkJ-.js","_app/immutable/entry/app.CZfEEsXK.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/5OpJEkJ-.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
