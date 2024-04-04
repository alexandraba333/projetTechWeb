package com.takima.backskeleton.DAO;

import com.takima.backskeleton.DTO.Jeu_2OptionDTO;
import com.takima.backskeleton.models.Jeu_2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface Jeu_2DAO extends JpaRepository<Jeu_2, Long> {
    @Query("SELECT new com.takima.backskeleton.DTO.Jeu_2OptionDTO(id,question,option1,option2,option3) FROM Jeu_2 WHERE id = ?1")
    Jeu_2OptionDTO GetQuestion(int index);
}
