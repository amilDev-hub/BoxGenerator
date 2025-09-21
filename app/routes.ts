import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [


    // index("BoxGenerator/App.tsx") ,

    layout('BoxGeneratorTailwindCss/LayoutApp.tsx', [
        // route('TL-generator' ,'BoxGeneratorTailwindCss/App.tsx')
        index("BoxGeneratorTailwindCss/App.tsx") 
    ])


] satisfies RouteConfig;
