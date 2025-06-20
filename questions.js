// In loving memory of Pope Francis


const variableMap = [
    "col",   // 0
    "equ",   // 1
    "aco",   // 2
    "pun",   // 3
    "reg",    // 4
    "clo",   // 5
    "dec",    // 6
    "mon",    // 7
    "tri", // 8
    "sgr" // 9
  ];

  const questions = [
    {
      q: "Everyone should have access to participate in the economy, including the freedom to buy and sell without limitations.",
      e: [[0, -1], [1, -1]]
    },
    {
      q: "People should have the unrestricted right to use drugs, as it is a personal choice that should not be interfered with.",
      e: [[0, -1], [2, -1]]
    },
    {
      q: "Workers' rights were achieved through the free market, not as a result of socialist policies.",
      e: [[0, -1], [3, -1]]
    },
    {
        q: "A freer market leads to greater personal freedom, individuals should be able to demand without restrictions.",
        e: [[0, -1], [4, -1]]
    },
    {
        q: "Unrestricted free trade between nations has led to unprecedented economic prosperity and global progress.",
        e: [[0, -1], [5, -1]]
    },
    {
        q: "Technology will lead to a perfectly competitive market, which is the ideal economic system.",
        e: [[0, -1], [6, -1]]
    },
    {
        q: "The Federal reserve was a mistake, and should be abolished.",
        e: [[0, -1], [7, -1]]
    },
    {
        q: "Taxation is a form of theft by the State, and should be abolished to maximize efficiency in the markets.",
        e: [[0, -1], [8, -1]]
    },
    {
        q: "The market is the best mechanism for resource distribution, and it should be allowed to operate without interference.",
        e: [[0, -1], [9, -1]]
    },
    {
        q: "Free enterprise is an illusion, as monopolies prevent true competition from appearing.",
        e: [[1, 1], [0, 1]]
    },
    {
        q: "Credit is a reliable tool for overcoming financial difficulties and should be utilized when necessary.",
        e: [[1, -1], [2, -1]]
    },
    {
        q: "Every worker should negotiate their own wage without union interference, as unions hinder individual agreements.",
        e: [[1, -1], [3, -1]]
    },
    {
        q: "The free market has lifted more people out of poverty than any other economic system.",
        e: [[1, -1], [4, -1]]
    },
    {
        q: "We should welcome foreign individuals and provide them the opportunity to establish a life and contribute to our economy.",
        e: [[1, -1], [5, -1]]
    },
    {
        q: "Technology provides unrivaled opportunities, and any attempt to slow its progress hinders human development.",
        e: [[1, -1], [6, -1]]
    },
    {
        q: "Cryptocurrency has created wealth for thousands, and we should fully embrace its adoption.",
        e: [[1, -1], [7, -1]]
    },
    {
        q: "Lower taxation creates more opportunities by removing barriers and encouraging growth.",
        e: [[1, -1], [8, -1]]
    },
    {
        q: "Fast economic growth increases opportunities for everyday people to achieve great wealth and success.",
        e: [[1, -1], [9, -1]]
    },
    {
        q: "Free markets create passive consumers who mindlessly purchase low-quality products produced by corporations.",
        e: [[2, 1], [0, 1]]
    },
    {
        q: "Satisfaction with what we have is essential; pursuing endless desires is futile, as asceticism is the ideal path.",
        e: [[2, 1], [1, 1]]
    },
    {
        q: "Higher wages ultimately increase costs for consumers, not producers, and burdening consumers should be avoided.",
        e: [[2, -1], [3, -1]]
    },
    {
        q: "People should be free to spend their money however they choose, without judgment or restriction.",
        e: [[2, -1], [4, -1]]
    },
    {
        q: "Importing foreign goods is beneficial because it offers lower prices and gives access to products unavailable in the local market.",
        e: [[2, -1], [5, -1]]
    },
    {
        q: "People's use of technology is not a problem, even if they spend excessive time with it.",
        e: [[2, -1], [6, -1]]
    },
    {
        q: "If our currency weren’t artificially inflated, I would be able to afford everything I desire.",
        e: [[2, -1], [7, -1]]
    },
    {
        q: "Value-added tax (VAT) is unjustifiable; consumers should not be taxed for purchasing basic things.",
        e: [[2, -1], [8, -1]]
    },
    {
        q: "Rapid economic growth leads to lower prices, allowing me to afford everything I want more quickly.",
        e: [[2, -1], [9, -1]]
      },
      {
        q: "Workplace democracy is more important than productivity, because it empowers experienced workers to make decisions.",
        e: [[3, 1], [0, 1]]
      },
      {
        q: "All people are born equal and should remain equal in status, wealth, and opportunity throughout their lives.",
        e: [[3, 1], [1, 1]]
      },
      {
          q: "Brands are inefficient and unnecessary, a single provider per product is sufficient without redundant packaging and marketing.",
          e: [[3, 1], [2, 1]]
      },
      {
          q: "Unions restrict individual freedom and force the market into inefficient decisions that harm everyone.",
          e: [[3, -1], [4, -1]]
      },
      {
          q: "If other countries produce goods at lower costs, we should purchase from them to maximize efficiency and savings.",
          e: [[3, -1], [5, -1]]
      },
      {
          q: "If jobs become obsolete, it is a natural part of economic progress and should be accepted as part of the cycle of innovation.",
          e: [[3, -1], [6, -1]]
      },
      {
          q: "Removing regulations from currency will eliminate the need for enforced 'equity' in the economy.",
          e: [[3, -1], [7, -1]]
      },
      {
          q: "Unions should advocate for lower taxes instead of higher wages if they truly want to improve workers' lives.",
          e: [[3, -1], [8, -1]]
      },
      {
          q: "Syndicates obstruct progress and economic growth, and should be dismantled to allow for a more efficient and dynamic economy.",
          e: [[3, -1], [9, -1]]
      },
      {
          q: "Monopolies benefit the economy by producing higher-quality goods that small businesses could never match.",
          e: [[4, 1], [0, 1]]
      },
      {
          q: "Eliminating regulations will allow corporations to operate freely and create wealth for everyone.",
          e: [[4, 1], [1, 1]]
      },
      {
          q: "Advertising should be strictly regulated or outright banned to prevent manipulation and consumer exploitation.",
          e: [[4, 1], [2, 1]]
      },
      {
          q: "True freedom can only be achieved by dismantling capitalism and establishing socialism.",
          e: [[4, 1], [3, 1]]
      },
      {
          q: "Free trade demonstrates that specialized economies working together can improve the entire world.",
          e: [[4, -1], [5, -1]]
      },
      {
          q: "Regulations only slow down technological progress and should not impose arbitrary restrictions on human development.",
          e: [[4, -1], [6, -1]]
      },
      {
          q: "Free banking is a more efficient system for managing money than central banking and should be embraced.",
          e: [[4, -1], [7, -1]]
      },
      {
          q: "Laissez-faire is the ideal economic system, and we should strive to implement it fully in our country.",
          e: [[4, -1], [8, -1]]
      },
      {
          q: "Regulations hinder wealth creation by reducing efficiency and slowing economic growth.",
          e: [[4, -1], [9, -1]]
      },
      {
          q: "Autarky should be implemented, as it ensures we produce what we truly need rather than relying on the desires of a foreign market.",
          e: [[5, 1], [0, 1]]
      },
      {
          q: "Citizens should not be allowed to leave the nation, as doing so in times of need is an act of betrayal.",
          e: [[5, 1], [1, 1]]
      },
      {
          q: "Foreign producers must comply with our national health and safety standards; otherwise, their products should be barred from entering the country.",
          e: [[5, 1], [2, 1]]
      },
      {
          q: "We must protect our workers from exploitation by unethical foreign corporations that undercut wages and use cheap labor.",
          e: [[5, 1], [3, 1]]
      },
      {
          q: "Globalism was a mistake; local goods offer superior quality and directly support our domestic economy.",
          e: [[5, 1], [4, 1]]
      },
      {
          q: "Importing technology is essential to keep our markets competitive; it is the only viable path of staying ahead.",
          e: [[5, -1], [6, -1]]
      },
      {
          q: "Currency exchange should be completely free, without artificial floors or ceilings that distort its true value.",
          e: [[5, -1], [7, -1]]
      },
      {
        q: "Establishing low-tax zones will attract investors and stimulate economic growth, we should establish some.",
        e: [[5, -1], [8, -1]]
    },
    {
        q: "Open borders bring significant economic benefits, and therefore, they should stay open to everyone.",
        e: [[5, -1], [9, -1]]
    },
    {
        q: "Innovation has merely created a cycle of new problems and temporary fixes, without producing anything truly beneficial in the long term.",
        e: [[6, 1], [0, 1]]
    },
    {
        q: "Automation should never replace human jobs under any circumstance, as every person has the fundamental right to work.",
        e: [[6, 1], [1, 1]]
    },
    {
        q: "Technological progress is a source of moral decay that needs to be stopped.",
        e: [[6, 1], [2, 1]]
    },
    {
        q: "Technology has consistently undermined workers, from machines to electronics, automation, and now AI. Proving it stands in opposition to the worker.",
        e: [[6, 1], [3, 1]]
    },
    {
        q: "Innovation will not rescue liberal economic theories; eventually, they will reach their limits and be forced to confront their failures.",
        e: [[6, 1], [4, 1]]
      },
      {
        q: "We should return to Mercantilism and Manorialism, as they were better systems than the ones we have today.",
        e: [[6, 1], [5, 1]]
      },
      {
        q: "With AI enabling accurate prediction of market fluctuations, currency should be entirely left to market forces.",
        e: [[6, -1], [7, -1]]
      },
      {
          q: "We should work toward a future completely free of taxation to maximize individual freedom and economic efficiency.",
          e: [[6, -1], [8, -1]]
      },
      {
          q: "Technological growth drives economic growth, and stalling it serves no purpose other than to appease superstitions.",
          e: [[6, -1], [9, -1]]
      },
      {
          q: "We should reinstate the gold standard to give our currency real, tangible value instead of relying on speculative worth.",
          e: [[7, 1], [0, 1]]
      },
      {
          q: "Cryptocurrency is a passing fad, and it will soon become clear that basing currency on speculation is a unsustainable idea.",
          e: [[7, 1], [1, 1]]
      },
      {
          q: "Interest rates should be increased to encourage saving over mindless spending.",
          e: [[7, 1], [2, 1]]
      },
      {
          q: "The worth of our currency is not a commodity, it must be safeguarded by the state to ensure the economic security of our country.",
          e: [[7, 1], [3, 1]]
      },
      {
          q: "Foreign exchange rates should be fixed and stable to provide consistent security for both importers and exporters.",
          e: [[7, 1], [4, 1]]
      },
      {
          q: "We must preserve our national sovereignty and actively protect the value of our currency from external and internal threats.",
          e: [[7, 1], [5, 1]]
      },
      {
          q: "Oatmeal was a better currency because it had tangible, intrinsic value unlike today’s fiat money.",
          e: [[7, 1], [6, 1]]
      },
      {
          q: "Inflation is more difficult to manage under a fixed currency system; therefore, the system should be abolished as soon as possible.",
          e: [[7, -1], [8, -1]]
      },
      {
          q: "We must allow the market to control the currency so it can naturally regain its lost value.",
          e: [[7, -1], [9, -1]]
      },
      {
          q: "Higher corporate taxes are necessary to prevent economic overheating; production should be limited to what is necessary.",
          e: [[8, 1], [0, 1]]
      },
      {
          q: "Progressive taxation is the ideal system, ensuring the wealthy pay their fair share while relieving the financial burden on those who are struggling.",
          e: [[8, 1], [1, 1]]
      },
      {
          q: "Unhealthy and unsustainable lifestyles should be taxed, as those who choose to be a burden must bear the financial responsibility.",
          e: [[8, 1], [2, 1]]
      },
      {
          q: "Capitalists should contribute their fair share to society by paying appropriate taxes on their wealth and profits.",
          e: [[8, 1], [3, 1]]
      },
      {
          q: "Taxation serves as a safeguard against elite wealth hoarding, and therefore it should be increased to ensure economic fairness.",
          e: [[8, 1], [4, 1]]
      },
      {
          q: "We should implement heavy tariffs to protect and subsidize our domestic industries, ensuring national economic strength and self-reliance.",
          e: [[8, 1], [5, 1]]
      },
      {
          q: "The elite exploit technology to evade paying their fair share in taxes, and this practice must be stopped at all costs.",
          e: [[8, 1], [6, 1]]
      },
      {
          q: "A regulated currency enables the government to function efficiently, leading to improved living standards for the population.",
          e: [[8, 1], [7, 1]]
      },
      {
          q: "Taxation reduces overall GDP, so it should be eliminated to maximize economic growth and productivity.",
          e: [[8, -1], [9, -1]]
      },
      {
          q: "We don't need an 'efficient' economy,we need a safe and secure one that serves the common man, rather than the ultra-rich.",
          e: [[9, 1], [0, 1]]
      },
      {
          q: "The global economy operates as a zero-sum game, no one gains wealth without it coming at someone else's expense.",
          e: [[9, 1], [1, 1]]
      },
      {
          q: "GDP growth is meaningless if it comes at the cost of losing our core values and principles.",
          e: [[9, 1], [2, 1]]
      },
      {
        q: "I would choose socialism over a 5% increase in GDP, because economic numbers are meaningless if they come at the cost of our dignity.",
        e: [[9, 1], [3, 1]]
    },
    {
        q: "Allowing merchants to operate without restraint is a dangerous idea, regardless of any potential economic benefits.",
        e: [[9, 1], [4, 1]]
    },
    {
        q: "The border should be closed entirely; our economy exists to serve our own citizens, not foreign interests.",
        e: [[9, 1], [5, 1]]
    },

    {
        q: "We should approach technology with caution and carefully consider its long-term effects on the economy.",
        e: [[9, 1], [6, 1]]
    },
    {
        q: "Fixed exchange rates would help stabilize economic cycles, providing consistency that supports small businesses unable to survive recessions.",
        e: [[9, 1], [7, 1]]
    },
    {
        q: "Subsidies should be implemented alongside taxation to mitigate the negative effects of economic cycles and protect vulnerable businesses.",
        e: [[9, 1], [8, 1]]
    },
  ];
  