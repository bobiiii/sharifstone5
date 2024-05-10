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
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <HomeScreen />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/where-to-buy",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <WhereToBuy />
            </Layout>
          </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <OurCollection />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/quartz-collection/:variety2/",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <OurCollection2 />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/quartz-collection/:collectionName/:varietyName",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <ProductDescription />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/about",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <AboutUs />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/warranty-n-support",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <WarrantyAndSupport />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/contact",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <ContactScreen />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/blog",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <BlogScreen />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/blog/:blogName",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <BlogDetails />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "*",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <PageNotFound />
            </Layout>
          </Suspense>
        </ErrorBoundary >
      ),
    },


  ]
);

export { router };