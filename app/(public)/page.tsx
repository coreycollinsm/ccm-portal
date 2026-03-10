// Components
import { SectionWrapper } from "@/components/sections";
import {
  BlackParagraphCardWithButton,
  BulletListCard,
  DedicatedLinkCard,
  ImageWithTextBottomCard,
} from "@/components/ui";

// Links
import { socialLinks } from "@/config";
const gitHubLink = socialLinks.github.href;

import HeroImage from "@/assets/home-hero.webp";

export default function Home() {
  return (
    <div>
      <main>
        <SectionWrapper className="section-wrap">
          <ImageWithTextBottomCard
            backgroundAlignment={{ alignX: "center", alignY: "top" }}
            className="lg:flex-2"
            header={"Welcome to the CCM Portal"}
            paragraph={
              "This portal is a continuation of my full stack showcase to view and manage data and analytics tracking for the coreycollinsm.com property."
            }
            src={HeroImage}
          />

          <DedicatedLinkCard
            className="lg:flex-1"
            cta={{
              buttonId: "ccm-home-githubExternalLink",
              href: gitHubLink,
              page: "home",
              text: "View This Repo on GitHub",
            }}
            header="This Site Is A Full Stack Application "
            paragraph="I've built this site as a proof-of-capability with a public repo on GitHub. This site includes basic analytics, form handling, AI-enhanced spam filtering, MongoDB blacklisting, and integration with Asana as a workflow tool."
          />
        </SectionWrapper>

        <SectionWrapper className="section-wrap">
          <BulletListCard
            bulletListAsTextArray={[
              {
                header: "Frontend",
                listItems: ["Next.js", "React", "TypeScript", "Tailwind"],
              },
              {
                header: "Backend",
                listItems: ["Node.js", "Express", "REST APIs"],
              },
              {
                header: "Database",
                listItems: ["MongoDB - Atlas", "Mongoose"],
              },
              {
                header: "Integrations",
                listItems: ["Gemini AI", "Asana API"],
              },
              {
                header: "Infrastructure",
                listItems: ["Netlify", "Render", "Environment Config"],
              },
            ]}
            className="flex-1"
            header="Technologies Of This Portal"
            subtitle="I have leveraged the below technologies when deploying the CCM platform (including this portal site)."
          />
          <BlackParagraphCardWithButton
            cta1={{
              href: "/Corey%20Collins%20-%20Resume.pdf",
              buttonId: "ccm-home-jobsearch-resume",
              darkMode: true,
              download: true,
              page: "home",
              text: "Download My Resume",
            }}
            cta2={{
              href: "/contact",
              buttonId: "ccm-home-jobsearch-contact",
              darkMode: true,
              page: "home",
              style: "secondary",
              text: "Contact Me",
            }}
            header="Let's Build Something Together"
            subtitle="I'm currently seeking a full-time Full Stack Developer role
              where I can build product features and ship systems end-to-end."
          >
            <p>
              My experience building tools combined with over a decade of
              managing projects and initiatives with measureable progress makes
              me a powerhouse for any team looking for someone who can just get
              started. I am a lifetime learner and my experience with technology
              is a direct result of my passion to never stop learning new
              things.
            </p>
            <p>
              If you are looking for someone with project experience who you can
              trust to be a driving force on your team, someone who encourages
              others, who accepts critique and stays motivated, I&apos;m
              you&apos;re guy.
            </p>
          </BlackParagraphCardWithButton>
        </SectionWrapper>
      </main>
    </div>
  );
}
