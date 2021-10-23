import {createWebHistory, createRouter} from "vue-router"
import Main from "../pages/Main";
import PostPages from "../pages/PostPages";
import About from "../pages/About";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main
    },
    {
        path: "/posts",
        name: "postPages",
        component: PostPages
    },
    {
        path: "/about",
        name: "about",
        component: About
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)



export default router;