/** @typedef {{title:string, category:string, year:string, description:string, tags:string[], video:string, poster:string}} Project */
/** @typedef {{name:string, id:string, idType:'place'|'universe', universeId?:string, creator:string, role:string, url:string, description:string, fallback:string, cachedImage?:string}} RobloxGame */
/** @typedef {{name:string, groupId:string, role:string, description:string, url:string, fallback:string, cachedImage?:string, cacheName?:string}} RobloxGroup */
/** @typedef {{name:string, role:string, description:string, inviteCode:string, url:string, fallback:string, cachedImage?:string, cacheName?:string, guildId?:string, iconHash?:string}} DiscordServer */

/** @type {Project[]} */
export const projects = [
  {
    title: "Rock Stacking",
    category: "Gameplay architecture",
    year: "2024",
    description: "A competitive throw-and-rebuild loop with team state, hit validation, round flow, and responsive feedback tuned around accuracy and coordination.",
    tags: ["Luau", "Round state", "Team gameplay"],
    video: "videos/rockstacking.mp4",
    poster: "assets/posters/rockstacking.webp",
  },
  {
    title: "Map Voting",
    category: "Interface systems",
    year: "2024",
    description: "A complete voting flow that connects presentation, server-owned vote state, map selection, and clean handoff into the game loop.",
    tags: ["UI state", "Remote events", "Game loop"],
    video: "videos/map-voting-system.mp4",
    poster: "assets/posters/map-voting-system.webp",
  },
  {
    title: "Global Donation Board",
    category: "Persistent economy",
    year: "2024",
    description: "Cross-server donation data with shared ranking, consistency safeguards, and a presentation layer that remains responsive while values update.",
    tags: ["DataStore", "Cross-server", "Economy"],
    video: "videos/global-donation-board.mp4",
    poster: "assets/posters/global-donation-board.webp",
  },
  {
    title: "Enemy Nextbot",
    category: "NPC behaviour",
    year: "2024",
    description: "Configurable pursuit behaviour using PathfindingService, obstacle-aware route refreshes, and separation between navigation, targeting, and damage logic.",
    tags: ["Pathfinding", "NPC AI", "Configuration"],
    video: "videos/pathfinding.mp4",
    poster: "assets/posters/pathfinding.webp",
  },
  {
    title: "Interactive Main Menu",
    category: "Interface systems",
    year: "2024",
    description: "A modular menu with controlled camera states, animated transitions, and a layout designed to adapt across different game themes and screen sizes.",
    tags: ["UI/UX", "Camera", "Transitions"],
    video: "videos/interactive-main-menu.mp4",
    poster: "assets/posters/interactive-main-menu.webp",
  },
  {
    title: "Tycoon Framework",
    category: "Reusable framework",
    year: "2024",
    description: "A data-backed purchase framework with unlock dependencies, visual affordances, persistence, and a structure that scales beyond a single map.",
    tags: ["Framework", "Persistence", "Purchases"],
    video: "videos/tycoon-creation.mp4",
    poster: "assets/posters/tycoon-creation.webp",
  },
];

/** @type {RobloxGame[]} */
export const games = [
  {
    name: "Grow Your Pet",
    id: "110811521450324",
    idType: "place",
    creator: "Skydda Concord Studio",
    role: "Programmer",
    url: "https://www.roblox.com/games/110811521450324/GROW-YOUR-PET",
    description: "Raise a pet through a progression-focused Roblox experience, expand its growth, and continue building toward larger milestones over time.",
    cachedImage: "assets/cached-media/grow-your-pet.webp",
    fallback: "assets/fallbacks/grow-your-pet.svg",
  },
  {
    name: "[CARRY] Soft Pink Tower",
    id: "95624995252294",
    idType: "place",
    universeId: "9333955742",
    creator: "Lazy Tower Studio",
    role: "Programmer",
    url: "https://www.roblox.com/games/95624995252294/Soft-Pink-Tower",
    description: "Climb a soft pink obstacle tower built around timing, movement, and repeat runs through progressively demanding stages.",
    cachedImage: "assets/cached-media/soft-pink-tower.webp",
    fallback: "assets/fallbacks/soft-pink-tower.svg",
  },
  {
    name: "Soft Pink Wallhop Tower",
    id: "101848404389998",
    idType: "place",
    universeId: "9397456825",
    creator: "Lazy Tower Studio",
    role: "Programmer",
    url: "https://www.roblox.com/games/101848404389998/Soft-Pink-Wallhop-Tower",
    description: "Climb a soft pink tower built around wallhop movement, precision platforming, and increasingly demanding obstacle sections.",
    cachedImage: "assets/cached-media/soft-pink-wallhop.webp",
    fallback: "assets/fallbacks/soft-pink-wallhop.svg",
  },
];

