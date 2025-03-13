import type { ArticleFrontmatter, ProjectFrontmatter, EducationFrontmatter, CertificationFrontmatter} from "./types";
import { getShortDescription, processContentInDir} from "./utils";
import { GLOBAL } from "./variables";

export const featuredProjects = (
  await processContentInDir<ProjectFrontmatter, ProjectFrontmatter>(
    "projects",
    (data) => {
      const shortDescription = getShortDescription(
        data.frontmatter.description,
      );
      return {
        title: data.frontmatter.title,
        description: shortDescription,
        tags: data.frontmatter.tags,
        githubUrl: data.frontmatter.githubUrl,
        liveUrl: data.frontmatter.liveUrl,
        featured: data.frontmatter.featured,
        timestamp: data.frontmatter.timestamp,
        filename: `/projects/${data.frontmatter.filename}`,
      };
    },
  )
)
  .filter((project) => project.featured)
  .sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
    return dateB.getTime() - dateA.getTime();
  });

export const featuredArticles = (
    await processContentInDir<ArticleFrontmatter, ArticleFrontmatter>(
      "blog",
      (data) => {
        const shortDescription = getShortDescription(
          data.frontmatter.description,
        );
        return {
          title: data.frontmatter.title,
          description: shortDescription,
          tags: data.frontmatter.tags,
          time: data.frontmatter.time,
          featured: data.frontmatter.featured,
          timestamp: data.frontmatter.timestamp,
          filename: `/blog/${data.frontmatter.filename}`,
        };
      },
    )
  )
    .filter((project) => project.featured)
    .sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateB.getTime() - dateA.getTime();
    });

export const featuredEducation: EducationFrontmatter[] = (
  GLOBAL.education?.map((education) => {
    return {
      description: getShortDescription(education.description),
      institution: education.institution,
      degree: education.degree,
      start_date: education.start_date ?? '',
      end_date: education.end_date,
      degree_url: education.degree_url, // Add the missing 'degree_url' property
    };
  }) ?? []
);

export const featuredCertification: CertificationFrontmatter[] = (
  GLOBAL.certificates?.map((certificate) => {
    return {
      name: certificate.name,
      institution: certificate.institution,
      date: certificate.date ?? '',
      url: certificate.url, // Add the missing 'degree_url' property
    };
  }) ?? []
);

export const featuredSkills = GLOBAL.skills;