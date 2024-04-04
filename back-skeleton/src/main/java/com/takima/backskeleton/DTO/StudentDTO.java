package com.takima.backskeleton.DTO;

import com.takima.backskeleton.models.Jeu_3;
import com.takima.backskeleton.models.Major;
import lombok.Builder;
import lombok.Getter;

import java.time.Instant;
import java.util.List;
@Builder
@Getter
public class StudentDTO {
    private String firstName;
    private String lastName;
    private Instant birthdate;
    private List<Jeu_3> courses;
    private Major major;
}
