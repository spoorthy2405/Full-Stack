package com.Hartford.MTM.controller;


import com.Hartford.MTM.entity.Project;
import com.Hartford.MTM.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects")

public class ProjectController {
    private final ProjectService projectService;
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }
    @PostMapping("/save")
    public ResponseEntity createProject(@RequestBody Project project){
        projectService.saveProject(project);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }
}
