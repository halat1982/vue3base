import {createWebHistory, createRouter} from "vue-router"
import Main from "../pages/Main";
import PostPages from "../pages/PostPages";
import About from "../pages/About";
import Post from "../pages/Post";

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
    },
    {
        path: "/posts/:id",
        name: "post",
        component: Post
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)



export default router;