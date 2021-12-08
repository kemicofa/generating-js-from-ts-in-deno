# Generating JS From TS in DENO

## Build

```
deno bundle --config ./front/greet/mod.ts ./public/js/build/greet.js
```

## Run

```
deno run --allow-net --allow-read ./server/main.ts
```