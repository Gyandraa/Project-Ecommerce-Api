import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CartProvider } from "./context/CartContext";
import { WishProvider } from "./context/WishContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WishProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishProvider>
    </QueryClientProvider>
  </StrictMode>,
);
