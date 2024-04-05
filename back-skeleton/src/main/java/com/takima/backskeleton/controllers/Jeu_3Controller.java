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

    @GetMapping("/{OptionChoisi}/{index}")
    public ReponseDTO VerifierReponse(@PathVariable String OptionChoisi, @PathVariable Integer index) {
        ReponseDTO ReponseDTO = jeu_3Service.VerifierReponse(OptionChoisi, index);
        return ReponseDTO;
    }
}
