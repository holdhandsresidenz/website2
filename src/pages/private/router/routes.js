import Questions from "@/pages/private/components/Questions";
import Posts from "@/pages/private/components/Posts";
import QuestionValidate from "@/pages/private/components/QuestionEdit";
import PostEdit from "@/pages/private/components/PostEdit";
import connectQuestions from "@/pages/private/components/connectQuestions";
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
		path: "/editPost",
		name: "editPost",
		component: PostEdit,
		props: true
	},
	{
		path: "/connectQuestions",
		name: "connectQuestions",
		component: connectQuestions,
		props: true
	}
];


export default routes;
