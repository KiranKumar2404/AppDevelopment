package com.example.plantpro.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.plantpro.Model.ContactMessage;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {

}
