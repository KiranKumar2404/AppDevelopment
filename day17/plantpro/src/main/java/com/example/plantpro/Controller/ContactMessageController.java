package com.example.plantpro.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.plantpro.Model.ContactMessage;
import com.example.plantpro.Service.ContactMessageService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/contact")
public class ContactMessageController {
    private final ContactMessageService contactMessageService;

    @Autowired
    public ContactMessageController(ContactMessageService contactMessageService) {
        this.contactMessageService = contactMessageService;
    }

    @GetMapping
    public List<ContactMessage> getAllMessages() {
        return contactMessageService.getAllMessages();
    }

    @GetMapping("/{id}")
    public Optional<ContactMessage> getMessageById(@PathVariable Long id) {
        return contactMessageService.getMessageById(id);
    }

    @PostMapping
    public ContactMessage saveMessage(@RequestBody ContactMessage message) {
        return contactMessageService.saveMessage(message);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {
        contactMessageService.deleteMessage(id);
    }
}
