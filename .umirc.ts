import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  plugins: [],
  routes: [{ path: '/', component: '@/pages/index' }],
});
