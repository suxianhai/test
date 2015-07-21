package main.java.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import main.java.model.User;
import main.java.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/index")
	public String index(){
		System.out.println("start");
		User user = new User();
		user.setUserName("suxianhai");
		user.setPassword("123456");
		userService.insert(user);
		System.out.println(user.toString());
		System.out.println("end");
		return "index";
	}
}
