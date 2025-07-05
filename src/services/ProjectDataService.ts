import { ProjectData, socialMediaProjects, brezelProject, palmProject } from '@/data/projectsData';

/**
 * Optimized data service to avoid repeated array.find() operations
 * Creates lookup maps for O(1) access instead of O(n) searches
 */
class ProjectDataService {
  private static socialMediaProjectMap: Map<string, ProjectData>;
  private static allProjectsMap: Map<string, ProjectData>;
  private static initialized = false;

  private static initialize() {
    if (this.initialized) return;

    // Create lookup maps for fast access
    this.socialMediaProjectMap = new Map(
      socialMediaProjects.map(project => [project.id, project])
    );

    // Combine all projects for unified access
    const allProjects = [...socialMediaProjects, brezelProject, palmProject];
    this.allProjectsMap = new Map(
      allProjects.map(project => [project.id, project])
    );

    this.initialized = true;
  }

  /**
   * Get a social media project by ID
   * @param id Project identifier
   * @returns Project data or undefined if not found
   */
  static getSocialMediaProject(id: string): ProjectData | undefined {
    this.initialize();
    return this.socialMediaProjectMap.get(id);
  }

  /**
   * Get any project by ID
   * @param id Project identifier
   * @returns Project data or undefined if not found
   */
  static getProject(id: string): ProjectData | undefined {
    this.initialize();
    return this.allProjectsMap.get(id);
  }

  /**
   * Get all social media projects
   * @returns Array of social media projects
   */
  static getAllSocialMediaProjects(): ProjectData[] {
    return socialMediaProjects;
  }

  /**
   * Get projects by category
   * @param category Project category
   * @returns Array of projects in the category
   */
  static getProjectsByCategory(category: string): ProjectData[] {
    this.initialize();
    return Array.from(this.allProjectsMap.values()).filter(
      project => project.category === category
    );
  }

  /**
   * Get project color palette
   * @param id Project identifier
   * @returns Color palette or default colors
   */
  static getProjectColors(id: string): { primary: string; secondary: string; accent: string } {
    const project = this.getProject(id);
    return project?.brand.colorPalette || {
      primary: '#ffffff',
      secondary: '#cccccc',
      accent: '#999999'
    };
  }

  /**
   * Check if project exists
   * @param id Project identifier
   * @returns Boolean indicating if project exists
   */
  static projectExists(id: string): boolean {
    this.initialize();
    return this.allProjectsMap.has(id);
  }

  /**
   * Get project IDs for validation
   * @returns Array of all project IDs
   */
  static getAllProjectIds(): string[] {
    this.initialize();
    return Array.from(this.allProjectsMap.keys());
  }
}

export default ProjectDataService;