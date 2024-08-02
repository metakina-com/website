import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/home.vue';
import TaskAirDrop from '../page/taskAirDrop/index.vue';
import StageAirDrop from '../page/stageAirDrop/index.vue';
import CollaborativeMining from '../page/collaborativeMining/index.vue';
import Node from '../page/collaborativeMining/node.vue';
import ProjectCPT from '../page/projectCPT/index.vue';
import Metaverse from '../page/metaverse/index.vue';
import ContactUS from '../page/contactUS/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { scrollToTop: true }
  },
  {
    path: '/collaborativeMining',
    name: 'collaborativeMining',
    component: CollaborativeMining,
    meta: { scrollToTop: true }
  },
  {
    path: '/node',
    name: 'node',
    component: Node,
    meta: { scrollToTop: true }
  },
  {
    path: '/task',
    name: 'task',
    component: TaskAirDrop,
    meta: { scrollToTop: true }
  },
  {
    path: '/stage',
    name: 'stage',
    component: StageAirDrop,
    meta: { scrollToTop: true }
  },
  {
    path: '/projectCPT',
    name: 'projectCPT',
    component: ProjectCPT,
    meta: { scrollToTop: true }
  },
  {
    path: '/metaverse',
    name: 'metaverse',
    component: Metaverse,
    meta: { scrollToTop: true }
  },
  {
    path: '/contactUS',
    name: 'contactUS',
    component: ContactUS,
    meta: { scrollToTop: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to:any, _: any, next:any) => {
  // 滚动到顶部
  if (to.meta.scrollToTop) {
    window.scrollTo(0, 0);
  }
  next();
});
export default router;
