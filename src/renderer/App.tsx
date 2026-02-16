import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/layouts/main";
import HomePage from "../pages";

export default function App() {
  const location = useLocation();

  return (
    <Layout path={location.pathname}>
      <AnimatePresence
        mode="wait"
        initial
        onExitComplete={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
