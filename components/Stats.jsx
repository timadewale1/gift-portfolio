"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 10,
    text: "Executive Reports & Memos",
  },
  {
    num: 5,
    text: "Research & Strategy Briefs",
  },
  {
    num: 75,
    text: "Emails Managed Daily",
  },
  {
    num: 35,
    text: "Meetings Streamlined Monthly",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <div className="text-4xl xl:text-6xl font-extrabold flex items-baseline">
                  <CountUp end={item.num} duration={5} delay={2} />
                  <span className="text-2xl xl:text-4xl">+</span>
                </div>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-accent/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
