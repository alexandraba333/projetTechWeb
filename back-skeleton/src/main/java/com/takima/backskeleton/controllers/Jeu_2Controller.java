package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Jeu_2;
import com.takima.backskeleton.services.Jeu_2Service;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("jeu_2")
@RestController
@RequiredArgsConstructor
public class Jeu_2Controller {
    private final Jeu_2Service jeu_2Service;


    public String AfficherLaQuestion(int index) {
        return jeu_2Service.GetQuestion(index);
    }
}
