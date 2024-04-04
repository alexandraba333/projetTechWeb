package com.takima.backskeleton.DAO;

import com.takima.backskeleton.DTO.Jeu_4OptionDTO;
import com.takima.backskeleton.models.Jeu_4;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface Jeu_4DAO extends JpaRepository<Jeu_4, Long> {
    @Query("SELECT new com.takima.backskeleton.DTO.Jeu_4OptionDTO(id,image,question) FROM Jeu_4 WHERE id = ?1")
    Jeu_4OptionDTO GetQuestion(int index);

    @Query("SELECT response FROM Jeu_4 WHERE id = ?1")
    String GetReponse(int index);
}
