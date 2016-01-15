package team.tks.moim.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class UserController {

	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String login(Model model) {
		log.debug("i want login~~~");
		return "login";
	}
	@RequestMapping(value="/logout", method=RequestMethod.GET)
	public String logout(Model model) {
		log.debug("i want logut~~~");
		return "login";
	}
	
}
