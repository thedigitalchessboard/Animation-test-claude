/**
 * Central configuration for the TDC cinematic.
 *
 * Every scene reads its timing from SCENES so the whole film can be re-timed in
 * one place. TimelineManager refuses to let the master timeline run past
 * HARD_MAX_DURATION (it time-scales the film down and warns instead).
 */

export const TARGET_DURATION = 36.6;
export const HARD_MAX_DURATION = 59.0;

// [start, end] in seconds — a ~36 s short film (website hero + 30–40 s ad cut).
//
// Pacing (v3): Disney-style storytelling. Every beat has anticipation, action
// and a held reaction; camera moves are smooth splines; secondary motion is
// slow and gentle. Nothing is rushed.
export const SCENES = {
  space:    [0.0, 2.6],   // 01 deep space → Earth, student points light up
  network:  [1.0, 2.9],   // 02 the points connect like a constellation
  coachFly: [2.6, 4.0],   // 03 Coach Knight flies across the Earth, wink at camera
  players:  [3.8, 5.3],   // 04a two astronauts playing on a hovering holo-board (TDC tablet)
  bump:     [5.3, 5.6],   // 04b he dashes between them — the knight tumbles away
  surprise: [5.6, 6.3],   // 04c brakes, turns: surprised (held); astronauts stunned
  fix:      [6.3, 7.4],   // 04d catches the knight, flies back, sets it down carefully
  sorry:    [7.4, 8.5],   // 04e hands together, bow: "so sorry!" — they laugh
  farewell: [8.5, 9.2],   // 04f thumbs up, he waves goodbye; they carry on playing
  dive:     [9.2, 10.5],  // 05 space → atmosphere → clouds → city at dawn
  arrive:   [10.5, 13.5], // 06 lands by her window, peeks in, "shh", taps the glass → sparkle
  bedroom:  [13.5, 17.3], // 07 quiet room → she wakes, stretches, yawns → notices the glow
  tablet:   [17.3, 19.3], // 08 sits up, picks up the tablet, taps — the screen lights her face
  board:    [19.3, 23.5], // 09 official logo → live class with kids worldwide → her move → success!
  eyes:     [23.5, 25.5], // 10 close-up: her eyes light up, she loves it
  outside:  [25.5, 27.5], // 11 back outside: the proud coach, a knight appears, he taps it
  reveal:   [27.5, 30.9], // 12 pull back to Earth: network spreads, pieces rise, kids everywhere
  brand:    [30.9, 32.1], // 13 everything gathers into light → official logo
  tagline:  [32.1, 32.7], // 14 Making ◆ Champions ◆ Worldwide (then a held beat)
  wave:     [33.4, 34.3], // 15 coach pops in, looks at you, waves "Hi!"
  chase:    [34.3, 36.3], // 16 knight hops past → viewer/knight/viewer/knight → chase → exit
};

export const COLORS = {
  navy: '#0B1E3D',
  navyDeep: '#06122A',
  navyMid: '#132B57',
  deepBlue: '#1A3A78',
  royal: '#2C5BC4',
  royalSoft: '#4A76D6',
  ivory: '#F7F5F0',
  white: '#FFFFFF',
  softGrey: '#B8C1D1',
  gold: '#D8B15E',
  goldLight: '#F2D892',
  goldDeep: '#9A7430',
};

// Where the girl lives (the dive target / origin of the global network).
export const HOME = { lat: 17.4, lon: 78.5 };

// Student points around the globe. `piece` marks the six nodes that grow a
// chess piece during the global reveal.
export const NODES = [
  { lat: 17.4, lon: 78.5, home: true, piece: 'knight' },   // home
  { lat: 51.5, lon: -0.1, piece: 'pawn' },                 // London
  { lat: 55.8, lon: 37.6, piece: 'rook' },                 // Moscow
  { lat: 25.2, lon: 55.3, piece: 'queen' },                // Dubai
  { lat: 30.0, lon: 31.2, piece: 'king' },                 // Cairo
  { lat: -1.3, lon: 36.8, piece: 'bishop' },               // Nairobi
  { lat: 40.7, lon: -74.0 },  // New York
  { lat: 43.7, lon: -79.4 },  // Toronto
  { lat: 34.1, lon: -118.2 }, // Los Angeles
  { lat: 41.9, lon: -87.6 },  // Chicago
  { lat: 19.4, lon: -99.1 },  // Mexico City
  { lat: -23.5, lon: -46.6 }, // São Paulo
  { lat: -34.6, lon: -58.4 }, // Buenos Aires
  { lat: 6.5, lon: 3.4 },     // Lagos
  { lat: -33.9, lon: 18.4 },  // Cape Town
  { lat: 48.9, lon: 2.35 },   // Paris
  { lat: 52.5, lon: 13.4 },   // Berlin
  { lat: 40.4, lon: -3.7 },   // Madrid
  { lat: 19.1, lon: 72.9 },   // Mumbai
  { lat: 12.97, lon: 77.6 },  // Bengaluru
  { lat: 28.6, lon: 77.2 },   // Delhi
  { lat: 1.35, lon: 103.8 },  // Singapore
  { lat: 35.7, lon: 139.7 },  // Tokyo
  { lat: 37.6, lon: 127.0 },  // Seoul
  { lat: -33.9, lon: 151.2 }, // Sydney
  { lat: -36.8, lon: 174.8 }, // Auckland
  { lat: -6.2, lon: 106.8 },  // Jakarta
  { lat: 31.2, lon: 121.5 },  // Shanghai
];

// Arcs drawn in scene 02 (index pairs into NODES).
export const EARLY_ARCS = [
  [1, 15], [15, 16], [1, 6], [6, 7], [16, 2], [13, 14], [4, 3], [11, 12], [17, 13], [6, 11],
];

// Per-device quality profiles, picked by ResponsiveManager.
export const PROFILES = {
  desktop: {
    name: 'desktop', dprCap: 2, antialias: true,
    stars: 2600, dust: 260, converge: 900, earthTex: 2048, cloudTex: 1024,
    extraDetail: true, charScale: 1,
  },
  tablet: {
    name: 'tablet', dprCap: 1.75, antialias: true,
    stars: 1500, dust: 140, converge: 520, earthTex: 2048, cloudTex: 768,
    extraDetail: true, charScale: 1.08,
  },
  mobile: {
    name: 'mobile', dprCap: 1.5, antialias: false,
    stars: 800, dust: 60, converge: 300, earthTex: 1024, cloudTex: 512,
    extraDetail: false, charScale: 1.15,
  },
};

// Visually hidden description for assistive tech (never rendered on screen).
export const A11Y_DESCRIPTION =
  'A silent 36-second animated story. In space, a friendly human chess coach with a short cape ' +
  'flies past the Earth and dashes between two astronauts playing chess on a hovering board, knocking ' +
  'their knight away. Surprised, he catches it, puts it back and apologises with his hands together; ' +
  'the astronauts laugh and give a thumbs up. He dives through the clouds to a house at dawn, peeks ' +
  'through a window at a sleeping girl and taps the glass. Her tablet glows; she wakes, stretches, ' +
  'picks it up and joins a live online chess class with a coach and children from around the world. ' +
  'She makes a move herself, gets it right, and her eyes light up with joy. Outside, the coach smiles ' +
  'proudly. The view pulls back to an Earth connected by glowing lines, chess pieces and children in ' +
  'many countries, which gather into the Digital Chessboard logo with the tagline Making Champions ' +
  'Worldwide. The coach pops in to wave, spots a chess knight hopping away, and chases after it.';
