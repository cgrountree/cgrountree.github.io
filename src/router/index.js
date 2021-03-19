import {createWebHashHistory, createRouter} from "vue-router";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import CurriculumVitae from "@/views/CurriculumVitae.vue";
import Contact from "@/views/Contact.vue";

const routes = [
    {
        path: "/",
        name: "about",
        component: About,
        beforeEnter: (to, from, next) => {
            // eslint-disable-line no-unused-vars
            const queryRoute = to.query.p;
            if (queryRoute) {
              router.push(queryRoute);
            } else {
              next();
            }
          }
    }, {
        path: "/projects",
        name: "projects",
        component: Projects
    },
    {
        path: "/cv",
        name: "cv",
        component: CurriculumVitae
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    }
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;
