import Header from "@/components/Header";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-brand-900 focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">Hello</main>
    </>
  );
}
