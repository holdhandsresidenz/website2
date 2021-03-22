import Questions from "@/pages/private/components/Questions";
import Posts from "@/pages/private/components/Posts";
import QuestionValidate from "@/pages/private/components/QuestionEdit";

const routes = [
    {
        path: "/questions",
        name: "Questions",
        component: Questions,
    },
    {
        path: "/private/posts",
        name: "Posts",
        component: Posts,
    },
    {
        path: "/private/questions/acceptQuestion",
        name: "acceptQuestion",
        component: QuestionValidate,
        props: true
    }
];


export default routes;
