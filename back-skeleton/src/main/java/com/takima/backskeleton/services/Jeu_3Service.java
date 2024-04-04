package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.Jeu_3DAO;
import com.takima.backskeleton.models.Jeu_3;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class Jeu_3Service {
    private final Jeu_3DAO jeu_3DAO;

    public List<Jeu_3> findAll() {
        return jeu_3DAO.findAll();
    }
}
