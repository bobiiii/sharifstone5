
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
import Login from "../Screens/Login/Login";
import Dashboard from "../Screens/Dashboard/Dashboard";
import CreateCollection from "../Screens/CreateCollection/CreateCollection";
import ViewCollection from "../Screens/ViewCollection/ViewCollection";
import CreateVisualizer from "../Screens/CreateVisualizer/createVisualizer";
import ViewVisualizer from "../Screens/ViewVisualizer/viewVisualizer";
import WhereToBuy from "../Screens/WhereToBuy";

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
      path: "/kitchen-visualizer?/:color",
      element: (
          <KitchenVisualizer />
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
      path: "/collection?/:collection",
      element: (
        <Layout>
          <OurCollection />
        </Layout>
      ),
    },
    {
      path: "/product-description?/:collection?/:color",
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
        path: "/login",
        element: (
          <Layout>
            <Login />
          </Layout>
        ),
      },
      {
        path: "/admin-dashboard",
        element: (
          <Layout>
            <Dashboard />
          </Layout>
        ),
      },
      {
        path: "/admin-dashboard/create-collection",
        element: (
          <Layout>
            <CreateCollection />
          </Layout>
        ),
      },
      {
        path: "/admin-dashboard/create-visualizer",
        element: (
          <Layout>
            <CreateVisualizer />
          </Layout>
        ),
      },
      {
        path: "/admin-dashboard/collections",
        element: (
          <Layout>
            <ViewCollection />
          </Layout>
        ),
      },
      {
        path: "/admin-dashboard/visualizer",
        element: (
          <Layout>
            <ViewVisualizer />
          </Layout>
        ),
      },
  ]
);

export { router };
