package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.Jeu_3DAO;
import com.takima.backskeleton.DTO.Jeu_3OptionDTO;
import com.takima.backskeleton.DTO.ReponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Jeu_3Service {
    private final Jeu_3DAO jeu_3DAO;

    public Jeu_3OptionDTO GetQuestion(int index) {
        return jeu_3DAO.GetQuestion(index);
    }

    public ReponseDTO VerifierReponse(String OptionChoisi, Integer index) {
        int res = OptionChoisi.compareTo(jeu_3DAO.GetReponse(index));
        return new ReponseDTO((res == 0));
    }
}
