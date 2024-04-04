package com.takima.backskeleton.DAO;

import com.takima.backskeleton.DTO.Jeu_5OptionDTO;
import com.takima.backskeleton.models.Jeu_5;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface Jeu_5DAO extends JpaRepository<Jeu_5, Long> {
    @Query("SELECT new com.takima.backskeleton.DTO.Jeu_5OptionDTO(id,question,option1,option2,option3) FROM Jeu_5 WHERE id = ?1")
    Jeu_5OptionDTO GetQuestion(int index);

    @Query("SELECT response FROM Jeu_5 WHERE id = ?1")
    String GetReponse(int index);
}
