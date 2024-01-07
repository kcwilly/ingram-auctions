import {
  authMiddleware,
  withAuth,
} from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function middleware(req: Request) {
  return withAuth(req);
}

// Protected Routes/Pages: Admin Interface.
export const config = {
  matcher: ["/dashboard", "/about"],
};