/** @type {{title:string, description:string}[]} */
export const capabilities = [
  { title: "Programming fundamentals", description: "Writing clear Luau, structuring control flow, selecting suitable data structures, solving defects, and turning requirements into dependable game features." },
  { title: "Software architecture", description: "Organizing larger projects into reusable modules and services with explicit responsibilities, predictable state, and code that another developer can extend." },
  { title: "Gameplay development", description: "Building player mechanics, rounds, interactions, combat rules, cooldowns, NPC behaviour, and responsive feedback across client and server." },
  { title: "Backend development", description: "Creating server-authoritative logic, validating requests, managing permissions and sessions, and keeping important game rules secure from the client." },
  { title: "Data and persistence", description: "Designing DataStore profiles, autosave, migrations, recovery paths, cross-server state, and reliable progression that survives disconnects and failures." },
  { title: "Interface development", description: "Developing responsive Roblox interfaces, menus, onboarding, shops, voting flows, camera states, and feedback that clearly communicates game state." },
  { title: "Testing and optimization", description: "Reproducing edge cases, profiling runtime behaviour, reducing unnecessary network work, cleaning events, and verifying features across devices." },
  { title: "Collaboration and handoff", description: "Communicating scope, documenting systems, using version-control habits, preparing configurable handoffs, and supporting continued development after delivery." },
];

export const process = [
  { title: "Scope", description: "Define the player flow, technical ownership, saved data, edge cases, success criteria, and exact production requirements." },
  { title: "Build", description: "Create a working end-to-end version early, then organize the feature into clear client, server, UI, and data responsibilities." },
  { title: "Test", description: "Check validation, exploits, respawns, disconnects, persistence failures, mobile layouts, performance, and interaction edge cases." },
  { title: "Deliver", description: "Clean the code, document configuration and extension points, verify the final build, and hand over a maintainable system." },
];

/** @type {RobloxGroup[]} */
export const robloxGroups = [
  { name: "Tenasa Games", groupId: "34265738", role: "Founder", description: "Roblox development group for original projects and collaborative production work.", url: "https://www.roblox.com/communities/34265738/Tenasa-Games", cachedImage: "assets/cached-media/group-tenasa.webp", fallback: "assets/fallbacks/group-tenasa.svg", cacheName: "group-tenasa.webp" },
  { name: "SOL Co.", groupId: "153339776", role: "Main developer", description: "Creative Roblox community with development and systems contributions.", url: "https://www.roblox.com/communities/153339776/SOL-Co", cachedImage: "assets/cached-media/group-sol.webp", fallback: "assets/fallbacks/group-sol.svg", cacheName: "group-sol.webp" },
  { name: "Skydda Concord Studio", groupId: "81081641", role: "Developer", description: "Independent Roblox studio behind collaborative experience development.", url: "https://www.roblox.com/communities/81081641/Skydda-Concord-Studio", cachedImage: "assets/cached-media/group-skydda.webp", fallback: "assets/fallbacks/group-skydda.svg", cacheName: "group-skydda.webp" },
  { name: "Corebound Games", groupId: "312003009", role: "Admin", description: "Roblox game studio focused on building and organizing new projects.", url: "https://www.roblox.com/communities/312003009/Corebound-Games", cachedImage: "assets/cached-media/group-corebound.webp", fallback: "assets/fallbacks/group-corebound.svg", cacheName: "group-corebound.webp" },
];

