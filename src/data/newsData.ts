export interface Article {
  title: string;
  date: string;
  summary: string;
}

export interface Week {
  weekNumber: number;
  articles: Article[];
}

export interface MonthData {
  month: string;
  slug: string;
  summary: string;
  weeks: Week[];
}

export const newsData: MonthData[] = [
  {
    month: "January",
    slug: "january",
    summary: "A month of economic reforms and scientific breakthroughs",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Major Economic Reform Announced",
            date: "January 3, 1970",
            summary: "Government unveils comprehensive economic package aimed at stabilizing inflation and boosting growth."
          },
          {
            title: "Scientific Breakthrough in Medicine",
            date: "January 5, 1970",
            summary: "Researchers announce promising developments in treatment of common diseases."
          },
          {
            title: "Cultural Festival Draws Record Crowds",
            date: "January 7, 1970",
            summary: "Annual winter festival sees unprecedented attendance despite cold weather."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "International Trade Agreement Signed",
            date: "January 10, 1970",
            summary: "Multiple nations come together to establish new trade protocols."
          },
          {
            title: "Educational Reform Bill Passed",
            date: "January 12, 1970",
            summary: "Landmark legislation promises to revolutionize public education system."
          },
          {
            title: "Sports: Championship Finals",
            date: "January 14, 1970",
            summary: "Local team advances to national championships in dramatic victory."
          }
        ]
      }
    ]
  },
  {
    month: "February",
    slug: "february",
    summary: "A month of political upheaval and social change",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Government Resigns Amid Scandal",
            date: "February 3, 1970",
            summary: "High-ranking officials step down following allegations of corruption."
          },
          {
            title: "New Political Party Formed",
            date: "February 5, 1970",
            summary: "Emerging group seeks to challenge established political order."
          },
          {
            title: "Community Outreach Program Launched",
            date: "February 7, 1970",
            summary: "Local organization initiates campaign to support underserved populations."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "Social Media Platform Gains Popularity",
            date: "February 10, 1970",
            summary: "Online network attracts millions of users in short period of time."
          },
          {
            title: "Youth-Led Protest Draws Attention",
            date: "February 12, 1970",
            summary: "Demonstration highlights growing concerns about environmental issues."
          },
          {
            title: "Arts: New Exhibit Opens",
            date: "February 14, 1970",
            summary: "Renowned artist showcases latest work in gallery exhibition."
          }
        ]
      }
    ]
  },
  {
    month: "March",
    slug: "march",
    summary: "A month of innovation and progress",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Technological Advancements Unveiled",
            date: "March 3, 1970",
            summary: "New tech gadgets promise to simplify everyday life."
          },
          {
            title: "Environmental Policy Gains Traction",
            date: "March 5, 1970",
            summary: "Government prioritizes sustainability in new legislation."
          },
          {
            title: "Cultural Heritage Celebrated",
            date: "March 7, 1970",
            summary: "Communities come together to honor local traditions."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "Economic Forum Discusses Future",
            date: "March 10, 1970",
            summary: "Global leaders meet to address economic challenges."
          },
          {
            title: "Major Sports Event Held",
            date: "March 12, 1970",
            summary: "Fans flock to see their favorite teams compete."
          },
          {
            title: "Artistic Talent Showcased",
            date: "March 14, 1970",
            summary: "Emerging artists display work in public gallery."
          }
        ]
      }
    ]
  },
  {
    month: "April",
    slug: "april",
    summary: "A month of discovery and exploration",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Scientific Discoveries Published",
            date: "April 3, 1970",
            summary: "Breakthroughs in physics and biology make headlines."
          },
          {
            title: "Space Exploration Program Expands",
            date: "April 5, 1970",
            summary: "Ambitious plans for lunar missions announced."
          },
          {
            title: "Local Festival Inspires Creativity",
            date: "April 7, 1970",
            summary: "Artists and innovators gather to share ideas."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "New Legislation Supports Education",
            date: "April 10, 1970",
            summary: "Efforts to improve schools receive bipartisan support."
          },
          {
            title: "Community Health Program Launched",
            date: "April 12, 1970",
            summary: "Initiative aims to address healthcare access disparities."
          },
          {
            title: "Sports Championship Draws Record Attendance",
            date: "April 14, 1970",
            summary: "Exciting finals match captivates audience."
          }
        ]
      }
    ]
  },
  {
    month: "May",
    slug: "may",
    summary: "A month of resilience and progress",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Economic Growth Reports Released",
            date: "May 3, 1970",
            summary: "Economists celebrate positive GDP growth for the quarter."
          },
          {
            title: "Breakthrough in Renewable Energy",
            date: "May 5, 1970",
            summary: "New technology promises cheaper and more efficient solar panels."
          },
          {
            title: "Spring Festival Boosts Local Economy",
            date: "May 7, 1970",
            summary: "Event draws tourists and promotes small businesses."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "Healthcare Reforms Approved",
            date: "May 10, 1970",
            summary: "Government passes new measures to expand coverage."
          },
          {
            title: "Artists Advocate for Climate Change",
            date: "May 12, 1970",
            summary: "Creative communities raise awareness through art."
          },
          {
            title: "Major Sports Tournament Kicks Off",
            date: "May 14, 1970",
            summary: "Teams from across the country compete in annual event."
          }
        ]
      }
    ]
  },
  {
    month: "June",
    slug: "june",
    summary: "A month of innovation and collaboration",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Tech Conference Showcases Innovations",
            date: "June 3, 1970",
            summary: "Industry leaders unveil groundbreaking products."
          },
          {
            title: "Agricultural Advances Announced",
            date: "June 5, 1970",
            summary: "New techniques promise to increase crop yields."
          },
          {
            title: "Community Cleanup Efforts Underway",
            date: "June 7, 1970",
            summary: "Volunteers band together to beautify local parks."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "International Peace Talks Progress",
            date: "June 10, 1970",
            summary: "Leaders reach preliminary agreements on conflict resolution."
          },
          {
            title: "Summer Arts Festival Begins",
            date: "June 12, 1970",
            summary: "Celebration of creativity and culture attracts thousands."
          },
          {
            title: "Local Athletes Shine in Competitions",
            date: "June 14, 1970",
            summary: "Hometown heroes achieve national recognition."
          }
        ]
      }
    ]
  },
  {
    month: "July",
    slug: "july",
    summary: "A month of milestones and celebrations",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Independence Day Celebrations Held",
            date: "July 4, 1970",
            summary: "Nation marks anniversary with parades and fireworks."
          },
          {
            title: "Scientific Community Praises Discovery",
            date: "July 6, 1970",
            summary: "New findings in biology could revolutionize the field."
          },
          {
            title: "Outdoor Music Festival Thrills Fans",
            date: "July 7, 1970",
            summary: "Performers entertain crowds at open-air concert."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "Space Mission Achieves Historic Feat",
            date: "July 10, 1970",
            summary: "Astronauts return after successful lunar expedition."
          },
          {
            title: "Education Conference Inspires Change",
            date: "July 12, 1970",
            summary: "Experts share insights on improving learning outcomes."
          },
          {
            title: "Sports Fans Celebrate Victories",
            date: "July 14, 1970",
            summary: "Local teams triumph in thrilling matches."
          }
        ]
      }
    ]
  },
  {
    month: "August",
    slug: "august",
    summary: "A month of discovery and perseverance",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Scientific Research Grants Awarded",
            date: "August 3, 1970",
            summary: "Funds allocated for groundbreaking experiments."
          },
          {
            title: "Local Entrepreneurs Innovate",
            date: "August 5, 1970",
            summary: "Startups introduce novel solutions to common problems."
          },
          {
            title: "Arts and Crafts Fair a Success",
            date: "August 7, 1970",
            summary: "Artisans display talent at vibrant community event."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "International Cooperation Strengthens",
            date: "August 10, 1970",
            summary: "Nations collaborate on sustainable development initiatives."
          },
          {
            title: "Education Systems Receive Overhaul",
            date: "August 12, 1970",
            summary: "Reforms aim to modernize curriculum and facilities."
          },
          {
            title: "Athletic Achievements Celebrated",
            date: "August 14, 1970",
            summary: "Olympic hopefuls showcase skill and determination."
          }
        ]
      }
    ]
  },
  {
    month: "September",
    slug: "september",
    summary: "A month of education and culture",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Back-to-School Season Begins",
            date: "September 3, 1970",
            summary: "Students and teachers prepare for a new academic year."
          },
          {
            title: "Cultural Heritage Day Observed",
            date: "September 5, 1970",
            summary: "Communities celebrate traditions and shared history."
          },
          {
            title: "Film Festival Highlights Talent",
            date: "September 7, 1970",
            summary: "Cinematographers receive accolades for creativity."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "Scientific Symposium Explores Frontiers",
            date: "September 10, 1970",
            summary: "Experts discuss cutting-edge research."
          },
          {
            title: "Sports Fans Enjoy Fall Classics",
            date: "September 12, 1970",
            summary: "Seasonal competitions draw enthusiastic crowds."
          },
          {
            title: "Literature Enthusiasts Unite",
            date: "September 14, 1970",
            summary: "Authors and readers gather for book fair."
          }
        ]
      }
    ]
  },
  {
    month: "October",
    slug: "october",
    summary: "A month of innovation and unity",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Tech Startups Showcase Ideas",
            date: "October 3, 1970",
            summary: "Entrepreneurs pitch groundbreaking solutions at annual tech fair."
          },
          {
            title: "Renewed Focus on Public Health",
            date: "October 5, 1970",
            summary: "Government announces new measures to combat seasonal illnesses."
          },
          {
            title: "Autumn Festival Celebrated",
            date: "October 7, 1970",
            summary: "Communities come together for harvest-themed festivities."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "Historic Spacecraft Launched",
            date: "October 10, 1970",
            summary: "Milestone mission aims to explore outer planets."
          },
          {
            title: "Educational Conference Inspires Leaders",
            date: "October 12, 1970",
            summary: "Experts share insights on transforming global education systems."
          },
          {
            title: "Local Team Wins Championship",
            date: "October 14, 1970",
            summary: "Thrilling final game cements team's legacy."
          }
        ]
      }
    ]
  },
  {
    month: "November",
    slug: "november",
    summary: "A month of gratitude and reflection",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Veterans Honored Nationwide",
            date: "November 3, 1970",
            summary: "Ceremonies held to recognize contributions of armed forces."
          },
          {
            title: "Scientific Advances in Renewable Energy",
            date: "November 5, 1970",
            summary: "Breakthroughs in wind and solar technology announced."
          },
          {
            title: "Local Farmers' Market Expands",
            date: "November 7, 1970",
            summary: "New vendors and activities draw record crowds."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "Global Summit Addresses Climate Change",
            date: "November 10, 1970",
            summary: "World leaders convene to discuss strategies for sustainability."
          },
          {
            title: "Art Exhibition Draws International Attention",
            date: "November 12, 1970",
            summary: "Renowned artists display works exploring themes of resilience."
          },
          {
            title: "Thanksgiving Celebrations Across the Nation",
            date: "November 14, 1970",
            summary: "Families gather to share meals and express gratitude."
          }
        ]
      }
    ]
  },
  {
    month: "December",
    slug: "december",
    summary: "A month of celebration and hope",
    weeks: [
      {
        weekNumber: 1,
        articles: [
          {
            title: "Holiday Markets Brighten Communities",
            date: "December 3, 1970",
            summary: "Festive events promote local crafts and traditions."
          },
          {
            title: "Groundbreaking Medical Study Released",
            date: "December 5, 1970",
            summary: "New research offers hope for treating chronic diseases."
          },
          {
            title: "Winter Sports Season Kicks Off",
            date: "December 7, 1970",
            summary: "Athletes compete in snow and ice events across the country."
          }
        ]
      },
      {
        weekNumber: 2,
        articles: [
          {
            title: "Charitable Giving Reaches Record Levels",
            date: "December 10, 1970",
            summary: "Donors contribute generously to support those in need."
          },
          {
            title: "New Year Preparations Begin",
            date: "December 12, 1970",
            summary: "Cities gear up for grand celebrations to welcome the new year."
          },
          {
            title: "Historic Year in Review",
            date: "December 14, 1970",
            summary: "Reflecting on major events and accomplishments of the year."
          }
        ]
      }
    ]
  }
];
