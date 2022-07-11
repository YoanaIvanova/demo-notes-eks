package com.example.notes.api.repository;

import com.example.notes.api.model.Note;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin
public interface NoteRepository extends PagingAndSortingRepository<Note, Long> {

}