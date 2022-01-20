import Navigo from "navigo";
import home from "./pages/home";
import header from "./template/header";
import footer from "./template/footer";
import signin from "./pages/signin";
import signup from "./pages/signup";
import dashboard from "./pages/admin/dashboard";
import new_edit from "./pages/admin/news_edit";
const router = new Navigo("/", { linksSelector: "a" });

const render = (page) => {
  document.getElementById("header").innerHTML = header.print();
  document.getElementById("page").innerHTML = page.print();
  // document.getElementById("footer").innerHTML = footer.print();
}


router.on({
  "/": () => {
    render(home);
  },
  "/signin": () => {
    render(signin)
  },
  "/signup": () => {
    render(signup)
  },
  "/admin/dashboard": () => {
    render(dashboard)
  },
  "/admin/new_edit": () => {
    render(new_edit)
  }
})

router.resolve();