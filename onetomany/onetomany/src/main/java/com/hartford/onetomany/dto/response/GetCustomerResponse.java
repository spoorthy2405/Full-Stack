package com.hartford.onetomany.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class GetCustomerResponse {
    private String name;
    private Integer age;
}
