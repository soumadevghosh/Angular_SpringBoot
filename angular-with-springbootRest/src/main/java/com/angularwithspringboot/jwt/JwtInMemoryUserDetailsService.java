package com.angularwithspringboot.jwt;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.angularwithspringboot.model.User;
import com.angularwithspringboot.repository.UserRepository;
import com.angularwithspringboot.service.UserService;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

//	@Autowired
//	private UserRepository repository;
	
	@Autowired
	private UserService userService;
//	
//  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
//
//  static {
//    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
//        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
//    inMemoryUserList.add(new JwtUserDetails(2L, "souma", "$2a$10$SkrzE7GTnFo3Nx/38OuDm.iLhWC.MPvCWC0/mxZLKims6BmpOghiS", "ROLE_USER_2"));
//  }

	  @Override
	  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	//    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
	//        .filter(user -> user.getUsername().equals(username)).findFirst();
	//    if (!findFirst.isPresent()) {
	//      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
	//    }
	//    return findFirst.get();
		  User user = userService.findByUserName(username);
		  if(user == null) {
			  throw new UsernameNotFoundException(String.format("User_not_found '%s'.",username));
		  }else {
			  return create(user);
		  }
	  }

	private static JwtUserDetails create(User user) {
		// TODO Auto-generated method stub
		List<SimpleGrantedAuthority> roles = new ArrayList<SimpleGrantedAuthority>();
		roles.add(new SimpleGrantedAuthority(user.getRole()));
		return new JwtUserDetails(user.getId(),user.getName(),user.getPassword(),roles);
	}

}


