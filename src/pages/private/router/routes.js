import Questions from "@/pages/private/components/Questions";
import Posts from "@/pages/private/components/Posts";
import QuestionValidate from "@/pages/private/components/QuestionEdit";
import PostEdit from "@/pages/private/components/PostEdit";
const routes = [
	{
		path: "/questions",
		name: "Questions",
		component: Questions,
	},
	{
		path: "/posts",
		name: "Posts",
		component: Posts,
	},
	{
		path: "/questions/acceptQuestion",
		name: "acceptQuestion",
		component: QuestionValidate,
		props: true
	},
	{
		path: "editPost",
		name: "editPost",
		component: PostEdit,
		props: true
	}
];


export default routes;
