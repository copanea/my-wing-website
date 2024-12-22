import { createRouter, createWebHistory } from "vue-router";

// 라우팅 정보 기술
import HomeMenu from "@/components/HomeMenu.vue";
// import SelectFilter from "@/components/SelectFilter.vue";
// import HealthProfile from "@/components/HealthProfile.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import TextInput from "@/components/TextInput.vue";
import RecipeMenu from "@/components/RecipeMenu.vue";
import RecipeShow from "@/components/RecipeShow.vue";
// import SignUp from "@/components/SignUp.vue";
// import LogIn from "@/components/LogIn.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomeMenu",
      component: HomeMenu,
    },
    // {
    //   path: "/SelectFilter",
    //   name: "SelectFilter",
    //   component: SelectFilter,
    // },
    // {
    //   path: "/HealthProfile",
    //   name: "HealthProfile",
    //   component: HealthProfile,
    // },
    {
      path: "/ImageUpload",
      name: "ImageUpload",
      component: ImageUpload,
    },
    {
      path: "/TextInput",
      name: "TextInput",
      component: TextInput,
    },
    {
      path: "/RecipeMenu",
      name: "RecipeMenu",
      component: RecipeMenu,
    },
    {
      path: "/RecipeShow",
      name: "RecipeShow",
      component: RecipeShow,
    },
    // {
    //   path: "/SignUp",
    //   name: "SignUp",
    //   component: SignUp,
    // },
    // {
    //   path: "/LogIn",
    //   name: "LogIn",
    //   component: LogIn,
    // },
  ],
});

export default router;