import Step1 from "../pages/step1";
import Step2 from "../pages/step2";
import Step3 from "../pages/step3";
import Step4 from "../pages/step4";
import Step5 from "../pages/step5";
let routers = [
  {
    path: "/",
    component: Step1,
    exact: true
  },
  {
    path: "/step2",
    component: Step2,
    exact: false
  },
  {
    path: "/step3",
    component: Step3,
    exact: false
  },
  {
    path: "/step4",
    component: Step4,
    exact: false
  },
  {
    path: "/step5",
    component: Step5,
    exact: false
  }
];
export default routers;
