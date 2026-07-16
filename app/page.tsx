import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedArticles from "@/components/FeaturedArticles";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
  <Header />

  <main className="min-h-screen bg-white">
    <Hero />
    <SearchBar />

    <section id="featured-articles">
      <FeaturedArticles />
    </section>

    <Features />
  </main>

  <Footer />
  </>
  );
}