package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.Jeu_4DAO;
import com.takima.backskeleton.DTO.Jeu_4OptionDTO;
import com.takima.backskeleton.DTO.ReponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Jeu_4Service {
    private final Jeu_4DAO jeu_4DAO;

    public Jeu_4OptionDTO GetQuestion(int index) {
        return jeu_4DAO.GetQuestion(index);
    }

    public ReponseDTO VerifierReponse(String OptionChoisi, Integer index) {
        int res = OptionChoisi.compareTo(jeu_4DAO.GetReponse(index));
        return new ReponseDTO((res == 0));
    }
}
