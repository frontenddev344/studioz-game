function buildWalkthrough(slug, title, image) {
    const img = image || "assets/images/home_banner_v1.jpg";

    return {
        slug: slug,
        title: title,
        image: img,
        bannerImage: img,
        system: "PC",
        sections: [
            {
                id: "intro",
                title: "Introduction",
                content: "Welcome to the " + title + " walkthrough. This guide provides clear step-by-step directions to help you progress through puzzles, story scenes, and optional secrets without getting lost."
            },
            {
                id: "start",
                title: "Getting Started",
                content: "When you begin " + title + ", explore the opening area thoroughly. Speak with every character, examine interactive objects, and collect any items you can pick up before moving on. Adventure games often hide critical clues in the first location."
            },
            {
                id: "early",
                title: "Early Progression",
                content: "In the early sections of " + title + ", clear each room before leaving. Note locked doors, missing items, and characters who mention unfinished tasks. Return to earlier areas whenever you find a new tool or piece of information."
            },
            {
                id: "puzzles",
                title: "Key Puzzles",
                content: "Midway through " + title + ", puzzles usually require combining inventory items or using tools in the correct order. If you are stuck, revisit recent locations and re-read documents in your inventory. Most solutions are hinted at through dialogue or environmental details."
            },
            {
                id: "finale",
                title: "Finale & Ending",
                content: "The final chapter of " + title + " may branch based on earlier choices or items collected. Save before the last major puzzle if possible. Follow remaining objectives and use every unused inventory item to unlock the conclusion."
            },
            {
                id: "tips",
                title: "Tips & Notes",
                content: "General tips for " + title + ": save often, take notes on codes and passwords, and do not skip optional conversations. If an area seems impassable, check whether you need an item from elsewhere or a combination created in the inventory screen."
            }
        ]
    };
}

