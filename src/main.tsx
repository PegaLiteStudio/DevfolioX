import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AnimatePresence>
      <App />
      <Toaster />
    </AnimatePresence>
  </QueryClientProvider>
);
