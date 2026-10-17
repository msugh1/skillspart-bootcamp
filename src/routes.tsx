import { createBrowserRouter } from "react-router";
import SiteLayout from "./components/layout/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ApplyPage from "./pages/ApplyPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";
import CybersecurityPage from "./pages/CybersecurityPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProgrammesPage from "./pages/ProgrammesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SiteLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "programmes", Component: ProgrammesPage },
      { path: "programmes/cybersecurity", Component: CybersecurityPage },
      { path: "contact", Component: ContactPage },
      { path: "apply", Component: ApplyPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
