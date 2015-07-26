package main.java.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.github.pagehelper.PageInfo;
import main.java.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	
	@SuppressWarnings({ "unused", "rawtypes" })
	@RequestMapping(value = "/index")
	public String index(){
		System.out.println("start");
		PageInfo pageInfo = userService.findList(null, 1, 20);
		System.out.println("end");
		return "index";
	}
}
