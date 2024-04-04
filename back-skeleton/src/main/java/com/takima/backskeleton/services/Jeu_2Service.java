package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.Jeu_2DAO;
import com.takima.backskeleton.DTO.Jeu_2OptionDTO;
import com.takima.backskeleton.DTO.ReponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Jeu_2Service {
    private final Jeu_2DAO jeu_2DAO;

    public Jeu_2OptionDTO GetQuestion(int index) {
        return jeu_2DAO.GetQuestion(index);
    }

    public ReponseDTO VerifierReponse(String OptionChoisi, Integer index) {
        int res = OptionChoisi.compareTo(jeu_2DAO.GetReponse(index));
        return new ReponseDTO((res == 0));
    }
}
