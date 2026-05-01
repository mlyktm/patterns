# patterns

---

## Prerequisites
Make sure you have these installed before starting:

- [Node.js](https://nodejs.org/) v18+
- [Python](https://www.python.org/) 3.11+
- [Expo Go](https://expo.dev/client) on your phone
- A [Supabase](https://supabase.com) account

---

## 1. Backend setup

```bash
cd backend

python -m venv venv
source venv/bin/activate

pip install -r requirements.txt
```

Create a `.env` file inside `backend/`:

```env
SUPABASE_URL=your-project-url
SUPABASE_SERVICE_KEY=your-service-role-key
```

Run the server:

```bash
uvicorn main:app --reload
```

## 2. Mobile setup

Open a new terminal tab, then:

```bash
cd mobile
npm install
```

Create a `.env` file inside `mobile/`:

```env
EXPO_PUBLIC_SUPABASE_URL=your-project-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
EXPO_PUBLIC_API_URL=http://YOUR_LOCAL_IP:8000
```

> Find your local IP by running `ifconfig | grep inet`

Run the app:

```bash
npx expo start
```

Scan the QR code with Expo Go on your phone. Make sure your phone and computer are on the same WiFi network.

---

## Environment Variables

Supabase keys can be found in your project dashboard under **Settings → Data API**.

| Variable | Where to find it |
|---|---|
| `SUPABASE_URL` | Project URL |
| `SUPABASE_SERVICE_KEY` | `service_role` key — backend only, never share |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | `anon public` key |