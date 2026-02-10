package com.Hartford.MTM.service;


import com.Hartford.MTM.entity.Project;
import com.Hartford.MTM.repository.ProjectREPOSITORY;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    private final ProjectREPOSITORY projectRepository;

    public ProjectService(ProjectREPOSITORY projectRepository) {
        this.projectRepository = projectRepository;
    }
    public void saveProject(Project project) {
        projectRepository.save(project);
    }
}
