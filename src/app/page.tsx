import Image from "next/image";
import forrestKellerHeadshot from "./forrest-keller-headshot.jpg";
import { TypographyP } from "@/components/ui/typography-p";
import { TypographyH1 } from "@/components/ui/typoghraphy-h1";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { Button } from "@/components/ui/button";
import {
  EnvelopeOpenIcon,
  ChatBubbleIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const forrestKellerHeadshotAlt =
  "Forrest Keller looking into camera smiling while hiking Mt. Rose.";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 md:place-content-center">
      <div className="container max-w-screen-lg mx-auto p-5">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row flex-wrap gap-5">
            <div className="sm:max-w-52 overflow-hidden rounded-md">
              <Image
                src={forrestKellerHeadshot}
                alt={forrestKellerHeadshotAlt}
                width={640}
                height={640}
                style={{ objectFit: "contain", objectPosition: "top" }}
                priority
              />
            </div>
            <div className="sm:self-center">
              <TypographyH1>Forrest Keller</TypographyH1>
              <TypographyH2>Computer Science Tutor</TypographyH2>
            </div>
          </div>
          <div>
            <TypographyP>
              <b>
                👋 Hi, I&apos;m Forrest, a private computer science tutor in
                Reno, Nevada.
              </b>
            </TypographyP>
            <TypographyP>
              Born in Redmond, Washington, I grew up abroad attending
              international schools. After finishing the International
              Baccalaureate diploma program at Saigon South International
              School, I returned to the States, earning a Bachelor of Science in
              Computer Science,&nbsp;
              <i>cum laude</i>, from Trinity University in San Antonio, Texas.
              Throughout my time in college, I interned as a software engineer
              for PayPal and a small industrial monitoring company, JCore. I now
              work remotely full time as a software engineer and product manager
              for JCore, and moved to Reno for its amazing proximity to nature.
            </TypographyP>
            <TypographyP>
              Having spent years tinkering with competitive robots, writing
              software at scale, and falling in love with theoretical computer
              science, I&apos;m passionate about helping others discover the joy
              of computer science through deep conceptual understanding.
            </TypographyP>
            <TypographyP>
              If you or your child could benefit from individual personalized
              computer science tutoring, please reach out to me.
            </TypographyP>
            <TypographyP>
              <b>Location:</b> at home, in public, or online
              <br />
              <b>Availability:</b> weekday evenings and weekends
              <br />
              <b>Rate:</b> $50/hr, first session free
              <br />
              <b>Subjects:</b> computer science, programming
              <br />
              <b>Levels:</b> high school, college
            </TypographyP>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <a href="mailto:forrestblackburnkeller@gmail.com">
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
            <Button asChild>
              <a href="tel:720-671-5652">
                <ChatBubbleIcon className="mr-2 h-4 w-4" /> Call
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="https://www.linkedin.com/in/forrest-keller/">
                <LinkedInLogoIcon className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