const walkthroughList = [
    ["5-days-a-stranger", "5 Days a Stranger", "assets/images/5_days_stranger.jpg"],
    ["6-daya-a-sacrifice", "6 Days a Sacrifice", "assets/images/6_days_sacrifice.jpg"],
    ["7-days-a-skeptic", "7 Days a Skeptic", "assets/images/7_days_skeptic.jpg"],
    ["agatha-christie", "Agatha Christie - Hercule Poirot: The First Cases", "assets/images/agatha-christie-hercule-poirot-the-first-cases-img.webp"],
    ["almost-my-floor", "Almost my Floor", "assets/images/almost-my-floor-img.jpg"],
    ["bttf-1", "Back to the Future: The Game - Episode I: It's About Time", "assets/images/back-to-the-future-the-game-img.jpg"],
    ["bttf-2", "Back to the Future: The Game - Episode II: Get Tannen!", "assets/images/back-to-the-future-the-game-episode-2-img.jpg"],
    ["catyph", "Catyph: The Kunci Experiment", "assets/images/catyph-kunci-experiment-img.jpg"],
    ["challenge-tentacle", "Challenge of the Tentacle", "assets/images/challenge-of-the-tentacle-img.webp"],
    ["day-tentacle", "Day of the Tentacle", "assets/images/day-of-the-tentacle-img.jpg"],
    ["delores", "DELORES: A Thimbleweed Park Mini Adventure", "assets/delores-a-thimbleweed-park-mini-adventure-img.jpg"],
    ["ecoquest-2", "EcoQuest 2: Lost Secret of the Rainforest", "assets/images/ecoquest-2-lost-secret-of-the-rainforest-img.jpg"],
    ["ecoquest-1", "EcoQuest: The Search for Cetus", "assets/images/ecoquest-the-search-for-cetus-img.webp"],
    ["firmament", "Firmament", "assets/images/Firmament-img.jpg"],
    ["flight-amazon", "Flight of the Amazon Queen", "assets/images/flight-of-the-amazon-queen-img.jpg"],
    ["gk3", "Gabriel Knight 3: Blood of the Sacred, Blood of the Damned", "assets/images/gabriel-knight-3-blood-of-the-sacred-img.jpg"],
    ["gk1", "Gabriel Knight: Sins of the Fathers", "assets/images/gabriel-knight-sins-of-the-fathers-img.jpg"],
    ["hamlet", "Hamlet", "assets/images/Hamlet-img.webp"],
    ["heart-china", "Heart of China", "assets/images/heart-of-china-img.jpg"],
    ["igor", "Igor: Objective Uikokahonia", "assets/images/Idoesn.png"],
    ["indy-fate", "Indiana Jones and the Fate of Atlantis", "assets/images/indiana_jones.jpg"],
    ["bond-stealth", "James Bond: The Stealth Affair", "assets/images/james-bond-the-stealth-affair-img.webp"],
    ["john-ray", "John Ray's Space Adventure", "assets/images/john-rays-space-adventure-img.jpg"],
    ["kapia", "KAPIA", "assets/images/kapia-img.jpg"],
    ["kathy-rain", "Kathy Rain: A Detective is Born", "assets/images/kathy-rain-a-detective-is-born-img.jpg"],
    ["lamplight", "Lamplight City", "assets/images/lamplight-city-img.jpg"],
    ["last-stop", "Last Stop Achievement Guide", "assets/images/last-stop-achievement-guide-img.jpg"],
    ["maniac-mansion", "Maniac Mansion", "assets/images/maniac-mansion-img.jpg"],
    ["metal-dead", "Metal Dead", "assets/images/metal-dead-img.jpg"],
    ["nd-venice", "Nancy Drew 18: The Phantom of Venice", "assets/images/saint-1.jpg"],
    ["nd-blackmoor", "Nancy Drew: Curse of Blackmoor Manor", "assets/images/resident-evil-1.jpg"],
    ["light-darkness", "Of Light and Darkness: The Prophecy", "assets/images/hades-1.jpg"],
    ["orion-drift", "Orion Drift Walkthrough", "assets/images/orion_drift.jpg"],
    ["peppers", "Pepper's Adventures in Time", "assets/images/beat-1.jpg"],
    ["police-2", "Police Quest 2: The Vengeance", "assets/images/counter-strike-1.jpg"],
    ["quarantine", "Quarantine Zone: The Last Check", "assets/images/QuarantineZone.jpg"],
    ["qfg5-fighter", "Quest For Glory 5: Dragon Fire (Fighter)", "assets/images/baldur-1.jpg"],
    ["reality", "Reality Incognita", "assets/images/Parallel Shift.jpg"],
    ["reanimal", "Reanimal Walkthrough", "assets/images/animal-crosisng-1.jpg"],
    ["sally-5", "Sally Face Episode Five", "assets/images/hollow-signal-1.jpg"],
    ["sally-4-1", "Sally Face Episode Four - Part 1", "assets/images/hollow-signal-2.jpg"],
    ["teen-agent", "Teen Agent", "assets/images/Agent-Zero.jpg"],
    ["terminator", "Terminator 2D: NO FATE", "assets/images/cod-1.jpg"],
    ["ulysses", "Ulysses and the Golden Fleece", "assets/images/asgard-1.jpg"],
    ["unforeseen", "Unforeseen Incidents", "assets/images/echo_drift.jpg"],
    ["venator", "Venator", "assets/images/metroid-1.jpg"],
    ["virtuaverse", "VirtuaVerse", "assets/images/cyberpunk-2.jpg"],
    ["ticks", "What Makes You Tick?", "assets/images/beat-2.jpg"],
    ["wizard-princess", "Wizard and the Princess", "assets/images/zelda-1.jpg"],
    ["xeno-archive", "Xeno Archive Walkthrough", "assets/images/starfield-2.jpg"],
    ["xylophone-tower", "Xylophone Tower Walkthrough", "assets/images/ori-1.jpg"],
    ["yet-another", "Yet Another Hero Story", "assets/images/super-1.jpg"],
    ["yonder-crossing", "Yonder Crossing Walkthrough", "assets/images/stardew-3.jpg"],
    ["zak-1", "Zak McKracken and the Alien Mindbenders", "assets/images/no-sky-1.jpg"],
    ["zak-2", "Zak McKracken: Between Time And Space", "assets/images/no-sky-2.jpg"]
];

const walkthroughs = walkthroughList.map(function (entry) {
    return buildWalkthrough(entry[0], entry[1], entry[2]);
});
