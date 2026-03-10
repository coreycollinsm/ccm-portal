import { SectionWrapper } from "@/components/sections";
import { LoginForm } from "@/components/forms";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - CCM Portal",
};

const Page = () => {
  return (
    <main>
      <SectionWrapper className="section-wrap justify-center">
        <LoginForm />
      </SectionWrapper>
    </main>
  );
};

export default Page;
