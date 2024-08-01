import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/home.vue';
import TaskAirDrop from '../page/taskAirDrop/index.vue';
import StageAirDrop from '../page/stageAirDrop/index.vue';
import CollaborativeMining from '../page/collaborativeMining/index.vue';
import Node from '../page/collaborativeMining/node.vue';
import ProjectCPT from '../page/projectCPT/index.vue';
import Metaverse from '../page/metaverse/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collaborativeMining',
    name: 'collaborativeMining',
    component: CollaborativeMining
  },
  {
    path: '/node',
    name: 'node',
    component: Node
  },
  {
    path: '/task',
    name: 'task',
    component: TaskAirDrop
  },
  {
    path: '/stage',
    name: 'stage',
    component: StageAirDrop
  },
  {
    path: '/projectCPT',
    name: 'projectCPT',
    component: ProjectCPT
  },
  {
    path: '/metaverse',
    name: 'metaverse',
    component: Metaverse
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
