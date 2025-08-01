'use server';

import { adjustLayout } from '@/ai/flows/adaptive-layout';
import type { Project } from '@/types';
import { z } from 'zod';

const projectSchema = z.array(z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
}));

export async function getAdjustedLayout(preferences: string, projects: Project[]): Promise<{ sortedProjects: Project[] | null; error: string | null }> {
  try {
    const projectDetails = JSON.stringify(projects.map(({ id, title, description, tags }) => ({ id, title, description, tags })));
    const result = await adjustLayout({ userPreferences: preferences, projectDetails });
    
    const orderedTitles: string[] = [];
    const lowercasedResult = result.adjustedLayout.toLowerCase();
    
    const titleMap = new Map<string, Project>();
    projects.forEach(p => titleMap.set(p.title.toLowerCase(), p));

    const words = lowercasedResult.split(/[\s,.;:()]+/);
    const foundTitles = new Set<string>();

    words.forEach(word => {
        const matchedTitle = Array.from(titleMap.keys()).find(t => word.includes(t) || t.includes(word));
        if (matchedTitle && !foundTitles.has(matchedTitle)) {
            orderedTitles.push(matchedTitle);
            foundTitles.add(matchedTitle);
        }
    });

    if(orderedTitles.length === 0) {
      projects.forEach(p => {
        if(lowercasedResult.includes(p.title.toLowerCase()) && !foundTitles.has(p.title.toLowerCase())) {
          orderedTitles.push(p.title.toLowerCase());
          foundTitles.add(p.title.toLowerCase());
        }
      });
    }

    if (orderedTitles.length > 0) {
      const sortedProjects = orderedTitles.map(title => titleMap.get(title)).filter(Boolean) as Project[];
      const unsortedProjects = projects.filter(p => !orderedTitles.includes(p.title.toLowerCase()));
      return { sortedProjects: [...sortedProjects, ...unsortedProjects], error: null };
    }

    return { sortedProjects: projects, error: "Could not determine a new layout. Displaying default order." };
  } catch (e) {
    console.error(e);
    return { sortedProjects: null, error: 'An error occurred while adjusting the layout.' };
  }
}
