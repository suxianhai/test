package main.java.controller;

import org.codehaus.jackson.map.Module;
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
	public String index(Module module){
		System.out.println("start");
		User user = userService.selectByPrimaryKey(1);
		System.out.println(user);
		System.out.println("end");
		return "index";
	}
}
