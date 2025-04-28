// Define constants for default values
const DEFAULT_SEASON = 2024;

// Define basic types
interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Goals {
  for: number;
  against: number;
}

interface TeamRecord {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group?: string;
  form?: string;
  status?: string;
  description?: string | null;
  all: TeamRecord;
  home?: TeamRecord;
  away?: TeamRecord;
  update?: string;
}

interface Fixture {
  id: number;
  status: { short: string; elapsed: number };
  date: string;
  venue: { name: string; city: string };
}

interface FixtureResponse {
  fixture: Fixture;
  teams: {
    home: Team;
    away: Team;
  };
  goals: { home: number; away: number };
  league: { name: string; country: string; logo: string };
}

interface NewsArticle {
  source: { id?: string; name: string };
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

// League names mapping
const LEAGUE_NAMES: Record<string, string> = {
  '39': 'Premier League',
  '140': 'La Liga',
  '135': 'Serie A', 
  '78': 'Bundesliga',
  '61': 'Ligue 1'
};

// League countries mapping
const LEAGUE_COUNTRIES: Record<string, string> = {
  '39': 'England',
  '140': 'Spain',
  '135': 'Italy',
  '78': 'Germany',
  '61': 'France'
};

// League logos mapping
const LEAGUE_LOGOS: Record<string, string> = {
  '39': 'https://media.api-sports.io/football/leagues/39.png',
  '140': 'https://media.api-sports.io/football/leagues/140.png',
  '135': 'https://media.api-sports.io/football/leagues/135.png',
  '78': 'https://media.api-sports.io/football/leagues/78.png',
  '61': 'https://media.api-sports.io/football/leagues/61.png'
};

// Helper functions
function getLeagueName(leagueId: string | number): string {
  const leagueIdStr = leagueId.toString();
  return LEAGUE_NAMES[leagueIdStr] || 'Unknown League';
}

function getLeagueCountry(leagueId: string): string {
  return LEAGUE_COUNTRIES[leagueId] || 'Unknown';
}

function getLeagueLogo(leagueId: string): string {
  return LEAGUE_LOGOS[leagueId] || '';
}

// Function to get today's date in YYYY-MM-DD format
const getTodayDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// STATIC STANDINGS DATA
const STANDINGS_DATA: Record<string, Standing[]> = {
  '39': [
    {
      rank: 1,
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png"
      },
      points: 80,
      goalsDiff: 54,
      group: "Premier League",
      form: "WWWWD",
      status: "same",
      description: "Champions League",
      all: {
        played: 34,
        win: 25,
        draw: 5,
        lose: 4,
        goals: {
          for: 80,
          against: 26
        }
      },
      home: {
        played: 17,
        win: 14,
        draw: 2,
        lose: 1,
        goals: {
          for: 45,
          against: 12
        }
      },
      away: {
        played: 17,
        win: 11,
        draw: 3,
        lose: 3,
        goals: {
          for: 35,
          against: 14
        }
      },
      update: "2024-04-20T00:00:00+00:00"
    },
    {
      rank: 2,
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media.api-sports.io/football/teams/50.png"
      },
      points: 79,
      goalsDiff: 48,
      group: "Premier League",
      form: "DWWWW",
      status: "same",
      description: "Champions League",
      all: {
        played: 34,
        win: 24,
        draw: 7,
        lose: 3,
        goals: {
          for: 83,
          against: 35
        }
      },
      home: {
        played: 17,
        win: 13,
        draw: 3,
        lose: 1,
        goals: {
          for: 49,
          against: 19
        }
      },
      away: {
        played: 17,
        win: 11,
        draw: 4,
        lose: 2,
        goals: {
          for: 34,
          against: 16
        }
      },
      update: "2024-04-20T00:00:00+00:00"
    },
    {
      rank: 3,
      team: {
        id: 40,
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/40.png"
      },
      points: 74,
      goalsDiff: 40,
      group: "Premier League",
      form: "WWDLW",
      status: "same",
      description: "Champions League",
      all: {
        played: 34,
        win: 22,
        draw: 8,
        lose: 4,
        goals: {
          for: 75,
          against: 35
        }
      },
      home: {
        played: 17,
        win: 13,
        draw: 3,
        lose: 1,
        goals: {
          for: 47,
          against: 15
        }
      },
      away: {
        played: 17,
        win: 9,
        draw: 5,
        lose: 3,
        goals: {
          for: 28,
          against: 20
        }
      },
      update: "2024-04-20T00:00:00+00:00"
    },
    {
      rank: 4,
      team: {
        id: 66,
        name: "Aston Villa",
        logo: "https://media.api-sports.io/football/teams/66.png"
      },
      points: 66,
      goalsDiff: 19,
      group: "Premier League",
      form: "WWDLW",
      status: "same",
      description: "Champions League",
      all: {
        played: 34,
        win: 20,
        draw: 6,
        lose: 8,
        goals: {
          for: 70,
          against: 51
        }
      },
      home: {
        played: 17,
        win: 13,
        draw: 2,
        lose: 2,
        goals: {
          for: 45,
          against: 22
        }
      },
      away: {
        played: 17,
        win: 7,
        draw: 4,
        lose: 6,
        goals: {
          for: 25,
          against: 29
        }
      },
      update: "2024-04-20T00:00:00+00:00"
    },
    {
      rank: 5,
      team: {
        id: 47,
        name: "Tottenham",
        logo: "https://media.api-sports.io/football/teams/47.png"
      },
      points: 60,
      goalsDiff: 15,
      group: "Premier League",
      form: "WLWDL",
      status: "same",
      description: "Europa League",
      all: {
        played: 34,
        win: 18,
        draw: 6,
        lose: 10,
        goals: {
          for: 66,
          against: 51
        }
      },
      home: {
        played: 17,
        win: 11,
        draw: 3,
        lose: 3,
        goals: {
          for: 39,
          against: 24
        }
      },
      away: {
        played: 17,
        win: 7,
        draw: 3,
        lose: 7,
        goals: {
          for: 27,
          against: 27
        }
      },
      update: "2024-04-20T00:00:00+00:00"
    }
  ],
  '140': [
    {
      rank: 1,
      team: {
        id: 529,
        name: "Barcelona",
        logo: "https://media.api-sports.io/football/teams/529.png"
      },
      points: 75,
      goalsDiff: 45,
      group: "La Liga",
      form: "WWWLW",
      status: "same",
      description: "Champions League",
      all: {
        played: 33,
        win: 23,
        draw: 6,
        lose: 4,
        goals: {
          for: 70,
          against: 25
        }
      },
      home: {
        played: 17,
        win: 12,
        draw: 3,
        lose: 2,
        goals: {
          for: 40,
          against: 12
        }
      },
      away: {
        played: 16,
        win: 11,
        draw: 3,
        lose: 2,
        goals: {
          for: 30,
          against: 13
        }
      },
      update: "2024-04-20T00:00:00+00:00"
    }
  ],
  '135': [
    {
      rank: 1,
      team: {
        id: 505,
        name: "Inter",
        logo: "https://media.api-sports.io/football/teams/505.png"
      },
      points: 83,
      goalsDiff: 52,
      group: "Serie A",
      form: "WWWWW",
      status: "same",
      description: "Champions League",
      all: {
        played: 33,
        win: 26,
        draw: 5,
        lose: 2,
        goals: {
          for: 75,
          against: 23
        }
      },
      home: {
        played: 17,
        win: 14,
        draw: 2,
        lose: 1,
        goals: {
          for: 45,
          against: 13
        }
      },
      away: {
        played: 16,
        win: 12,
        draw: 3,
        lose: 1,
        goals: {
          for: 30,
          against: 10
        }
      },
      update: "2024-04-20T00:00:00+00:00"
    }
  ],
  '78': [
    {
      rank: 1,
      team: {
        id: 168,
        name: "Bayer Leverkusen",
        logo: "https://media.api-sports.io/football/teams/168.png"
      },
      points: 81,
      goalsDiff: 49,
      group: "Bundesliga",
      form: "WWWWW",
      status: "same",
      description: "Champions League",
      all: {
        played: 33,
        win: 25,
        draw: 6,
        lose: 0,
        goals: {
          for: 72,
          against: 23
        }
      },
      home: {
        played: 17,
        win: 13,
        draw: 4,
        lose: 0,
        goals: {
          for: 42,
          against: 12
        }
      },
      away: {
        played: 16,
        win: 12,
        draw: 2,
        lose: 0,
        goals: {
          for: 30,
          against: 11
        }
      },
      update: "2024-04-20T00:00:00+00:00"
    }
  ],
  '61': [
    {
      rank: 1,
      team: {
        id: 85,
        name: "Paris Saint Germain",
        logo: "https://media.api-sports.io/football/teams/85.png"
      },
      points: 76,
      goalsDiff: 48,
      group: "Ligue 1",
      form: "WWWWW",
      status: "same",
      description: "Champions League",
      all: {
        played: 33,
        win: 23,
        draw: 7,
        lose: 3,
        goals: {
          for: 75,
          against: 27
        }
      },
      home: {
        played: 17,
        win: 12,
        draw: 4,
        lose: 1,
        goals: {
          for: 43,
          against: 14
        }
      },
      away: {
        played: 16,
        win: 11,
        draw: 3,
        lose: 2,
        goals: {
          for: 32,
          against: 13
        }
      },
      update: "2024-04-20T00:00:00+00:00"
    }
  ]
};

