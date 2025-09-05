# Split Bill App (Monorepo)

React + TypeScript (Vite) / Go (chi + sqlc) / MySQL のモノレポ雛形です。

## ディレクトリ構成
- `apps/web`: フロントエンド (Vite + React + TS + Tailwind)
- `apps/api`: バックエンド (Go + chi)、DBマイグレーションと sqlc 設定含む
- `infra/`: docker-compose などインフラ関連

## セットアップ

1) 依存関係のインストール
- web: `cd apps/web && npm install`
- api: `cd apps/api && go mod tidy`

2) 環境変数
- ルートに `.env` を作成（例は `.env.example` 参照）
- web 側は Vite 環境変数 `VITE_...` を使用

3) 開発起動
- DB: `docker compose -f infra/docker-compose.yml up -d db`
- API: `cd apps/api && go run ./cmd/api`
- Web: `cd apps/web && npm run dev`

4) マイグレーション/コード生成
- `apps/api/internal/db/migrations` に SQL があります。
- `apps/api/sqlc.yaml` を用意済み。`sqlc` がある場合は `cd apps/api && sqlc generate` で型を生成できます。

## メモ
- UI は Tailwind ベースで、後で shadcn/ui コンポーネントを追加する前提の構成です。
- API は chi で最低限のルーティング（`/health`）と雛形ハンドラを配置しています。
