package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "jeu_3")
@NoArgsConstructor
@Getter
public class Jeu_3 {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "jeu_3_id_seq")
    private Long id;
    @Column(name = "reponse")
    private String reponse;
    private String question;
}
