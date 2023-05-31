package com.example.servder;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
@CrossOrigin("http://localhost:4200")
public class MainController {

  @Autowired
  private UserRepository userRepository;
  
  @PostMapping
  public User add(@RequestBody User user) {
    User savedUser = userRepository.save(user);
    return savedUser;
  }

  @GetMapping

  public List<User> get() {
    return userRepository.findAll();
  } 
}
