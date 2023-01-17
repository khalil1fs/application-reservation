import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";
import { User } from "../models/user";
import { Role } from "../models/role";

const users: User[] = [
  {
    id: 1,
    img: "assets/images/user/admin.jpg",
    username: "admin@ana.org",
    password: "admin@123",
    firstName: "Khalil",
    lastName: "admin",
    role: Role.Admin,
    token: "admin-token",
  },
  {
    id: 2,
    img: "assets/images/user/doctor.jpg",
    username: "superadmin@ana.org",
    password: "superadmin@123",
    firstName: "Khalil",
    lastName: "ABOULOUANE",
    role: Role.SuperAdmin,
    token: "SuperAdmin-token",
  },
  {
    id: 3,
    img: "assets/images/user/doctor.jpg",
    username: "sousadmin@ana.org",
    password: "sousadmin@123",
    firstName: "Khalil",
    lastName: "ABOULOUANE",
    role: Role.SousAdmin,
    token: "SousAdmin-token",
  },
  {
    id: 4,
    img: "assets/images/user/doctor.jpg",
    username: "commercial@ana.org",
    password: "commercial@123",
    firstName: "Khalil",
    lastName: "ABOULOUANE",
    role: Role.Commercial,
    token: "Commercial-token",
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(handleRoute));

    function handleRoute() {
      switch (true) {
        case url.endsWith("/authenticate") && method === "POST":
          return authenticate();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) {
        return error("Username or password is incorrect");
      }
      return ok({
        id: user.id,
        img: user.img,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        token: user.token,
      });
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function isLoggedIn() {
      return headers.get("Authorization") === "Bearer fake-jwt-token";
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
