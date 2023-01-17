package com.ana.test;

import com.ana.test.security.bean.Role;
import com.ana.test.security.bean.User;
import com.ana.test.security.service.facade.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import com.ana.test.security.common.AuthoritiesConstants;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

@EnableSwagger2
@SpringBootApplication
public class TestApplication {

    public static ConfigurableApplicationContext ctx;

    public static void main(String[] args) {
        ctx = SpringApplication.run(TestApplication.class, args);
    }

    public static ConfigurableApplicationContext getCtx() {
        return ctx;
    }


    @Bean
    public CommandLineRunner init(UserService userService) {

        return (args) -> {
            if (false) {

                User userForAdmin = new User("admin@ana.org", "admin@123");
                Role roleForAdmin = new Role();
                roleForAdmin.setAuthority(AuthoritiesConstants.admin);
                if (userForAdmin.getRoles() == null)
                    userForAdmin.setRoles(new ArrayList<>());
                userForAdmin.getRoles().add(roleForAdmin);
                userService.save(userForAdmin);


                User userForSuperadmin = new User("superadmin@ana.org","superadmin@123");
                Role roleForSuperadmin = new Role();
                roleForSuperadmin.setAuthority(AuthoritiesConstants.superadmin);
                if (userForSuperadmin.getRoles() == null)
                    userForSuperadmin.setRoles(new ArrayList<>());
                userForSuperadmin.getRoles().add(roleForSuperadmin);
                userService.save(userForSuperadmin);


                User userForSousadmin = new User("sousadmin@ana.org","sousadmin@123");
                Role roleForSousadmin = new Role();
                roleForSousadmin.setAuthority(AuthoritiesConstants.sousadmin);
                if (userForSousadmin.getRoles() == null)
                    userForSousadmin.setRoles(new ArrayList<>());
                userForSousadmin.getRoles().add(roleForSousadmin);
                userService.save(userForSousadmin);


                User userForCommercial = new User("commercial@ana.org","commercial@123");
                Role roleForCommercial = new Role();
                roleForCommercial.setAuthority(AuthoritiesConstants.commercial);
                if (userForCommercial.getRoles() == null)
                    userForCommercial.setRoles(new ArrayList<>());
                userForCommercial.getRoles().add(roleForCommercial);
                userService.save(userForCommercial);

                User userForAnonymous = new User("anonymous@ana.org", "anonymous@123");
                Role roleForAnonymous = new Role();
                roleForAnonymous.setAuthority(AuthoritiesConstants.anonymous);
                if (userForAnonymous.getRoles() == null)
                    userForAnonymous.setRoles(new ArrayList<>());
                userForAnonymous.getRoles().add(roleForAnonymous);
                userService.save(userForAnonymous);

            }
        };
    }

}
