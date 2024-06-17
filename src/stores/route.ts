import { defineStore } from 'pinia';
import { RouteLocationNormalized } from 'vue-router';

export const useRouteStore = defineStore('route', {
    state: () => ({
        previousRoute: null as RouteLocationNormalized | null,
    }),
    actions: {
        setPreviousRoute(route: RouteLocationNormalized) {
            this.previousRoute = route;
        },
    },
});
