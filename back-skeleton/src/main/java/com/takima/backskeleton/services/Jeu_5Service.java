package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.Jeu_5DAO;
import com.takima.backskeleton.DTO.Jeu_5OptionDTO;
import com.takima.backskeleton.DTO.ReponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Jeu_5Service {
    private final Jeu_5DAO jeu_5DAO;

    public Jeu_5OptionDTO GetQuestion(int index) {
        return jeu_5DAO.GetQuestion(index);
    }

    public ReponseDTO VerifierReponse(String OptionChoisi, Integer index) {
        int res = OptionChoisi.compareTo(jeu_5DAO.GetReponse(index));
        return new ReponseDTO((res == 0));
    }
}
