const newsData = [
  {
    id: 1,
    title: "Breaking: Major Climate Agreement Reached at Global Summit",
    excerpt:
      "World leaders have unanimously agreed on new emission targets that could reshape the future of environmental policy...",
    category: "breaking",
    author: "Sarah Mitchell",
    time: "2 hours ago",
    image: "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg",
    content: `<p>In a historic moment for international diplomacy, world leaders from over 190 countries have reached a groundbreaking agreement on climate action. The accord, finalized late yesterday evening, sets ambitious new targets for carbon emission reductions that experts say could fundamentally alter the trajectory of global warming.</p>
        <p>The agreement mandates a 50% reduction in greenhouse gas emissions by 2035, with developed nations required to achieve carbon neutrality by 2040. This represents a significant acceleration from previous commitments and reflects growing urgency around climate issues.</p>
        <p>"This is the most comprehensive climate agreement in human history," said UN Secretary-General in a press conference following the announcement. "For the first time, we have binding commitments from every major economy."</p>
        <p>The deal includes provisions for a $100 billion annual fund to help developing nations transition to clean energy, as well as mechanisms for monitoring and enforcing compliance.</p>`,
    tags: ["Climate", "Politics"],
  },
  {
    id: 2,
    title: "Tech Giants Unveil Revolutionary AI Healthcare Platform",
    excerpt:
      "A consortium of major technology companies announces a new AI system capable of diagnosing rare diseases with 99% accuracy...",
    category: "technology",
    author: "James Chen",
    time: "4 hours ago",
    image:
      "https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg",
    content: `<p>A groundbreaking collaboration between leading technology companies has resulted in an artificial intelligence platform that promises to revolutionize healthcare diagnostics. The system, unveiled at a press event in San Francisco, can identify rare diseases with unprecedented accuracy.</p>
        <p>The AI was trained on over 500 million medical records and can analyze patient symptoms, medical history, and genetic markers to provide diagnoses that previously required teams of specialists and weeks of testing.</p>
        <p>"We're entering a new era of personalized medicine," said the lead researcher. "This technology will be particularly transformative for patients in underserved areas who lack access to specialist care."</p>
        <p>Clinical trials have shown the system achieves 99.2% accuracy in identifying rare conditions, outperforming human specialists by a significant margin.</p>`,
    tags: ["AI", "Healthcare"],
  },
  {
    id: 3,
    title: "Championship Final: Underdogs Claim Historic Victory",
    excerpt:
      "In one of the most dramatic finishes in tournament history, the previously unranked team defeats the defending champions...",
    category: "sports",
    author: "Marcus Johnson",
    time: "6 hours ago",
    image: "https://images.pexels.com/photos/2990610/pexels-photo-2990610.jpeg",
    content: `<p>Sports history was made last night as the underdog team, given 50-to-1 odds at the start of the tournament, defeated the heavily favored defending champions in a thrilling final that will be remembered for generations.</p>
        <p>The match seemed destined for a conventional outcome when the favorites took an early 2-0 lead. But a stunning second-half comeback, capped by a last-minute winner, sent the stadium into euphoria.</p>
        <p>"Nobody believed in us except the people in our locker room," said the team captain, tears streaming down his face. "This is for everyone who ever doubted us."</p>
        <p>The victory marks the first major championship for the franchise in its 45-year history.</p>`,
    tags: ["Sports", "Championship", "Victory", "Underdogs"],
  },
  {
    id: 4,
    title: "New Study Reveals Breakthrough in Alzheimer's Treatment",
    excerpt:
      "Researchers announce promising results from clinical trials of a new drug that appears to halt the progression of Alzheimer's...",
    category: "health",
    author: "Dr. Emily Roberts",
    time: "8 hours ago",
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    content: `<p>A major breakthrough in Alzheimer's research offers new hope to millions of patients and their families. Clinical trial results published today show that a new drug can effectively halt cognitive decline in early-stage patients.</p>
        <p>The medication works by targeting and removing the protein plaques that accumulate in the brains of Alzheimer's patients. In trials involving 3,000 participants, those receiving the treatment showed no significant cognitive decline over an 18-month period.</p>
        <p>"This is the most significant advance in Alzheimer's treatment in two decades," said the lead researcher. "We're not just slowing the disease—we're stopping it in its tracks."</p>
        <p>The drug is expected to receive expedited review by regulatory agencies and could be available to patients within 18 months.</p>`,
    tags: ["Health", "Research", "Alzheimer's", "Medicine"],
  },
  {
    id: 5,
    title: "Historic Election Results Reshape Political Landscape",
    excerpt:
      "Voters deliver surprising verdict as traditional party boundaries are redrawn in what analysts call a 'seismic shift'...",
    category: "politics",
    author: "Robert Williams",
    time: "10 hours ago",
    image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg",
    content: `<p>Yesterday's election results have sent shockwaves through the political establishment, with outcomes that defied every major poll and prediction model. The results represent what analysts are calling a fundamental realignment of the political map.</p>
        <p>Traditional strongholds fell to opposition candidates, while several high-profile incumbents lost their seats by significant margins. Voter turnout reached a record 78%, suggesting deep engagement with the issues at stake.</p>
        <p>"We are witnessing the beginning of a new political era," said a prominent political scientist. "The old coalitions have shattered, and entirely new ones are forming."</p>
        <p>The incoming administration has pledged to prioritize economic reform, healthcare access, and climate action in its first 100 days.</p>`,
    tags: ["Politics", "Election", "Democracy", "Change"],
  },
  {
    id: 6,
    title: "Award-Winning Film Breaks Box Office Records Worldwide",
    excerpt:
      "The critically acclaimed drama surpasses all expectations, becoming the highest-grossing independent film in history...",
    category: "entertainment",
    author: "Amanda Foster",
    time: "12 hours ago",
    image: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.png",
    content: `<p>The independent film that captured hearts at film festivals around the world has now captured the box office, shattering records for an independently produced movie. The drama has earned over $500 million globally in just three weeks of release.</p>
        <p>Made on a modest budget of $15 million, the film has achieved what industry insiders call an unprecedented commercial breakthrough for independent cinema. It currently holds a 97% rating among critics and 94% among audiences.</p>
        <p>"This proves that audiences are hungry for original, meaningful storytelling," said the director. "You don't need a massive budget to connect with people."</p>
        <p>The film is now considered the frontrunner for multiple major awards, including Best Picture.</p>`,
    tags: ["Entertainment", "Film", "Box Office", "Awards"],
  },
  {
    id: 7,
    title: "Breaking: Central Bank Announces Surprise Interest Rate Cut",
    excerpt:
      "In an unexpected move, the central bank has reduced rates by 0.5%, citing concerns about economic growth...",
    category: "breaking",
    author: "Michael Davis",
    time: "1 hour ago",
    image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg",
    content: `<p>The central bank has shocked financial markets with an unexpected interest rate cut of 0.5 percentage points, the largest single reduction in over a decade. The move comes amid growing concerns about economic momentum.</p>
        <p>The surprise announcement sent stock markets surging, with major indices posting their best single-day gains of the year. Bond yields fell sharply as investors reassessed their economic outlook.</p>
        <p>"We believe this decisive action will provide the support the economy needs," said the central bank governor in a statement. "We stand ready to take additional measures if necessary."</p>
        <p>Economists are now revising their growth forecasts, with many expecting the rate cut to boost consumer spending and business investment.</p>`,
    tags: ["Finance", "Economy", "Breaking", "Markets"],
  },
  {
    id: 8,
    title: "Scientists Discover New Species in Deep Ocean Expedition",
    excerpt:
      "A research team exploring uncharted ocean depths has identified over 30 previously unknown species of marine life...",
    category: "health",
    author: "Dr. Lisa Park",
    time: "14 hours ago",
    image: "https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg",
    content: `<p>A deep-sea research expedition has returned with extraordinary findings, including the discovery of more than 30 species previously unknown to science. The expedition explored ocean trenches reaching depths of over 8,000 meters.</p>
        <p>Among the discoveries are bioluminescent fish with unique adaptation mechanisms, previously undocumented species of giant isopods, and microbial life forms that could have implications for pharmaceutical research.</p>
        <p>"Every dive revealed something we had never seen before," said the expedition leader. "These ecosystems have evolved in complete isolation for millions of years."</p>
        <p>The findings underscore how much of our planet's biodiversity remains unexplored, with scientists estimating that 80% of ocean species have yet to be identified.</p>`,
    tags: ["Science", "Discovery", "Ocean", "Research"],
  },
  {
    id: 9,
    title: "National Team Qualifies for World Championship After Thriller",
    excerpt:
      "A stoppage-time goal sends the national team to their first world championship in 28 years...",
    category: "sports",
    author: "Carlos Rodriguez",
    time: "5 hours ago",
    image:
      "https://images.pexels.com/photos/159607/basketball-player-girls-basketball-girl-159607.jpeg",
    content: `<p>In scenes of unbridled joy across the nation, the national team has secured qualification for the World Championship for the first time in nearly three decades. A dramatic stoppage-time goal completed a remarkable comeback that will be etched in sporting history.</p>
        <p>Trailing 2-1 with minutes remaining, the team mounted a desperate assault on the opposition goal. When the equalizer came in the 89th minute, it seemed like the best they could hope for was extra time.</p>
        <p>But in the fifth minute of stoppage time, a sweeping team move ended with a stunning strike that sent the stadium into delirium. "I've never experienced anything like it," said the coach. "This team has made history."</p>
        <p>The qualification ends the longest drought in the nation's sporting history and has sparked celebrations across the country.</p>`,
    tags: ["Sports", "World Cup", "Qualification", "Football"],
  },
  {
    id: 10,
    title: "Tech Startup Achieves Nuclear Fusion Milestone",
    excerpt:
      "A private company announces it has achieved sustained nuclear fusion reaction, potentially revolutionizing energy production...",
    category: "technology",
    author: "David Kim",
    time: "3 hours ago",
    image: "https://images.pexels.com/photos/303530/pexels-photo-303530.jpeg",
    content: `<p>A technology startup has announced what could be the most significant energy breakthrough in history: a sustained nuclear fusion reaction that produces more energy than it consumes. The achievement has been independently verified by leading physicists.</p>
        <p>Fusion power, which mimics the process that powers the sun, has been a goal of scientists for decades. Unlike current nuclear power, fusion produces no long-lived radioactive waste and poses no risk of meltdown.</p>
        <p>"This changes everything," said an independent physicist who verified the results. "We're looking at the potential for unlimited clean energy."</p>
        <p>The company expects to have a commercial fusion reactor operational within the next decade, which could transform the global energy landscape.</p>`,
    tags: ["Technology", "Energy", "Fusion", "Innovation"],
  },
  {
    id: 11,
    title: "Major Policy Reform Bill Passes After Historic Debate",
    excerpt:
      "After months of intense negotiation, legislators pass sweeping reforms that will affect millions of citizens...",
    category: "politics",
    author: "Jennifer Walsh",
    time: "7 hours ago",
    image:
      "https://images.pexels.com/photos/162646/cooling-tower-power-plant-energy-industry-162646.jpeg",
    content: `<p>After one of the most contentious legislative battles in recent memory, a comprehensive reform bill has passed, marking a major shift in domestic policy. The legislation passed with a narrow majority following months of debate and negotiation.</p>
        <p>The bill includes provisions for expanded healthcare coverage, increased infrastructure investment, and new environmental protections. It represents the largest single piece of legislation passed in over a decade.</p>
        <p>"This is a victory for working families across the nation," said the bill's chief sponsor. "We have shown that even in divided times, progress is possible."</p>
        <p>Implementation of the reforms will begin immediately, with full rollout expected over the next two years.</p>`,
    tags: ["Politics", "Reform", "Legislation", "Policy"],
  },
  {
    id: 12,
    title: "Streaming Giant Announces Revolutionary Interactive Series",
    excerpt:
      "The new format allows viewers to shape the narrative in real-time, blurring the line between viewer and participant...",
    category: "entertainment",
    author: "Nicole Torres",
    time: "9 hours ago",
    image: "https://images.pexels.com/photos/3039036/pexels-photo-3039036.jpeg",
    content: `<p>The leading streaming platform has unveiled a new interactive series format that promises to transform how audiences engage with storytelling. The technology allows viewers to make decisions that affect the plot in real-time, with AI adapting the narrative accordingly.</p>
        <p>Unlike previous choose-your-own-adventure formats, this system creates truly dynamic storylines. Each viewer's experience is unique, with the AI generating personalized content based on their choices.</p>
        <p>"We're moving beyond passive viewing," said the platform's chief content officer. "Audiences don't just watch the story anymore—they create it."</p>
        <p>The first series using this technology will debut next month, with several major directors already signed on for future projects.</p>`,
    tags: ["Entertainment", "Technology", "Streaming", "Innovation"],
  },
];

