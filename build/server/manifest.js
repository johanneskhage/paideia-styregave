const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cerveza-cristal.png","cerveza.mp4","favicon.ico","favicon.png","paideia_logo.png","paideia_logo_white.jpg"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CVKxi1YE.js",app:"_app/immutable/entry/app.DX9D7gG0.js",imports:["_app/immutable/entry/start.CVKxi1YE.js","_app/immutable/chunks/BjDBj3QP.js","_app/immutable/chunks/9k5XX93a.js","_app/immutable/entry/app.DX9D7gG0.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/9k5XX93a.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BtcEuCsi.js')),
			__memo(() => import('./chunks/1-wLBQe12w.js')),
			__memo(() => import('./chunks/2-CyMYxm-B.js'))
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

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
