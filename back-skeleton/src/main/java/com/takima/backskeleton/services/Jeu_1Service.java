package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.Jeu_1DAO;
import com.takima.backskeleton.DTO.Jeu_1OptionDTO;
import com.takima.backskeleton.DTO.ReponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Jeu_1Service {
    private final Jeu_1DAO jeu_1DAO;

    public Jeu_1OptionDTO GetQuestion(int index) {
        return jeu_1DAO.GetQuestion(index);
    }

    public ReponseDTO VerifierReponse(String OptionChoisi, Integer index) {
        int res = OptionChoisi.compareTo(jeu_1DAO.GetReponse(index));
        return new ReponseDTO((res == 0));
    }
}
