// TPL Journey Menu Configuration
export const tplJourneyMenu = [
  { href: "/", text: "Home" },
  { href: "/the-kingdom", text: "The Kingdom" },
  { href: "/your-journey", text: "Your Journey" },
  { href: "/life-together", text: "Life Together" },
  { href: "/leaders", text: "Leaders" },
  { href: "/intensives", text: "Intensives" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

// TPL Journey Social Links
export const tplSocialLinks = [
  {
    href: "https://instagram.com/tpljourney",
    title: "Instagram",
    iconClass: "fa-instagram",
    name: "Instagram",
  },
  {
    href: "https://twitter.com/tpljourney",
    title: "X (Twitter)",
    iconClass: "fa-x-twitter",
    name: "X",
  },
];

// TPL Journey Footer Data
export const tplFooterLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Contact", path: "/contact" },
];

// Hero Rotating Text
export const heroRotatingText = [
  "The harvest is plentiful...",
  "The wind blows where it wishes...",
  "Your kingdom come, your will be done...",
  "Experiencing God's Kingdom in Truth, Power, and Love",
];

// Journey Stages for Homepage
export const journeyStages = [
  {
    id: 1,
    title: "The Kingdom",
    description: "Discover God's vision for His kingdom on earth as it is in heaven.",
    icon: "mi-flag",
    href: "/the-kingdom",
    stage: "Vision",
  },
  {
    id: 2,
    title: "Your Journey",
    description: "Begin the making of a disciple — growing in Truth, Power, and Love.",
    icon: "mi-user",
    href: "/your-journey",
    stage: "Personal",
  },
  {
    id: 3,
    title: "Life Together",
    description: "Experience kingdom community — growing, praying, sharing, and caring together.",
    icon: "mi-users",
    href: "/life-together",
    stage: "Community",
  },
  {
    id: 4,
    title: "Leaders",
    description: "Become disciple-makers who multiply kingdom life in others.",
    icon: "mi-megaphone",
    href: "/leaders",
    stage: "Multiplication",
  },
  {
    id: 5,
    title: "Intensives",
    description: "Go into the harvest — faith-building experiences with God in the field.",
    icon: "mi-compass",
    href: "/intensives",
    stage: "Harvest",
  },
];

// TPL Framework
export const tplFramework = {
  truth: {
    title: "Truth",
    description: "God reveals Himself through His Word and His creation. We encounter the living God who speaks, teaches, and transforms our understanding.",
    scripture: "John 8:32",
    scriptureText: "You will know the truth, and the truth will set you free.",
    icon: "mi-book",
  },
  power: {
    title: "Power",
    description: "God demonstrates His kingdom through supernatural works. The Holy Spirit empowers us to live beyond our natural abilities.",
    scripture: "Acts 1:8",
    scriptureText: "You will receive power when the Holy Spirit comes upon you.",
    icon: "mi-storm",
  },
  love: {
    title: "Love",
    description: "God's nature is love, and His kingdom is built on love. We become vessels of His love to a world in need.",
    scripture: "1 John 4:8",
    scriptureText: "God is love.",
    icon: "mi-heart",
  },
};

// Page 2: Your Journey Resources
export const yourJourneyResources = [
  {
    id: 1,
    title: "The Making of a Disciple Series",
    description: "A foundational series exploring what it means to follow Jesus in the TPL framework.",
    type: "folder",
    languages: ["English", "Bahasa Indonesia"],
    driveLink: "https://drive.google.com/drive/folders/1hkMIgrDUdmpf1YtDaxERwpOaKl4I0bHs?usp=share_link",
    icon: "mi-folder",
  },
];

// Page 3: Life Together (DMT) Resources
export const lifeTogether = {
  vision: {
    scripture: "Acts 2:41-47",
    text: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer. Everyone was filled with awe at the many wonders and signs performed by the apostles. All the believers were together and had everything in common.",
  },
  resources: [
    {
      id: 1,
      title: "One Flame DMT Facilitator's Guide",
      description: "A 20-week facilitation guide for leading Discovery-Making Together groups.",
      type: "folder",
      languages: ["English", "Bahasa Indonesia"],
      driveLink: "https://drive.google.com/drive/folders/1CkkCqlfS8VEZxB_ew6ydbXN_dZcIrolo?usp=sharing",
      icon: "mi-document",
    },
  ],
  startingSteps: [
    {
      step: 1,
      title: "Gather 2-3 Others",
      description: "Find a small group of people hungry to grow together in faith.",
      icon: "mi-users",
    },
    {
      step: 2,
      title: "Set a Rhythm",
      description: "Commit to meeting weekly for discovery, prayer, and accountability.",
      icon: "mi-refresh",
    },
    {
      step: 3,
      title: "Use the DMT Guide",
      description: "Follow the 20-week facilitation guide to structure your journey together.",
      icon: "mi-book",
    },
    {
      step: 4,
      title: "Practice What You Learn",
      description: "Apply kingdom principles between meetings and share what God does.",
      icon: "mi-storm",
    },
  ],
};

// Page 4: Leaders Resources
export const leadersResources = [
  {
    id: 1,
    title: "Two Flame Leader Development Modules",
    description: "Training materials for developing disciple-makers who multiply kingdom communities.",
    type: "folder",
    language: "English",
    // TODO: Replace with actual Google Drive resource link
    driveLink: null,
    icon: "mi-megaphone",
    comingSoon: true,
  },
];

// Page 5: Intensives
export const intensives = {
  pillars: [
    {
      id: 1,
      title: "Prayer",
      description: "Dedicated times of seeking God's presence and direction.",
      icon: "mi-message",
    },
    {
      id: 2,
      title: "Inner Healing",
      description: "Encountering God's restoration for wounds and barriers to freedom.",
      icon: "mi-heart",
    },
    {
      id: 3,
      title: "Kingdom Teaching",
      description: "Deep dives into kingdom principles and supernatural living.",
      icon: "mi-book",
    },
    {
      id: 4,
      title: "Practice in the Harvest",
      description: "Going out to experience God working through you in real-world ministry.",
      icon: "mi-compass",
    },
    {
      id: 5,
      title: "Fellowship & Debrief",
      description: "Processing experiences together and building lasting relationships.",
      icon: "mi-users",
    },
  ],
  resources: [
    {
      id: 1,
      title: "Intensive Workbooks",
      description: "Preparation and reflection materials for intensive retreat experiences.",
      type: "folder",
      language: "English",
      // TODO: Replace with actual Google Drive resource link
      driveLink: null,
      icon: "mi-document",
      comingSoon: true,
    },
  ],
};

// The Kingdom Page Content
export const theKingdomContent = {
  vision: {
    scripture: "Matthew 6:10",
    scriptureText: "Your kingdom come, your will be done, on earth as it is in heaven.",
    lead: "God is inviting us into something bigger than ourselves — a kingdom that transforms lives, heals communities, and brings heaven's reality to earth. TPL Journey is a pathway for experiencing this kingdom through discipleship that engages the whole person.",
    body: "We believe that every follower of Jesus is called to be a disciple-maker, equipped to walk in Truth, demonstrate Power, and embody Love. This isn't about programs or performance — it's about presence. Encountering God and becoming vessels of His kingdom wherever we go.",
  },
  whoGodIs: {
    title: "Who God Is",
    description: "Before we can understand God's kingdom, we must encounter the King. God is not a distant deity or an abstract concept — He is a living, personal Father who pursues relationship with His creation.",
    pillars: [
      {
        title: "Father",
        description: "God is a loving Father who longs to be known. Jesus taught us to approach Him as 'Abba' — an intimate, trusted parent who provides, protects, and calls us His own.",
        icon: "mi-heart",
      },
      {
        title: "Son",
        description: "Jesus is the visible image of the invisible God. In His life, death, and resurrection, He reveals the Father's heart and makes the way for us to enter the kingdom.",
        icon: "mi-sun",
      },
      {
        title: "Holy Spirit",
        description: "The Spirit of God lives in every believer, empowering us to live as kingdom people. He guides, teaches, heals, and gifts us for ministry.",
        icon: "mi-wind",
      },
    ],
  },
  howKingdomComes: {
    title: "How God's Kingdom Comes",
    scripture: "Luke 17:21",
    scriptureText: "The kingdom of God is in your midst.",
    description: "The kingdom isn't a future place — it's a present reality breaking in wherever Jesus is Lord. It comes through people who carry His presence and demonstrate His power.",
    ways: [
      {
        title: "Through Truth",
        description: "God's kingdom advances as His Word is proclaimed and received. Truth sets people free and renews minds to align with heaven's reality.",
        icon: "mi-book",
      },
      {
        title: "Through Power",
        description: "Signs, wonders, and miracles confirm that the kingdom has come near. The Holy Spirit demonstrates God's authority over sickness, darkness, and death.",
        icon: "mi-storm",
      },
      {
        title: "Through Love",
        description: "The greatest demonstration of the kingdom is sacrificial love. When communities love as Jesus loved, the world sees the Father.",
        icon: "mi-heart",
      },
    ],
  },
};

// About Page Content
export const aboutContent = {
  mission: "TPL Journey equips individuals and communities to experience God's kingdom through a discipleship framework grounded in Truth, Power, and Love.",
  vision: "To see every person encounter the living God and become a disciple-maker who multiplies kingdom life throughout the nations.",
};
