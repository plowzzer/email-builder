import { EmailBuilderProvider } from "@/contexts/emailContext";
import { ViewProvider } from "@/contexts/viewContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
    <EmailBuilderProvider>
      <ViewProvider>
        <Component {...pageProps} />;
      </ViewProvider>
    </EmailBuilderProvider>
  </>
}
