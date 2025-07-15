import { Route, Routes } from "react-router";
import {
  AboutUsPage,
  AllProductsPage,
  HomePage,
  NotFoundPage,
  ProductDetailsPage,
  FavouritesPage,
  ShippingPage,
  ReturnPage,
  GarantPage,
  CatalogPage,
  BasketPage,
  BlogPage,
  ContactsPage,
} from "./pages";
import { MainLayout, MainLayoutTwo } from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/return" element={<ReturnPage />} />
        <Route path="/garant" element={<GarantPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products-details" element={<ProductDetailsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="/" element={<MainLayoutTwo />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    </Routes>
  );
}

export default App;
