import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ProjectHero } from '../components/project-details/ProjectHero';
import { ProjectOverview } from '../components/project-details/ProjectOverview';
import { ProjectGallery } from '../components/project-details/ProjectGallery';
import { ProjectResults } from '../components/project-details/ProjectResults';

export function ProjectDetailsPage() {
  const { id } = useParams();

  // Get project data from centralized source
  const project = projectsData.find(p => String(p.id) === String(id)) || projectsData[0];

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectGallery images={project.images} title={project.title} gallerySections={project.gallerySections} />
      <ProjectResults results={project.results} />
    </div>
  );
}