const trendingData = [
  { headline: "Markets surge on economic news", meta: "Finance • 15k views" },
  {
    headline: "Celebrity announces major comeback",
    meta: "Entertainment • 12k views",
  },
  {
    headline: "New smartphone breaks sales records",
    meta: "Technology • 10k views",
  },
  { headline: "Weather alert: Storm approaching", meta: "Local • 8k views" },
  { headline: "Sports legend announces retirement", meta: "Sports • 7k views" },
];

let activeFilters = ["all"];

const newsGrid = document.getElementById("newsGrid");
const articleCount = document.getElementById("articleCount");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const trendingList = document.getElementById("trendingList");
const newsletterForm = document.getElementById("newsletterForm");
const currentDateEl = document.getElementById("currentDate");

document.addEventListener("DOMContentLoaded", () => {
  setCurrentDate();
  renderNews();
  renderTrending();
  setupFilterListeners();
  setupModalListeners();
  setupNewsletterForm();
});

function setCurrentDate() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  currentDateEl.textContent = new Date().toLocaleDateString("en-US", options);
}

function renderNews() {
  let filteredNews = [...newsData];

  if (!activeFilters.includes("all")) {
    filteredNews = filteredNews.filter((news) =>
      activeFilters.includes(news.category)
    );
  }

  articleCount.textContent = `Showing ${filteredNews.length} article${
    filteredNews.length !== 1 ? "s" : ""
  }`;

  newsGrid.innerHTML = filteredNews
    .map(
      (news) => `
        <article class="news-card" data-id="${news.id}">
            <div class="news-image">
                <img src="${news.image}" alt="${news.title}" onerror="this.style.display='none'">
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-category ${news.category}">${news.category}</span>
                    <span class="news-time">${news.time}</span>
                </div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                <div class="news-footer">
                    <span class="news-author">By <span>${news.author}</span></span>
                </div>
            </div>
        </article>
    `
    )
    .join("");

  document.querySelectorAll(".news-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const id = parseInt(card.dataset.id);
      openModal(id);
    });
  });
}

