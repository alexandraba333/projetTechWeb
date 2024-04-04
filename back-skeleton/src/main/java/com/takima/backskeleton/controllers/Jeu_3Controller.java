package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.Jeu_3OptionDTO;
import com.takima.backskeleton.DTO.ReponseDTO;
import com.takima.backskeleton.services.Jeu_3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequestMapping("jeu_3")
@RestController
@RequiredArgsConstructor
public class Jeu_3Controller {
    private final Jeu_3Service jeu_3Service;

    @GetMapping("/{index}")
    public Jeu_3OptionDTO AfficherLaQuestion(@PathVariable Integer index) {
        Jeu_3OptionDTO jeu2OptionDTO = jeu_3Service.GetQuestion(index);
        return jeu2OptionDTO;
    }

    @GetMapping("/reponse")
    public ReponseDTO VerifierReponse(String OptionChoisi, Integer index) {
        ReponseDTO Jeu_3ReponseDTO = jeu_3Service.VerifierReponse("pha", 1);
        return Jeu_3ReponseDTO;
    }
}
