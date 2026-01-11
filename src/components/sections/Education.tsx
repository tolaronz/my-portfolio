import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { education } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TEducation } from "../../types";
import { config } from "../../constants/config";

const EducationCard: React.FC<TEducation> = (item) => {
  const isImageOnly = item.variant === "image";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={item.date}
      iconStyle={{ background: item.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={item.icon}
            alt={item.schoolName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      {isImageOnly ? (
        <div className="overflow-hidden rounded-xl border border-[#2a2352] bg-[#140f2d]">
          {item.image && (
            <img
              src={item.image}
              alt={`${item.schoolName} campus`}
              className="h-56 w-full object-cover object-[50%_60%]"
              loading="lazy"
            />
          )}
        </div>
      ) : (
        <>
          <div>
            <h3 className="text-[24px] font-bold text-white">{item.degree}</h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {item.schoolName}
            </p>
            <p className="text-secondary text-[14px]">{item.location}</p>
          </div>

          {item.summary && (
            <p className="text-secondary mt-3 text-[14px] leading-[22px]">
              {item.summary}
            </p>
          )}

          {item.points.length > 0 && (
            <ul className="ml-5 mt-5 list-disc space-y-2">
              {item.points.map((point, index) => (
                <li
                  key={`education-point-${index}`}
                  className="text-white-100 pl-1 text-[14px] tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
