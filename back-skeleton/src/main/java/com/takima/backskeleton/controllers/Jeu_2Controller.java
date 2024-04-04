package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.Jeu_2OptionDTO;
import com.takima.backskeleton.models.Jeu_2;
import com.takima.backskeleton.services.Jeu_2Service;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("jeu_2")
@RestController
@RequiredArgsConstructor
public class Jeu_2Controller {
    private final Jeu_2Service jeu_2Service;

    @GetMapping("/{index}")
    public Jeu_2OptionDTO AfficherLaQuestion(@PathVariable Integer index) {
        Jeu_2OptionDTO jeu2OptionDTO = jeu_2Service.GetQuestion(index);
        return jeu2OptionDTO;
    }
}
