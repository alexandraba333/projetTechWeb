package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "jeu_2")
@NoArgsConstructor
@Getter
public class Jeu_2 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String option1;
    private String option2;
    private String option3;
    private String response;
    private String question;
}
