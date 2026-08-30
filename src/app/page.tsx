import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TerminalWindow } from "@/components/TerminalWindow";
import { AboutPane } from "@/components/panes/AboutPane";
import { InfraPane } from "@/components/panes/InfraPane";
import { LinksPane } from "@/components/panes/LinksPane";
import { ProjectsPane } from "@/components/panes/ProjectsPane";
import { ServicesPane } from "@/components/panes/ServicesPane";

export default function HomePage() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <section className="container-page pt-14" aria-label="Portfolio terminal">
          <TerminalWindow
            panes={[
              { id: "about", content: <AboutPane /> },
              { id: "services", content: <ServicesPane /> },
              { id: "infra", content: <InfraPane /> },
              { id: "projects", content: <ProjectsPane /> },
              { id: "links", content: <LinksPane /> },
            ]}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
