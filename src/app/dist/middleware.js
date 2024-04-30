"use strict";
exports.__esModule = true;
exports.config = void 0;
var server_1 = require("@clerk/nextjs/server");
exports["default"] = server_1.clerkMiddleware({
    matcher: "/" // Hauptseite ist öffentlich zugänglich
});
exports.config = {
    matcher: [
        '/((?!.*\\..*|_next).*)',
        '/',
        '/(api|trpc)(.*)'
    ]
};
