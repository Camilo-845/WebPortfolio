import type { ArticleFrontmatter, ProjectFrontmatter, EducationFrontmatter} from "./types";
import { getShortDescription, processContentInDir} from "./utils";

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

export const featuredEducation = (
  await processContentInDir<EducationFrontmatter, EducationFrontmatter>(
    "education",
    (data) => {
      const shortDescription = getShortDescription(
        data.frontmatter.description,
      );
      return {
        institution: data.frontmatter.institution,
        degree: data.frontmatter.degree,
        start_date: data.frontmatter.start_date,
        end_date: data.frontmatter.end_date,
        description: shortDescription,
        filename: `/education/${data.frontmatter.filename}`,
        order: data.frontmatter.order,
      };
    },
  )
).sort((a, b) => a.order - b.order);