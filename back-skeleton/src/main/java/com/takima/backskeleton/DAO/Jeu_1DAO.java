package com.takima.backskeleton.DAO;

import com.takima.backskeleton.DTO.Jeu_1OptionDTO;
import com.takima.backskeleton.models.Jeu_1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface Jeu_1DAO extends JpaRepository<Jeu_1, Long> {
    @Query("SELECT new com.takima.backskeleton.DTO.Jeu_1OptionDTO(id,image,option1,option2,option3) FROM Jeu_1 WHERE id = ?1")
    Jeu_1OptionDTO GetQuestion(int index);

    @Query("SELECT response FROM Jeu_1 WHERE id = ?1")
    String GetReponse(int index);
}
