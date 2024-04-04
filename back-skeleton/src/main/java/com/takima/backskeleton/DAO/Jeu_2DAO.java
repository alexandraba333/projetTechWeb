package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Jeu_2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface Jeu_2DAO extends JpaRepository<Jeu_2, Long> {
    @Query("SELECT Jeu_2.question FROM Jeu_2 WHERE id = ?1")
    String GetQuestion(int index);
}
