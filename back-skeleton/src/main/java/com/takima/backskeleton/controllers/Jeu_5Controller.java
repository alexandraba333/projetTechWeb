package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.Jeu_5OptionDTO;
import com.takima.backskeleton.DTO.ReponseDTO;
import com.takima.backskeleton.services.Jeu_5Service;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequestMapping("jeu_5")
@RestController
@RequiredArgsConstructor
public class Jeu_5Controller {
    private final Jeu_5Service jeu_5Service;

    @GetMapping("/{index}")
    public Jeu_5OptionDTO AfficherLaQuestion(@PathVariable Integer index) {
        Jeu_5OptionDTO jeu2OptionDTO = jeu_5Service.GetQuestion(index);
        return jeu2OptionDTO;
    }

    @GetMapping("/{OptionChoisi}/{index}")
    public ReponseDTO VerifierReponse(@PathVariable String OptionChoisi, @PathVariable Integer index) {
        ReponseDTO ReponseDTO = jeu_5Service.VerifierReponse(OptionChoisi, index);
        return ReponseDTO;
    }
}
