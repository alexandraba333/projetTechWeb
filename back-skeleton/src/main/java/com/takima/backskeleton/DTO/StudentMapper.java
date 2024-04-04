package com.takima.backskeleton.DTO;

import com.takima.backskeleton.models.Student;

import java.io.IOException;

public class StudentMapper {
    public static Student fromDto(StudentDTO dto, Long id) throws IOException {
        return new Student.Builder()
                .id(id)
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .birthdate(dto.getBirthdate())
                .courses(dto.getCourses())
                .major(dto.getMajor())
                .build();
    }

    public static StudentDTO toDto(Student student) {
        return StudentDTO.builder()
                .firstName(student.getFirstName())
                .lastName(student.getLastName())
                .birthdate(student.getBirthdate())
                .courses(student.getCourses())
                .major(student.getMajor())
                .build();
    }
}
