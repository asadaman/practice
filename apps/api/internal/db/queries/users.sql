-- name: CreateUser :execresult
INSERT INTO users (name, email) VALUES (?, ?);

-- name: GetUserByEmail :one
SELECT id, name, email, created_at FROM users WHERE email = ? LIMIT 1;

