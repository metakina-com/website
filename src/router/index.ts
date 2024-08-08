import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/home.vue';
import TaskAirDrop from '../page/taskAirDrop/index.vue';
import StageAirDrop from '../page/stageAirDrop/index.vue';
import CollaborativeMining from '../page/collaborativeMining/index.vue';
import Node from '../page/collaborativeMining/node.vue';
import ProjectCPT from '../page/projectCPT/index.vue';
import Metaverse from '../page/metaverse/index.vue';
import ContactUS from '../page/contactUS/index.vue';

import Homem from '../page/homem.vue';
import TaskAirDropm from '../page/taskAirDropm/index.vue';
import StageAirDropm from '../page/stageAirDropm/index.vue';
import CollaborativeMiningm from '../page/collaborativeMiningm/index.vue';
import Nodem from '../page/collaborativeMiningm/node.vue';
import ProjectCPTm from '../page/projectCPTm/index.vue';
import Metaversem from '../page/metaversem/index.vue';
import ContactUSm from '../page/contactUSm/index.vue';

const userAgent = navigator.userAgent.toLowerCase();
const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: isMobile?Homem:Home,
    meta: { scrollToTop: true }
  },
  {
    path: '/collaborativeMining',
    name: 'collaborativeMining',
    component: isMobile?CollaborativeMiningm:CollaborativeMining,
    meta: { scrollToTop: true }
  },
  {
    path: '/node',
    name: 'node',
    component: isMobile?Nodem:Node,
    meta: { scrollToTop: true }
  },
  {
    path: '/task',
    name: 'task',
    component: isMobile?TaskAirDropm:TaskAirDrop,
    meta: { scrollToTop: true }
  },
  {
    path: '/stage',
    name: 'stage',
    component: isMobile?StageAirDropm:StageAirDrop,
    meta: { scrollToTop: true }
  },
  {
    path: '/projectCPT',
    name: 'projectCPT',
    component: isMobile?ProjectCPTm:ProjectCPT,
    // meta: { scrollToTop: true }
  },
  {
    path: '/metaverse',
    name: 'metaverse',
    component: isMobile?Metaversem:Metaverse,
    meta: { scrollToTop: true }
  },
  {
    path: '/contactUS',
    name: 'contactUS',
    component: isMobile?ContactUSm:ContactUS,
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
