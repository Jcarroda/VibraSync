// src/middleware.ts (o /middleware.ts si no usas /src)

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico).*)", // Protege todas las rutas excepto archivos estáticos
  ],
};
