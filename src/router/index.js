import Vue from 'vue';
import Router from 'vue-router';
import hello11 from '@/components/hello5';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'hello11',
			component: hello11
		}
	]
});
