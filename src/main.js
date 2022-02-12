import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { setupRouter } from './router' // 引入路由
export function createApp() {
	const app = createSSRApp(App);
	setupRouter(app)
	return {
		app,
	};
}
