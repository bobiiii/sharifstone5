import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

const HomeScreen = lazy(() => import("../Screens/Home"));
const Layout = lazy(() => import("../utils/Layout"));
const OurCollection = lazy(() => import("../Screens/Our_Collection"));
const ProductDescription = lazy(() => import("../Screens/ProductDescription"));
const AboutUs = lazy(() => import("../Screens/AboutUs"));
const WarrantyAndSupport = lazy(() => import("../Screens/WarrantyAndSupport"));
const ContactScreen = lazy(() => import("../Screens/Contact"));
const KitchenVisualizer = lazy(() => import("../Screens/KitchenVisualizer"));
const WhereToBuy = lazy(() => import("../Screens/WhereToBuy"));
const SelectCategory = lazy(() => import("../Screens/NewVisualizer/SelectCategory"));
const BlogScreen = lazy(() => import("../Screens/Blog"));
const OurCollection2 = lazy(() => import("../Screens/Our_Collection2"));
const VisualizerMain = lazy(() => import("../Screens/Visualizer/VisualizerMain"));
const BlogDetails = lazy(() => import("../Screens/Blog/Components/BlogDetails"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));
const ErrorBoundary = lazy(() => import("../components/Errorboundary"));


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
            <Suspense fallback={<div>Loading...</div>}>
              <HomeScreen />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/where-to-buy",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <WhereToBuy />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/visualizer",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <KitchenVisualizer />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/kitchen/select-category",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <SelectCategory />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/visualizer/:product/:color",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <VisualizerMain />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/quartz-collection",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <OurCollection />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/quartz-collection/:variety2/",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <OurCollection2 />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/quartz-collection/:collectionName/:varietyName",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDescription />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/about",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/warranty-n-support",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <WarrantyAndSupport />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/contact",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <ContactScreen />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/blog",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <BlogScreen />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "/blog/:blogName",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <BlogDetails />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      ),
    },
    {
      path: "*",
      element: (
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <PageNotFound />
            </Suspense>
          </Layout>
        </ErrorBoundary >
      ),
    },


  ]
);

export { router };