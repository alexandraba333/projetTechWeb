package com.takima.backskeleton.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class Jeu_3OptionDTO {
    private Long id;
    private String question;
}
