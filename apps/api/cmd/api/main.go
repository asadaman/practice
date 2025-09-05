package main

import (
    "database/sql"
    "log"
    "net/http"
    "os"
    "time"

    "github.com/go-chi/chi/v5"
    "github.com/go-chi/chi/v5/middleware"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    port := getenv("API_PORT", "8080")
    dsn := os.Getenv("DB_DSN")

    var db *sql.DB
    var err error
    if dsn != "" {
        db, err = sql.Open("mysql", dsn)
        if err != nil {
            log.Fatalf("db open: %v", err)
        }
        db.SetMaxOpenConns(10)
        db.SetMaxIdleConns(5)
        db.SetConnMaxLifetime(30 * time.Minute)
        if pingErr := db.Ping(); pingErr != nil {
            log.Printf("warn: db ping failed: %v", pingErr)
        }
    } else {
        log.Printf("DB_DSN not set; running without DB connection")
    }

    r := chi.NewRouter()
    r.Use(middleware.RequestID)
    r.Use(middleware.RealIP)
    r.Use(middleware.Logger)
    r.Use(middleware.Recoverer)

    r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        w.WriteHeader(http.StatusOK)
        _, _ = w.Write([]byte(`{"status":"ok"}`))
    })

    srv := &http.Server{
        Addr:    ":" + port,
        Handler: r,
    }
    log.Printf("API listening on :%s", port)
    log.Fatal(srv.ListenAndServe())
}

func getenv(k, def string) string {
    if v := os.Getenv(k); v != "" {
        return v
    }
    return def
}