// STATIC FIXTURES DATA
const FIXTURES_DATA: Record<string, FixtureResponse[]> = {
  '39': [
    {
      fixture: {
        id: 1027070,
        status: { short: "FT", elapsed: 90 },
        date: "2025-04-20T14:00:00+00:00",
        venue: { name: "Emirates Stadium", city: "London" }
      },
      teams: {
        home: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" },
        away: { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" }
      },
      goals: { home: 3, away: 1 },
      league: { name: "Premier League", country: "England", logo: "https://media.api-sports.io/football/leagues/39.png" }
    },
    {
      fixture: {
        id: 1027071,
        status: { short: "FT", elapsed: 90 },
        date: "2025-04-20T16:30:00+00:00",
        venue: { name: "Etihad Stadium", city: "Manchester" }
      },
      teams: {
        home: { id: 50, name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png" },
        away: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }
      },
      goals: { home: 2, away: 2 },
      league: { name: "Premier League", country: "England", logo: "https://media.api-sports.io/football/leagues/39.png" }
    },
    {
      fixture: {
        id: 1027072,
        status: { short: "FT", elapsed: 90 },
        date: "2025-04-19T14:00:00+00:00",
        venue: { name: "Old Trafford", city: "Manchester" }
      },
      teams: {
        home: { id: 33, name: "Manchester United", logo: "https://media.api-sports.io/football/teams/33.png" },
        away: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png" }
      },
      goals: { home: 1, away: 2 },
      league: { name: "Premier League", country: "England", logo: "https://media.api-sports.io/football/leagues/39.png" }
    }
  ],
  '140': [
    {
      fixture: {
        id: 2027070,
        status: { short: "FT", elapsed: 90 },
        date: "2025-04-20T20:00:00+00:00",
        venue: { name: "Camp Nou", city: "Barcelona" }
      },
      teams: {
        home: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" },
        away: { id: 536, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/536.png" }
      },
      goals: { home: 4, away: 1 },
      league: { name: "La Liga", country: "Spain", logo: "https://media.api-sports.io/football/leagues/140.png" }
    }
  ],
  '135': [
    {
      fixture: {
        id: 3027070,
        status: { short: "FT", elapsed: 90 },
        date: "2025-04-20T18:45:00+00:00",
        venue: { name: "Stadio Giuseppe Meazza", city: "Milano" }
      },
      teams: {
        home: { id: 505, name: "Inter", logo: "https://media.api-sports.io/football/teams/505.png" },
        away: { id: 489, name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" }
      },
      goals: { home: 2, away: 0 },
      league: { name: "Serie A", country: "Italy", logo: "https://media.api-sports.io/football/leagues/135.png" }
    }
  ],
  '78': [
    {
      fixture: {
        id: 4027070,
        status: { short: "FT", elapsed: 90 },
        date: "2025-04-20T16:30:00+00:00",
        venue: { name: "BayArena", city: "Leverkusen" }
      },
      teams: {
        home: { id: 168, name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" },
        away: { id: 165, name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" }
      },
      goals: { home: 3, away: 1 },
      league: { name: "Bundesliga", country: "Germany", logo: "https://media.api-sports.io/football/leagues/78.png" }
    }
  ],
  '61': [
    {
      fixture: {
        id: 5027070,
        status: { short: "FT", elapsed: 90 },
        date: "2025-04-20T19:45:00+00:00",
        venue: { name: "Parc des Princes", city: "Paris" }
      },
      teams: {
        home: { id: 85, name: "Paris Saint Germain", logo: "https://media.api-sports.io/football/teams/85.png" },
        away: { id: 80, name: "Lyon", logo: "https://media.api-sports.io/football/teams/80.png" }
      },
      goals: { home: 4, away: 0 },
      league: { name: "Ligue 1", country: "France", logo: "https://media.api-sports.io/football/leagues/61.png" }
    }
  ]
};

// STATIC NEWS DATA
const NEWS_DATA: NewsArticle[] = [
  {
    source: { id: "bbc-sport", name: "BBC Sport" },
    author: "BBC Sport",
    title: "Arsenal maintain Premier League title push with crucial win",
    description: "Arsenal secured a vital 3-1 win against rivals Tottenham to maintain pressure on Manchester City in the Premier League title race.",
    url: "https://www.bbc.co.uk/sport/football/68856421",
    urlToImage: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_132760487_arsenal_celebration.jpg",
    publishedAt: "2025-04-21T16:30:00Z",
    content: "Arsenal have maintained their title challenge with an impressive North London derby win..."
  },
  {
    source: { id: "the-athletic", name: "The Athletic" },
    title: "Barcelona extend La Liga lead with Lewandowski hat-trick",
    description: "Robert Lewandowski scored three as Barcelona moved five points clear at the top of La Liga with a decisive victory over Sevilla.",
    url: "https://theathletic.com/football/la-liga/barcelona-extend-lead",
    urlToImage: "https://cdn.theathletic.com/app/uploads/2025/04/20162243/lewandowski_celebration-1024x683.jpg",
    publishedAt: "2025-04-20T21:15:00Z",
    content: "Robert Lewandowski's hat-trick helped Barcelona move five points clear at the top of La Liga ahead of Real Madrid..."
  },
  {
    source: { id: "sky-sports", name: "Sky Sports" },
    title: "Inter crowned Serie A champions after Milan derby win",
    description: "Inter Milan have been crowned Serie A champions after a dramatic 2-0 win against city rivals AC Milan.",
    url: "https://www.skysports.com/football/news/inter-milan-serie-a-champions",
    urlToImage: "https://e0.365dm.com/25/04/1600x900/skysports-inter-milan-champions_5876532.jpg",
    publishedAt: "2025-04-21T21:45:00Z",
    content: "Inter Milan have won Serie A for the second consecutive season after defeating rivals AC Milan in the Derby della Madonnina..."
  },
  {
    source: { id: "espn", name: "ESPN" },
    title: "Leverkusen complete unbeaten Bundesliga season in historic achievement",
    description: "Bayer Leverkusen have become the first team in Bundesliga history to complete an entire season unbeaten.",
    url: "https://www.espn.com/soccer/story/_/id/38765421/leverkusen-unbeaten-bundesliga",
    urlToImage: "https://a.espncdn.com/photo/2025/0419/r1247652_1296x729_16-9.jpg",
    publishedAt: "2025-04-19T18:30:00Z",
    content: "Bayer Leverkusen completed a historic unbeaten Bundesliga season with a 3-1 victory over Borussia Dortmund..."
  },
  {
    source: { id: "l-equipe", name: "L'Équipe" },
    title: "PSG secure Ligue 1 title with dominant display",
    description: "Paris Saint-Germain have secured their third consecutive Ligue 1 title with a dominant 4-0 win over Lyon.",
    url: "https://www.lequipe.fr/Football/psg-champion-ligue1",
    urlToImage: "https://medias.lequipe.fr/img-photo-jpg/psg-celebration-ligue1/1500000001754237/0:0,1998:1332-1000-666-75/42ab1.jpg",
    publishedAt: "2025-04-20T22:15:00Z",
    content: "Paris Saint-Germain have clinched their 12th Ligue 1 title after a convincing win against Lyon..."
  }
];

// EXPORTED FUNCTIONS
export const getFootballNews = async (): Promise<{ articles: NewsArticle[] }> => {
  console.log('Getting football news');
  return {
    articles: NEWS_DATA
  };
};

export const getFixtures = async (leagueId: number): Promise<{ response: FixtureResponse[] }> => {
  console.log('Getting fixtures for league', leagueId);
  
  const leagueIdStr = leagueId.toString();
  
  // Return fixtures based on league ID
  const fixtures = FIXTURES_DATA[leagueIdStr] || [];
  
  return {
    response: fixtures
  };
};

export const getTodayFixtures = async (): Promise<{ response: FixtureResponse[] }> => {
  console.log('Getting today fixtures');
  
  // Access Premier League fixtures directly
  const premierLeagueFixtures = FIXTURES_DATA['39'] || [];
  
  // Just return the first 2 fixtures for demo purposes
  return {
    response: premierLeagueFixtures.slice(0, 2)
  };
};

export const getLiveFixtures = async (): Promise<{ response: FixtureResponse[] }> => {
  console.log('Getting live fixtures');
  
  // Access Premier League fixtures directly
  const premierLeagueFixtures = FIXTURES_DATA['39'] || [];
  
  // Just return the first fixture to simulate "live" match
  return {
    response: premierLeagueFixtures.slice(0, 1)
  };
};

export const getStandings = async (leagueId: number): Promise<{ response: any[] }> => {
  console.log('Getting standings for league', leagueId);
  
  const leagueIdStr = leagueId.toString();
  
  // Check if we have data for this league
  if (STANDINGS_DATA[leagueIdStr]) {
    return {
      response: [
        {
          league: {
            id: Number(leagueIdStr),
            name: getLeagueName(leagueIdStr),
            country: getLeagueCountry(leagueIdStr),
            logo: getLeagueLogo(leagueIdStr),
            season: DEFAULT_SEASON,
            standings: [STANDINGS_DATA[leagueIdStr]]
          }
        }
      ]
    };
  }
  
  // Return empty response if no data found
  return {
    response: []
  };
};

// Premier League specific convenience functions
export const getPremierLeagueFixtures = async (): Promise<{ response: FixtureResponse[] }> => {
  console.log('Getting Premier League fixtures');
  return {
    response: FIXTURES_DATA['39'] || []
  };
};

export const getPremierLeagueStandings = async (): Promise<{ response: any[] }> => {
  console.log('Getting Premier League standings');
  
  return {
    response: [
      {
        league: {
          id: 39,
          name: 'Premier League',
          country: 'England',
          logo: 'https://media.api-sports.io/football/leagues/39.png',
          season: DEFAULT_SEASON,
          standings: [STANDINGS_DATA['39']]
        }
      }
    ]
  };
}; 