function renderTrending() {
  trendingList.innerHTML = trendingData
    .map(
      (item, index) => `
        <div class="trending-item">
            <span class="trending-number">${String(index + 1).padStart(
              2,
              "0"
            )}</span>
            <div class="trending-content">
                <p class="trending-headline">${item.headline}</p>
                <span class="trending-meta">${item.meta}</span>
            </div>
        </div>
    `
    )
    .join("");
}

function setupFilterListeners() {
  document
    .querySelectorAll(".filter-option[data-category]")
    .forEach((option) => {
      option.addEventListener("click", () => {
        const category = option.dataset.category;

        if (category === "all") {
          activeFilters = ["all"];
          document
            .querySelectorAll(".filter-option[data-category]")
            .forEach((opt) => {
              opt.classList.remove("active");
            });
          option.classList.add("active");
        } else {
          activeFilters = activeFilters.filter((f) => f !== "all");
          document
            .querySelector('.filter-option[data-category="all"]')
            .classList.remove("active");

          if (activeFilters.includes(category)) {
            activeFilters = activeFilters.filter((f) => f !== category);
            option.classList.remove("active");

            if (activeFilters.length === 0) {
              activeFilters = ["all"];
              document
                .querySelector('.filter-option[data-category="all"]')
                .classList.add("active");
            }
          } else {
            activeFilters.push(category);
            option.classList.add("active");
          }
        }

        renderNews();
      });
    });

  document.querySelector(".clear-filters").addEventListener("click", () => {
    activeFilters = ["all"];
    document
      .querySelectorAll(".filter-option[data-category]")
      .forEach((opt) => {
        opt.classList.remove("active");
      });
    document
      .querySelector('.filter-option[data-category="all"]')
      .classList.add("active");
    renderNews();
  });
}

