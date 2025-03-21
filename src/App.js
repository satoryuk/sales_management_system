import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";

// Layouts
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";

// Help Pages
import Faq from "./Pages/Help/Faq";
import Contact from "./Pages/Help/Contact";
import NotFound from "./Pages/Root/NotFound";

// Auth Pages
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
