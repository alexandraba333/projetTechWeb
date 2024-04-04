package com.takima.backskeleton.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class Jeu_1OptionDTO {
    private Long id;
    private String image;
    private String option1;
    private String option2;
    private String option3;
}
