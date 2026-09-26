# Wordle - A Word Guessing Game

A browser-based Wordle-style word guessing game built with React and Vite.

## Overview

This project recreates the core Wordle gameplay loop: players attempt to identify a hidden word within a limited number of guesses and receive visual feedback after each attempt.

The codebase is organized into React components, custom hooks, services, and assets so the game logic and UI remain separated.

## Features

- Interactive word-guessing gameplay
- Limited attempts per round
- Color-coded feedback for guesses
- Play-again / replay flow
- Responsive interactive interface
- Reusable React components
- Custom hooks for game behavior
- Separate service layer for game-related logic

## Tech Stack

- **Frontend:** React 19
- **Build Tool:** Vite
- **Language:** JavaScript / JSX
- **Routing:** React Router
- **Tooling:** ESLint, Vite React plugin

## Project Structure

```text
src/
├── components/   # Reusable game UI components
├── hooks/        # Game state and interaction hooks
├── services/     # Game-related service logic
├── assets/       # Static assets
├── App.jsx       # Main application component
├── main.jsx      # Application entry point
└── index.css     # Global styling
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Focus

This project is a compact example of building an interactive browser game with React component composition, stateful gameplay, reusable hooks, and a Vite-based development workflow.
