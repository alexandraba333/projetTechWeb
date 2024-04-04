package com.takima.backskeleton.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class Jeu_2OptionDTO {
    private Long id;
    private String question;
    private String option1;
    private String option2;
    private String option3;
}
