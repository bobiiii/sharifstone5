
import {
  createBrowserRouter,
} from "react-router-dom";
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
import PageNotFound from "../components/PageNotFound";
import ErrorBoundary from "../components/Errorboundary";


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
        <ErrorBoundary>
          <Layout>
            <HomeScreen />
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/where-to-buy",
      element: (
        <ErrorBoundary>
          <Layout>
            <WhereToBuy />
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/visualizer",
      element: (
        <ErrorBoundary>
          <KitchenVisualizer />
        </ErrorBoundary>
      ),
    },
    {
      path: "/kitchen/select-category",
      element: (
        <ErrorBoundary>
          <SelectCategory />
        </ErrorBoundary>
      ),

    },
    {
      path: "/visualizer/:product/:color",
      element: (
        <ErrorBoundary>
          <VisualizerMain />
        </ErrorBoundary>
      ),

    },


    {
      path: "/quartz-collection",
      element: (
        <ErrorBoundary>
          <Layout>
            <OurCollection />
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/quartz-collection/:variety2/",
      element: (
        <ErrorBoundary>
          <Layout>
            <OurCollection2 />
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/quartz-collection/:collectionName/:varietyName",
      element: (
        <ErrorBoundary>
          <Layout>
            <ProductDescription />
          </Layout>
        </ErrorBoundary>
      ),
    },

    {
      path: "/about",
      element: (
        <ErrorBoundary>
          <Layout>
            <AboutUs />
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/warranty-n-support",
      element: (
        <ErrorBoundary>
          <Layout>
            <WarrantyAndSupport />
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/contact",
      element: (
        <ErrorBoundary>
          <Layout>
            <ContactScreen />
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/blog",
      element: (
        <ErrorBoundary>
          <Layout>
            <BlogScreen />
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/blog/:blogName",
      element: (
        <ErrorBoundary>
          <Layout>
            <BlogDetails />
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "*",
      element: (
        <ErrorBoundary>
          <Layout>
            <PageNotFound />
          </Layout>
        </ErrorBoundary>
      ),
    },


  ]
);

export { router };
