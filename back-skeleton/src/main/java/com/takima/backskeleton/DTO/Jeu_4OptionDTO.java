package com.takima.backskeleton.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class Jeu_4OptionDTO {
    private Long id;
    private String image;
    private String question;
}
