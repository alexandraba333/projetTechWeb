package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "jeu_4")
@NoArgsConstructor
@Getter
public class Jeu_4 {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "jeu_4_id_seq")
    private Long id;
    private String question;
    @Column(name = "reponse")
    private String response;
    private String image;
}
