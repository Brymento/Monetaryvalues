const variableMap = [
    "con",   // 0
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
      q: "People should have the unrestricted right to use drugs, as it is a personal choice that should not be interfered with..",
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
        e: [[1, -1], [0, -1]]
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
    
  ];
  