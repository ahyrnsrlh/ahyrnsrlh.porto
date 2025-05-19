import Image from "next/image";
import { useTranslations } from "next-intl";

import Tooltip from "@/common/components/elements/Tooltip";
import MDXComponent from "@/common/components/elements/MDXComponent";
import { STACKS } from "@/common/constants/stacks";
import { ProjectItem } from "@/common/types/projects";

import ProjectLink from "./ProjectLink";

const ProjectDetail = ({ title, image, stack, link, github, content }: any) => {
  const t = useTranslations("ProjectsPage");

  // Pastikan stack selalu array agar tidak error saat .map
  const safeStacks = Array.isArray(stack) ? stack : [];

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row lg:flex-row lg:items-start">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mb-1 text-sm text-neutral-700 dark:text-neutral-300">
            {t("tech_stack")} :{" "}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {safeStacks.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tambahkan link demo dan source code */}
      <div className="flex gap-4 mt-2">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            {t("live_demo_text")}
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-700 hover:underline"
          >
            {t("source_code_text")}
          </a>
        )}
      </div>

      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={400}
          className="transition duration-500 hover:scale-[1.04]"
          priority
        />
      </div>

      {content ? (
        <div className="mt-5 space-y-6 leading-[1.8] dark:text-neutral-300">
          <MDXComponent>{content}</MDXComponent>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectDetail;
