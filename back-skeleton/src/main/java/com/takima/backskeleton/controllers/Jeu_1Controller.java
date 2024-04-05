package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.Jeu_1OptionDTO;
import com.takima.backskeleton.DTO.ReponseDTO;
import com.takima.backskeleton.services.Jeu_1Service;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequestMapping("jeu_1")
@RestController
@RequiredArgsConstructor
public class Jeu_1Controller {
    private final Jeu_1Service jeu_1Service;

    @GetMapping("/{index}")
    public Jeu_1OptionDTO AfficherLaQuestion(@PathVariable Integer index) {
        Jeu_1OptionDTO jeu2OptionDTO = jeu_1Service.GetQuestion(index);
        return jeu2OptionDTO;
    }

    @GetMapping("/{OptionChoisi}/{index}")
    public ReponseDTO VerifierReponse(@PathVariable String OptionChoisi, @PathVariable Integer index) {
        ReponseDTO ReponseDTO = jeu_1Service.VerifierReponse(OptionChoisi, index);
        return ReponseDTO;
    }
}
