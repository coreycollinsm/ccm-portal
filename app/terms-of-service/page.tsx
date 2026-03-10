import { ButtonLink } from "@/components/ui";
import { SectionWrapper } from "@/components/sections";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - CCM Portal",
  description:
    "Review the terms and conditions governing the use of CoreyCollinsM.com and related services, including acceptable use, limitations of liability, and user responsibilities.",
};

const Page = () => {
  return (
    <main className="w-full">
      <SectionWrapper>
        <div className="flex justify-center">
          <div className="py-10 px-5 flex flex-col gap-8 max-w-220">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl">Terms of Service</h1>

              <p className="leading-7">
                Welcome to <strong>Portal.CoreyCollinsM.com</strong>. By
                accessing or using this website, you agree to be bound by the
                following Terms of Service. These terms outline the rules and
                guidelines for using this website and any related services or
                communications.
              </p>

              <p className="leading-7">
                This website is owned and operated by Corey Collins and is
                intended to showcase software development work, projects, and
                professional information. By continuing to use this website, you
                agree to comply with these terms.
              </p>
            </div>

            <PolicySection title="Use of the Website">
              <p className="leading-7">
                You agree to use this website only for lawful purposes and in a
                way that does not infringe on the rights of others or restrict
                their use of the site.
              </p>

              <ul className="flex flex-col gap-2 pl-5 list-disc leading-7 mt-3">
                <li>Do not attempt to gain unauthorized access to systems.</li>
                <li>Do not attempt to disrupt or damage the website.</li>
                <li>
                  Do not submit malicious, fraudulent, or misleading data.
                </li>
                <li>
                  Do not use the website in any way that violates applicable
                  laws or regulations.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="Intellectual Property">
              <p className="leading-7">
                All content on this website, including code samples, project
                descriptions, text, graphics, and design elements, is the
                property of Corey Collins unless otherwise stated.
              </p>

              <p className="leading-7">
                You may view or reference content for personal or professional
                purposes, but reproduction, redistribution, or commercial use
                without permission is prohibited.
              </p>
            </PolicySection>

            <PolicySection title="Third-Party Services">
              <p className="leading-7">
                This website may integrate with or link to third-party services
                such as hosting providers, analytics systems, or external APIs.
                These services operate under their own policies and terms.
              </p>

              <p className="leading-7">
                CoreyCollinsM.com is not responsible for the practices or
                policies of third-party platforms.
              </p>
            </PolicySection>

            <PolicySection title="Disclaimer">
              <p className="leading-7">
                The content provided on this website is for informational and
                professional portfolio purposes only.
              </p>

              <p className="leading-7">
                While reasonable efforts are made to ensure accuracy, no
                guarantees are made regarding completeness, reliability, or
                suitability of the information provided.
              </p>
            </PolicySection>

            <PolicySection title="Limitation of Liability">
              <p className="leading-7">
                Under no circumstances shall the website owner be liable for any
                damages arising from the use or inability to use this website,
                including but not limited to indirect, incidental, or
                consequential damages.
              </p>
            </PolicySection>

            <PolicySection title="Changes to These Terms">
              <p className="leading-7">
                These Terms of Service may be updated periodically to reflect
                operational, legal, or technical changes. Updates will be posted
                on this page with a revised effective date.
              </p>
            </PolicySection>

            <PolicySection title="Contact">
              <p className="leading-7">
                If you have questions regarding these Terms of Service, you may
                reach out using the contact form available on this website.
              </p>
            </PolicySection>

            <p className="text-sm ">
              <em>Effective Date: March 06, 2026</em>
            </p>

            <ButtonLink
              backwards
              buttonId="terms-returnhome"
              className="self-start"
              href="/"
              page="terms-of-service"
              style="secondary"
              text="Return Home"
            />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl">{title}</h2>
      <div className="leading-7">{children}</div>
    </section>
  );
};

export default Page;
