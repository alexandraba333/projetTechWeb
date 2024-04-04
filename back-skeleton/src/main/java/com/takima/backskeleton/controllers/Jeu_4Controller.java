package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.Jeu_4OptionDTO;
import com.takima.backskeleton.DTO.ReponseDTO;
import com.takima.backskeleton.services.Jeu_4Service;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequestMapping("jeu_4")
@RestController
@RequiredArgsConstructor
public class Jeu_4Controller {
    private final Jeu_4Service jeu_4Service;

    @GetMapping("/{index}")
    public Jeu_4OptionDTO AfficherLaQuestion(@PathVariable Integer index) {
        Jeu_4OptionDTO jeu2OptionDTO = jeu_4Service.GetQuestion(index);
        return jeu2OptionDTO;
    }

    @GetMapping("/reponse")
    public ReponseDTO VerifierReponse(String OptionChoisi, Integer index) {
        ReponseDTO Jeu_4ReponseDTO = jeu_4Service.VerifierReponse("pha", 1);
        return Jeu_4ReponseDTO;
    }
}
