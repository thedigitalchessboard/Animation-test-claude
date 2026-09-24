/**
 * Central configuration for the TDC cinematic.
 *
 * Every scene reads its timing from SCENES so the whole film can be re-timed in
 * one place. TimelineManager refuses to let the master timeline run past
 * HARD_MAX_DURATION (it time-scales the film down and warns instead).
 */

export const TARGET_DURATION = 14.0;
export const HARD_MAX_DURATION = 14.9;

// [start, end] in seconds. Order and beats follow the production brief.
// The closing gag (wave + knight chase) overlaps the tagline slightly so the
// double-take reads clearly without pushing the film past 14.0 s.
export const SCENES = {
  space:    [0.0, 1.2],   // 01 deep space, Earth, student points
  network:  [1.2, 1.8],   // 02 points connect
  coachFly: [1.8, 2.8],   // 03 Coach Knight flies across
  comedy:   [2.8, 3.7],   // 04 astronaut + bumped knight
  dive:     [3.7, 4.9],   // 05 space → atmosphere → clouds → city → house
  bedroom:  [4.9, 6.3],   // 06 girl wakes, notices tablet
  tablet:   [6.3, 7.5],   // 07 picks up + taps tablet
  board:    [7.5, 8.4],   // 08 logo → live class, a piece moves
  eyes:     [8.4, 9.2],   // 09 eyes light up
  outside:  [9.2, 10.1],  // 10 coach outside the window, taps a knight
  reveal:   [10.1, 11.9], // 11 pull back to a connected Earth
  brand:    [11.9, 12.7], // 12 network converges → official logo
  tagline:  [12.7, 13.2], // 13 Making ◆ Champions ◆ Worldwide
  wave:     [13.05, 13.5],// 14 coach pops in and waves
  chase:    [13.45, 14.0],// 15 knight challenge → chase → exit
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
  'A silent 14-second animated story. In space, a friendly human chess coach with a short cape ' +
  'flies past the Earth, accidentally bumps a floating chess knight away from an astronaut playing ' +
  'chess on a tablet, and apologises with a sheepish wave. He dives down through the clouds to a ' +
  'house where a young girl wakes up, picks up her tablet and joins a live online chess class. Her ' +
  'eyes light up as a chess piece moves. Outside her window the coach smiles proudly, the view pulls ' +
  'back to an Earth connected by glowing lines and chess pieces, and the lines gather into the ' +
  'Digital Chessboard logo with the tagline Making Champions Worldwide. The coach pops in to wave, ' +
  'spots a chess knight hopping away, and chases after it.';
