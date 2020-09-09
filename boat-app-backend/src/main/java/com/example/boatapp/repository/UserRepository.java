package com.example.boatapp.repository;

import com.example.boatapp.entity.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {

    User findByUsername(String username);

    Boolean existsUserByUsername(String username);
}
