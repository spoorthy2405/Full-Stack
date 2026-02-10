package com.hartford.onetomany.dto.request;


import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
@Getter
@Builder
public class CreateUserRequest {
    @NotBlank(message = "Name is Required")
    private String name;
}
