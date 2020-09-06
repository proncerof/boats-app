package com.example.boatapp.repository;

import com.example.boatapp.entity.Boat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoatRepository extends PagingAndSortingRepository<Boat, Long> {

    @Query("select b from Boat b where b.name like %?1% or b.description like %?1%")
    Page<Boat> findAllByNameOrDescriptionLike( String search, Pageable page);
}
