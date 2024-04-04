package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Jeu_3;
import com.takima.backskeleton.services.Jeu_3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("jeu_3")
@RestController
@RequiredArgsConstructor
public class Jeu_3Controller {
    private final Jeu_3Service jeu_3Service;

    @GetMapping("/questionsw")
    public List<Jeu_3> getAllCourses() {
        return jeu_3Service.findAll();
    }
}
