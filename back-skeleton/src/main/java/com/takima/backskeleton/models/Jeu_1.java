package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "jeu_1")
@NoArgsConstructor
@Getter
public class Jeu_1 {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "jeu_1_id_seq")
    private Long id;
    @Column(name = "option_1")
    private String option1;
    @Column(name = "option_2")
    private String option2;
    @Column(name = "option_3")
    private String option3;
    @Column(name = "reponse")
    private String response;
    private String image;
}
