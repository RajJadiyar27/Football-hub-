# Setting Up the Soccer App API Key

To enable live scores functionality in the Soccer Fan App, you need to obtain an API key from API-FOOTBALL.

## Getting an API Key

1. Visit [RapidAPI](https://rapidapi.com/api-sports/api/api-football/) and create an account if you don't have one
2. Subscribe to the API-FOOTBALL API plan (they offer a free tier with limited requests)
3. Once subscribed, you'll have access to your API key in the RapidAPI dashboard

## Configuring the App

1. In the root of your project, create a file named `.env.local`
2. Add the following line to the file, replacing `your-api-key-here` with your actual API key:

```
NEXT_PUBLIC_API_FOOTBALL_KEY=your-api-key-here
```

3. Restart your development server to apply the changes

## API Usage Notes

- The free tier of API-FOOTBALL typically includes 100 requests per day
- The app refreshes live scores every 60 seconds when in live mode
- To conserve API requests, consider:
  - Using the "Today's Matches" view unless you specifically want to see live scores
  - Selecting specific leagues rather than viewing all leagues at once

## Troubleshooting

If you encounter any issues with the API:

1. Verify your API key is correctly set in the `.env.local` file
2. Check the RapidAPI dashboard to ensure you haven't exceeded your quota
3. The app will automatically fall back to mock data if the API is unavailable

## Data Provided by API-FOOTBALL

The live scores feature shows:
- Match status (live, half time, full time, etc.)
- Current score
- Match time/elapsed minutes
- Recent match events (goals, cards, substitutions)
- Team information and logos 