import axios from "axios";
import { Request, Response, NextFunction } from "express";

const PROTECTED_ROUTES: any = {
    "/game": true,
    "/forum": true,
    "/profile": true,
    "/leaderboard": true,
}

const YANDEX_AUTH_URL = "https://ya-praktikum.tech/api/v2/auth/user";

export async function auth(req: Request, res: Response, next: NextFunction) {
  const isProtectedRoute = PROTECTED_ROUTES[req.url];

  if (isProtectedRoute) {
    try {
      const { data: user } = await axios.get(YANDEX_AUTH_URL, {
        headers: { Cookie: req.cookies },
      });

      res.locals.user = user;

      return next();
    } catch (err: any) {
      console.log(err.message);
      res.redirect("/auth/login");

      return;
    }
  }

  next();
}
