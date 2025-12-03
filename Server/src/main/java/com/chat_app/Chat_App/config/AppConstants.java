package com.chat_app.Chat_App.config;

public class AppConstants {
    public static final String FRONT_END_BASE_URL =
            System.getenv("FRONTEND_URL") != null
                    ? System.getenv("FRONTEND_URL")
                    : "http://localhost:5173";
}
