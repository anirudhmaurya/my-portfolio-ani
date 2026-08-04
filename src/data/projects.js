export const projects = [
  {
    id: "algo-trading",
    title: "Algo Trading System",
    shortDesc: "A backtesting & live trading engine built for quantitative strategies.",
    fullDesc: `## Overview
A production-grade algorithmic trading platform that supports strategy backtesting, live order execution, and portfolio analytics.

## Features
- Modular strategy engine (SMA, MACD, Bollinger Bands, EMA Cross)
- Real-time market data ingestion via Upstox API
- Backtesting orchestrator with P&L reporting
- Risk management with position sizing and stop-loss logic
- Observability layer with event tracking

## Architecture
The system is built with a layered architecture:
- **Data Ingestion Layer** — Fetches historical and live OHLCV data
- **Strategy Layer** — Pluggable strategy implementations
- **Orchestrator** — Coordinates strategy execution and lifecycle
- **Result Collector** — Aggregates and formats trade results
`,
    tech: ["Python", "FastAPI", "Redis", "Pandas", "Upstox API"],
    github: "https://github.com/anirudhmaurya",
    demo: null,
    demoVideo: null,
    featured: true,
    date: "2026-06",
    category: "Backend",
  },
  {
    id: "system-design-cache",
    title: "Distributed Cache Layer",
    shortDesc: "A Redis-backed distributed caching layer with cache invalidation strategies.",
    fullDesc: `## Overview
A high-performance caching middleware designed for microservices, implementing multiple cache invalidation patterns.

## Features
- TTL-based cache expiration
- Write-through and write-behind caching strategies
- Cache stampede prevention using probabilistic early expiration
- Metrics dashboard for cache hit/miss ratio

## Tech Decisions
- Redis for in-memory storage
- Python asyncio for non-blocking I/O
- Prometheus + Grafana for observability
`,
    tech: ["Python", "Redis", "asyncio", "Docker", "Prometheus"],
    github: "https://github.com/anirudhmaurya",
    demo: null,
    demoVideo: null,
    featured: true,
    date: "2026-03",
    category: "Systems",
  },
  {
    id: "portfolio-website",
    title: "Developer Portfolio",
    shortDesc: "This very portfolio — a multi-page React app with blogs and project showcases.",
    fullDesc: `## Overview
A modern, data-driven portfolio website built with React and React Router.

## Features
- Multi-page routing with React Router v6
- Data-driven: add projects/blogs by editing one JS file
- Dark mode design with glassmorphism
- Tech blog with markdown rendering
- Project detail pages with GitHub-style layout

## Design
Built with Vanilla CSS, Google Fonts (Inter + Fira Code), and React Icons.
`,
    tech: ["React", "React Router", "JavaScript", "CSS", "React Icons"],
    github: "https://github.com/anirudhmaurya",
    demo: "https://anirudhmaurya.dev",
    demoVideo: null,
    featured: true,
    date: "2026-08",
    category: "Frontend",
  },
];
