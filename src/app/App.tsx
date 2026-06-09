import { BrowserRouter, Routes, Route } from "react-router";
import { SiteHeader, SiteFooter } from "./components/site-chrome";
// import { HomePage } from "./components/home-page";
import { AboutPage } from "./components/about-page";
import { MinimalPage } from "./components/minimal-page";
import { DonatePage } from "./components/donate-page";
import { GuidesPage } from "./components/guides-page";
import { MethodsPage } from "./components/methods-page";
import { MethodDetailPage } from "./components/method-detail-page";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-paper text-ink">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<MinimalPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/methods" element={<MethodsPage />} />
          <Route path="/methods/:slug" element={<MethodDetailPage />} />
          {/* <Route path="/home-verbose" element={<HomePage />} /> */}
          <Route path="*" element={<MinimalPage />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
