package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.Jeu_2DAO;
import com.takima.backskeleton.models.Jeu_2;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class Jeu_2Service {
    private final Jeu_2DAO jeu_2DAO;

    public String GetQuestion(int index) {
        return jeu_2DAO.GetQuestion(index);
    }
}