function openModal(id) {
  const news = newsData.find((n) => n.id === id);
  if (!news) return;

  document.getElementById("modalImage").src = news.image;
  document.getElementById("modalImage").alt = news.title;
  document.getElementById("modalCategory").textContent = news.category;
  document.getElementById(
    "modalCategory"
  ).className = `news-category ${news.category}`;
  document.getElementById("modalTime").textContent = news.time;
  document.getElementById("modalTitle").textContent = news.title;
  document.getElementById("modalAuthor").textContent = news.author;
  document.getElementById("modalBody").innerHTML = news.content;
  document.getElementById("modalTags").innerHTML = news.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

function setupModalListeners() {
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function setupNewsletterForm() {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = newsletterForm.querySelector(".subscribe-btn");
    const originalText = btn.textContent;
    btn.textContent = "Subscribed! ✓";
    btn.style.background = "#1e7b34";
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
      newsletterForm.reset();
    }, 2000);
  });
}

document.querySelectorAll(".nav-category").forEach((navCat) => {
  navCat.addEventListener("click", (e) => {
    e.preventDefault();
    const text = navCat.textContent.toLowerCase();
    const category = text === "all news" ? "all" : text;

    document
      .querySelectorAll(".nav-category")
      .forEach((nc) => nc.classList.remove("active"));
    navCat.classList.add("active");

    activeFilters = [category];
    document
      .querySelectorAll(".filter-option[data-category]")
      .forEach((opt) => {
        opt.classList.remove("active");
        if (opt.dataset.category === category) {
          opt.classList.add("active");
        }
      });

    renderNews();
  });
});
