export type ProjectFrontmatter = {
  /**
   * The title of the project
   */
  title: string;

  /**
   * The description of the project
   */
  description: string;

  /**
   * The tags of the project
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The GitHub URL of the project
   */
  githubUrl?: string;

  /**
   * The live URL of the project
   */
  liveUrl?: string;

  /**
   * Whether the project should be featured on the homepage
   */
  featured?: boolean;

  /**
   * The date the project was created or started in W3C format
   * (this will determine the sort order of the projects)
   */
  timestamp: string;

  /**
   * The URL of the project on the website
   * (eg. https://zaggonaut.dev/projects/my-project)
   */
  filename: string;
};

export type ArticleFrontmatter = {
  /**
   * The title of the article
   */
  title: string;

  /**
   * THe summary description of the article
   */
  description: string;

  /**
   * The tags of the article
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The estimated time to read the article in minutes
   */
  time: number;

  /**
   * Whether the article should be featured on the homepage
   */
  featured: boolean;

  /**
   * The timestamp the article was published in W3C format
   */
  timestamp: string;

  /**
   * The URL of the article on the website
   * (eg. https://zaggonaut.dev/blog/my-article)
   */
  filename: string;
};

export type EducationFrontmatter = {
  /**
   * The name of the institution
   */
  institution: string;

  /**
   * The degree or certificate received
   */
  degree: string;

  /**
   * The date the education start in W3C format
   */
  start_date: string;

  /**
   * The date the education ended in W3C format
   */
  end_date: string;

  /**
   * The URL of the degree or certificate
   */
  degree_url: string;

  /**
   * The sumary description of the education
   */
  description: string;
};

export type CertificationFrontmatter = {
  /**
   * The name of the certification
   */
  name: string;

  /**
   * The institution that provided the certification
   */
  institution: string;

  /**
   * The date the certification was received in W3C format
   */
  date: string;

  /**
   * The URL of the certification
   */
  url: string;
};

export type SkillsFrontmatter = {
  /**
   * The name of the skill
   */
  name: string;

  /**
   * The level of the skill
   */
  icon?: string;
};