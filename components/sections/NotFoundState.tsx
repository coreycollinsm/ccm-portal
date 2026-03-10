import { ButtonLink } from "@/components/ui";
import { SectionWrapper } from "./SectionWrapper";

type NotFoundStateProps = {
  buttonId: string;
  returnHref: string;
  returnText: string;
};

export const NotFoundState = ({
  buttonId,
  returnHref,
  returnText,
}: NotFoundStateProps) => {
  return (
    <main>
      <SectionWrapper>
        <div className="card padding round flex flex-col gap-4 justify-between min-h-120">
          <div>
            <h2>404 Not Found</h2>
            <h3 className="mt-2 text-(--faded-gray)">
              This page does not exist
            </h3>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:justify-between items-start md:items-end">
            <p className="text-sm text-(--medium-gray) max-w-120">
              I work hard to clean up old links and redirect traffic. This link
              no longer exists. If you believe this to be an error, feel free to
              reach out via my contact form.
            </p>
            <ButtonLink
              backwards
              href={returnHref}
              buttonId={buttonId}
              page="404"
              text={returnText}
            />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};
