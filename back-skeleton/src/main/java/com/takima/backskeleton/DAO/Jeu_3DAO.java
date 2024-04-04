package com.takima.backskeleton.DAO;

import com.takima.backskeleton.DTO.Jeu_3OptionDTO;
import com.takima.backskeleton.models.Jeu_3;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface Jeu_3DAO extends JpaRepository<Jeu_3, Long> {
    @Query("SELECT new com.takima.backskeleton.DTO.Jeu_3OptionDTO(id,question) FROM Jeu_3 WHERE id = ?1")
    Jeu_3OptionDTO GetQuestion(int index);

    @Query("SELECT reponse FROM Jeu_3 WHERE id = ?1")
    String GetReponse(int index);
}
