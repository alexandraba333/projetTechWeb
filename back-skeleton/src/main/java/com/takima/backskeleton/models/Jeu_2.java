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
    @Column(name="option_1")
    private String option1;
    @Column(name="option_2")
    private String option2;
    @Column(name="option_3")
    private String option3;
    private String response;
    private String question;
}
