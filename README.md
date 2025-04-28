# Football Hub

A modern web application for soccer fans to track live scores, standings, and news from top football leagues.

## Features

- Live scores from top 5 leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1)
- Match events tracking (goals, cards, substitutions)
- League standings
- Team information
- News updates
- Interactive quizzes
- Fantasy football features

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Icons
- API-FOOTBALL (RapidAPI)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- API-FOOTBALL key from RapidAPI (see [API Setup Guide](API-SETUP.md))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/soccer-fan-app.git
cd soccer-fan-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your API key:
```
NEXT_PUBLIC_API_FOOTBALL_KEY=your-api-key-here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
soccer-fan-app/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   ├── config/          # Configuration files
│   ├── services/        # API and data services
│   └── styles/          # Global styles
├── public/              # Static assets
├── .gitignore
├── API-SETUP.md        # API configuration guide
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [API-FOOTBALL](https://rapidapi.com/api-sports/api/api-football/) for providing football data
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework 
