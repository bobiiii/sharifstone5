
import {
  createBrowserRouter,} from "react-router-dom";
import HomeScreen from "../Screens/Home";
import Layout from "../utils/Layout";
import OurCollection from "../Screens/Our_Collection";
import ProductDescription from "../Screens/ProductDescription";
import AboutUs from "../Screens/AboutUs";
import WarrantyAndSupport from "../Screens/WarrantyAndSupport";
import ContactScreen from "../Screens/Contact";
import KitchenVisualizer from "../Screens/KitchenVisualizer";
import WhereToBuy from "../Screens/WhereToBuy";
import SelectCategory from "../Screens/NewVisualizer/SelectCategory";
import BlogScreen from "../Screens/Blog";
import OurCollection2 from "../Screens/Our_Collection2";
import VisualizerMain from "../Screens/Visualizer/VisualizerMain";
import BlogDetails from "../Screens/Blog/Components/BlogDetails";

createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          
          <HomeScreen />
        </Layout>
      ),
    },
    {
      path: "/where-to-buy",
      element: (
        <Layout>
          <WhereToBuy />
        </Layout>
      ),
    },
    {
      path: "/visualizer",
      element: (
          <KitchenVisualizer />
      ),
    },
{
      path: "/kitchen/select-category",
      element: (
        <SelectCategory/>
      ),

      },
      {
        path: "/visualizer/:product/:color",
        element: (
          <VisualizerMain/>
        ),
  
        },


    {
      path: "/quartz-collection",
      element: (
        <Layout>
          <OurCollection />
        </Layout>
      ),
    },
    {
      path: "/:variety2",
      element: (
        <Layout>
          <OurCollection2 />
        </Layout>
      ),
    },
    {
      path: "/:collectionName/:varietyName",
      element: (
        <Layout>
          <ProductDescription />
        </Layout>
      ),
    },
    
    {
      path: "/about",
      element: (
        <Layout>
          <AboutUs />
        </Layout>
      ),
    },
    {
      path: "/warranty-n-support",
      element: (
        <Layout>
          <WarrantyAndSupport />
        </Layout>
      ),
    },
    {
        path: "/contact",
        element: (
          <Layout>
            <ContactScreen />
          </Layout>
        ),
      },
      {
        path: "/blog",
        element: (
          <Layout>
            <BlogScreen />
          </Layout>
        ),
      },
      {
        path: "/blog/:blogName",
        element: (
          <Layout>
            <BlogDetails />
          </Layout>
        ),
      },
    
  ]
);

export { router };
