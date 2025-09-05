.PHONY: db-up db-down api web-dev

db-up:
	docker compose -f infra/docker-compose.yml up -d db

db-down:
	docker compose -f infra/docker-compose.yml down

api:
	cd apps/api && go run ./cmd/api

web-dev:
	cd apps/web && npm run dev