/** @type {DiscordServer[]} */
export const discordServers = [
  { name: "Summit Developers", role: "Pioneer", description: "A Roblox developer community for collaboration, feedback, and technical discussion.", inviteCode: "UXsEATcmaa", url: "https://discord.gg/UXsEATcmaa", fallback: "assets/fallbacks/discord-summit.svg", cachedImage: "assets/cached-media/discord-summit.webp", cacheName: "discord-summit.webp" },
  { name: "Cynex Services", role: "Founder", description: "The primary server for project inquiries, development updates, and direct contact.", inviteCode: "sAQtQyyS", url: "https://discord.gg/sAQtQyyS", fallback: "assets/fallbacks/discord-cynex.svg", cachedImage: "assets/cached-media/discord-cynex.webp", cacheName: "discord-cynex.webp" },
];

export const reviews = [
  { name: "eventpunks", location: "Austria", repeatClient: true, rating: 5, age: "1 year ago", price: "$600-$800", duration: "2 months", platform: "Fiverr", platformUrl: "https://www.fiverr.com/nathmad54", quote: "Everything as usual really great." },
  { name: "misterclubs", location: "United States", repeatClient: false, rating: 5, age: "1 year ago", price: "$50-$100", duration: "3 months", platform: "Fiverr", platformUrl: "https://www.fiverr.com/nathmad54", quote: "Awesome results, turned out great!" },
  { name: "eventpunks", location: "Austria", repeatClient: true, rating: 5, age: "1 year ago", price: "$200-$400", duration: "2 weeks", platform: "Fiverr", platformUrl: "https://www.fiverr.com/nathmad54", quote: "Everything fine." },
  { name: "lotteryshot", location: "United States", repeatClient: false, rating: 5, age: "1 year ago", price: "$100-$200", duration: "10 days", platform: "Fiverr", platformUrl: "https://www.fiverr.com/nathmad54", quote: "Went beyond and helped with extra work, excellent and fair." },
  { name: "hafizrenal", location: "Indonesia", repeatClient: false, rating: 5, age: "1 year ago", price: "Up to $50", duration: "1 day", platform: "Fiverr", platformUrl: "https://www.fiverr.com/nathmad54", quote: "Great working with Nath. They were professional, responsive, and delivered outstanding results. Highly recommend!" },
  { name: "skyebsu", location: "United Kingdom", repeatClient: true, rating: 5, age: "2 years ago", price: "$50-$100", duration: "3 weeks", platform: "Fiverr", platformUrl: "https://www.fiverr.com/nathmad54", quote: "Pays keen attention to detail, extremely good at scripting, very quick to respond!" },
  { name: "eventpunks", location: "Austria", repeatClient: true, rating: 5, age: "2 years ago", price: "Up to $50", duration: "2 days", platform: "Fiverr", platformUrl: "https://www.fiverr.com/nathmad54", quote: "Everything fine and everything done as discussed and given to him as the order. I really appreciate his willingness to do quality work." },
  { name: "togodumnus", location: "United Kingdom", repeatClient: true, rating: 5, age: "2 years ago", price: "Up to $50", duration: "1 day", platform: "Fiverr", platformUrl: "https://www.fiverr.com/nathmad54", quote: "I am very pleased Nathaniel was able to solve a problem for me that I had for a while. I am very pleased with the service provided." },
  { name: "loaf_bread", location: "Philippines", repeatClient: false, rating: 5, age: "2 years ago", price: "Up to $50", duration: "6 days", platform: "Fiverr", platformUrl: "https://www.fiverr.com/nathmad54", quote: "Thank you so much, sir! It has been a pleasure working with you. He was able to fulfill all of my requests and even provided valuable ideas. Any minor issues were promptly resolved. I highly recommend his services." },
];
