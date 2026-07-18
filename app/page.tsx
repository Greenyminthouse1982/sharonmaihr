import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedArticles from "@/components/FeaturedArticles";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import "./home-mobile.css";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SearchBar />
        <FeaturedArticles />
        <Features />
      </main>

      <Footer />
    </>
  );
}