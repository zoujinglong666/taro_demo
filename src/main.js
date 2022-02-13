import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { setupRouter } from './router' // 引入路由
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
export function createApp() {
	const app = createSSRApp(App);
	setupRouter(app)
	app.use(NutUI)
	return {
		app,
	};
}
