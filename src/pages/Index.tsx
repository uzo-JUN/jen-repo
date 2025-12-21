import { Search, HelpCircle, ChevronLeft, ChevronRight, ArrowUpRight, TrendingUp, TrendingDown, Rocket, Globe, Satellite, Navigation, Zap, Lock, Unlock, DollarSign, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const chartData = [
  { name: "2020", value: 100000000 },
  { name: "2021", value: 180000000 },
  { name: "2022", value: 250000000 },
  { name: "2023", value: 320000000 },
  { name: "2024", value: 350000000 },
  { name: "2025", value: 380000000 },
  { name: "2026", value: 420000000 },
  { name: "2027", value: 500000000 },
];

const spacexHoldings = [
  { name: "Falcon 9", units: "45 Units", value: "$85,000,000.00", status: "+18.45%", statusType: "up", icon: "🚀" },
  { name: "Starlink", units: "1,200 Units", value: "$120,000,000.00", status: "+32.15%", statusType: "up", icon: "🛰️" },
  { name: "Starship", units: "12 Units", value: "$95,000,000.00", status: "Testing", statusType: "pending", icon: "🪐" },
  { name: "Dragon", units: "8 Units", value: "$50,000,000.00", status: "+8.23%", statusType: "up", icon: "🐉" },
];

const spacexProjects = [
  { name: "Mars Colonization", investment: "$100M", progress: "Phase 2", color: "bg-red-500", icon: <Rocket className="w-5 h-5" /> },
  { name: "Global Internet", investment: "$50M", progress: "Deploying", color: "bg-blue-600", icon: <Globe className="w-5 h-5" /> },
  { name: "Lunar Base", investment: "$75M", progress: "Planning", color: "bg-gray-600", icon: <Navigation className="w-5 h-5" /> },
];

const spacexMetrics = [
  { name: "Successful Launches", value: "312", change: "+12%", icon: "🎯" },
  { name: "Satellites Deployed", value: "5,800+", change: "+45%", icon: "🛰️" },
  { name: "Crew to ISS", value: "14", change: "+3", icon: "👨‍🚀" },
];

// New promotion tiers
const withdrawalTiers = [
  { 
    name: "Basic Access (CURRENTLY UNAVAILABLE)", 
    price: "$250", 
    bonus: "Up to $100,000", 
    features: ["Limited Withdrawals", "Basic Support", "30-day Processing"],
    color: "bg-blue-900/30"
  },
  { 
    name: "Premium Unlock", 
    price: "1,000", 
    bonus: "Up to $8,000,000", 
    features: ["Full Balance Access", "Priority Support", "Instant Processing", "2X Bonus Multiplier"],
    color: "bg-gradient-to-r from-purple-900/30 to-blue-900/30",
    highlighted: true
  },
  { 
    name: "Enterprise", 
    price: "$3,000", 
    bonus: "Up to $200,000,000", 
    features: ["All Features", "VIP Support", "Instant Processing", "Dedicated Account Manager"],
    color: "bg-orange-900/20"
  },
];

const Index = () => {
  const formatLargeNumber = (num: number) => {
    if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    }
    return `$${num.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white">
      {/* Navigation - SpaceX Inspired */}
      <nav className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-10">
          {/* SpaceX Logo */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </div>
            <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent whitespace-nowrap">
              SPACEX PORTFOLIO
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 text-xs lg:text-sm">
              <span className="mr-1 lg:mr-2">🚀</span> Launches
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 text-xs lg:text-sm">
              <span className="mr-1 lg:mr-2">🛰️</span> Starlink
            </Button>
            <Button variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700 text-xs lg:text-sm">
              <span className="mr-1 lg:mr-2">💰</span> Holdings
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 text-xs lg:text-sm">
              <span className="mr-1 lg:mr-2">🎯</span> Withdraw
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          <div className="hidden sm:flex flex-col items-end text-[10px] xs:text-xs sm:text-xs md:text-sm">
            <span className="text-gray-400">Total Assets: <span className="text-white font-semibold">$350B</span></span>
            <span className="text-gray-400">Active Missions: <span className="text-blue-400">8</span></span>
          </div>
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xs sm:text-sm font-bold">
            SX
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
        {/* Portfolio Header with SpaceX Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="space-y-4 md:space-y-6">
            {/* SpaceX Logo and Main Balance */}
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="overflow-hidden">
                  <h2 className="text-xs md:text-sm text-gray-400 whitespace-nowrap">SPACEX CORPORATION</h2>
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                    <span className="block sm:hidden">$350B</span>
                    <span className="hidden sm:block md:hidden">$350B</span>
                    <span className="hidden md:block">$350,000,000,000</span>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-6 md:mb-8">
                <span className="text-xs md:text-sm text-gray-400">Company Valuation</span>
                <span className="flex items-center text-green-400 text-xs md:text-sm bg-green-900/20 px-2 py-1 rounded">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1" /> +24.5% this year
                </span>
              </div>
            </div>
            
            {/* SpaceX Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-gray-900/50 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 border border-gray-800">
                <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                  <span className="text-lg sm:text-xl md:text-2xl">1️⃣</span>
                  <h3 className="text-xs md:text-sm text-gray-400">Companies</h3>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">1</p>
                <p className="text-xs text-gray-400 mt-1">SpaceX Corporation</p>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 border border-gray-800">
                <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                  <span className="text-lg sm:text-xl md:text-2xl">💵</span>
                  <h3 className="text-xs md:text-sm text-gray-400">Cash Balance</h3>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">$770K</p>
                <p className="text-xs text-gray-400 mt-1">Liquid Assets</p>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 border border-gray-800">
                <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                  <span className="text-lg sm:text-xl md:text-2xl">⏳</span>
                  <h3 className="text-xs md:text-sm text-gray-400">Committed Cash</h3>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">$440</p>
                <p className="text-xs text-gray-400 mt-1">Pending Deployment</p>
              </div>
            </div>
          </div>

          {/* SpaceX Valuation Chart */}
          <div className="bg-gray-900/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800 backdrop-blur-sm mt-4 md:mt-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-base md:text-lg font-semibold">Company Valuation</h3>
                <p className="text-xs md:text-sm text-gray-400">2018-2027 Projection</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                <span className="text-xs md:text-sm">SpaceX Growth</span>
              </div>
            </div>
            
            <div className="h-48 sm:h-56 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#4B5563" 
                    fontSize={10}
                    tick={{ fill: '#9CA3AF' }}
                  />
                  <YAxis 
                    stroke="#4B5563" 
                    fontSize={10}
                    tick={{ fill: '#9CA3AF' }}
                    tickFormatter={(value) => `$${(value / 100000000).toFixed(0)}B`}
                  />
                  <Tooltip 
                    formatter={(value: number) => [`$${(value / 1000000000).toFixed(2)}B`, 'Valuation']}
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '12px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="url(#spacexGradient)"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, fill: '#8B5CF6' }}
                  />
                  <defs>
                    <linearGradient id="spacexGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-800 gap-3 sm:gap-0">
              <div className="space-y-1">
                <p className="text-xs md:text-sm text-gray-400">Current Valuation</p>
                <p className="text-xl md:text-2xl font-bold">$350B</p>
              </div>
              <div className="flex gap-2">
                {['1Y', '3Y', '5Y', 'MAX'].map((period) => (
                  <Button 
                    key={period}
                    variant={period === 'MAX' ? 'default' : 'outline'}
                    size="sm"
                    className={`text-xs h-6 md:h-8 px-2 md:px-3 ${period === 'MAX' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'border-gray-700 text-gray-300 hover:bg-gray-800'}`}
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ⭐️ NEW: UNLOCK WITHDRAWAL SECTION */}
        <section className="mb-8 md:mb-12 bg-gradient-to-r from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-blue-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold">🚀 JACQUELYN UNLOCK YOUR BALANCE</h2>
                  <p className="text-sm md:text-base text-gray-400">Activate withdrawal capabilities</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <Lock className="w-4 h-4 text-yellow-500" />
                    <h3 className="text-xs md:text-sm text-gray-400">Current Status</h3>
                  </div>
                  <p className="text-base md:text-lg font-semibold text-yellow-400">Withdrawal Locked</p>
                  <p className="text-xs text-gray-400 mt-1">Requires activation</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <h3 className="text-xs md:text-sm text-gray-400">Activation Fee</h3>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-white">$1,000 CARD</p>
                  <p className="text-xs text-gray-400 mt-1">One-time payment</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <Gift className="w-4 h-4 text-purple-400" />
                    <h3 className="text-xs md:text-sm text-gray-400">Potential Bonus</h3>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-purple-400">$8M</p>
                  <p className="text-xs text-gray-400 mt-1">2X bonus multiplier</p>
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs md:text-sm">Unlock full balance withdrawal capabilities</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs md:text-sm">Get 2X bonus multiplier on your investment</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs md:text-sm">Instant processing with priority support</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs md:text-sm">Access up to $800,000 in total balance</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-auto mt-4 lg:mt-0">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-purple-500/30 text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2">🚀 Premium Unlock</h3>
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">$1,000 CARD</p>
                <p className="text-base md:text-lg text-purple-300 mb-4">Get up to $8,000,000</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm md:text-base py-4 md:py-6">
                  <Unlock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Unlock Withdrawal Now
                </Button>
                <p className="text-xs text-gray-400 mt-3 md:mt-4">One-time payment • Instant access • 30-day guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* Withdrawal Tiers */}
        <section className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-2">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">💎 JACQUELYN'S WITHDRAWAL PLANS</h2>
            <span className="text-xs md:text-sm text-gray-400">CHOOSE YOUR GIFT CARD ACTIVATION TIER</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {withdrawalTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`${tier.color} rounded-xl md:rounded-2xl p-4 md:p-6 border ${tier.highlighted ? 'border-purple-500/50' : 'border-gray-800'} ${tier.highlighted ? 'ring-1 md:ring-2 ring-purple-500/30' : ''}`}
              >
                {tier.highlighted && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-semibold mb-3">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-base md:text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-3 md:mb-4">
                  <p className="text-2xl md:text-3xl font-bold text-white">{tier.price}</p>
                  <p className="text-base md:text-lg text-green-400">{tier.bonus}</p>
                </div>
                
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full text-sm md:text-base py-3 md:py-4 ${tier.highlighted ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  {tier.highlighted ? (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Get This Plan
                    </>
                  ) : (
                    'Select Plan'
                  )}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Ongoing Section */}
        <section className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-2">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">🚀 ONGOING PROJECTS</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-gray-700 hover:bg-gray-800 h-8 md:h-10 w-8 md:w-10">
                <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-700 hover:bg-gray-800 h-8 md:h-10 w-8 md:w-10">
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {spacexProjects.map((project) => (
              <div 
                key={project.name}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${project.color} flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <span className="text-xs px-2 py-1 md:px-3 md:py-1 rounded-full bg-gray-800 text-gray-300">{project.progress}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-400 mb-4 md:mb-6">Capital Deployed: {project.investment}</p>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm md:text-base py-2 md:py-3">
                    Invest More
                  </Button>
                  <Button variant="outline" className="flex-1 border-gray-700 hover:bg-gray-800 text-sm md:text-base py-2 md:py-3">
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Holdings and Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* SpaceX Holdings */}
          <section>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold">🛰️ SpaceX Holdings</h2>
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 text-sm">
                View All <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              {spacexHoldings.map((holding) => (
                <div 
                  key={holding.name}
                  className="bg-gray-900/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-800 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                        <span className="text-xl md:text-2xl">{holding.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg">{holding.name}</h3>
                        <p className="text-xs md:text-sm text-gray-400">{holding.units}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-base md:text-lg">{holding.value}</p>
                      <p className={`text-xs md:text-sm ${
                        holding.statusType === 'pending' ? 'text-yellow-400' :
                        holding.statusType === 'up' ? 'text-green-400' :
                        'text-red-400'
                      }`}>
                        {holding.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SpaceX Performance Metrics */}
          <section className="mt-6 lg:mt-0">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold">📊 Performance Metrics</h2>
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 text-sm">
                Real-time <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              {spacexMetrics.map((metric) => (
                <div 
                  key={metric.name}
                  className="bg-gray-900/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-800"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-xl md:text-2xl">{metric.icon}</span>
                      <div>
                        <h3 className="font-medium text-base md:text-lg">{metric.name}</h3>
                        <p className="text-xs md:text-sm text-gray-400">Last 12 months</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl md:text-2xl">{metric.value}</p>
                      <p className="text-xs md:text-sm text-green-400">{metric.change}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Launch */}
            <div className="mt-6 md:mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-500/20">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">🚀 Next Launch</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs md:text-sm text-gray-400">Mission:</span>
                  <span className="font-semibold text-xs md:text-sm">Starlink Group 8-1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs md:text-sm text-gray-400">Date:</span>
                  <span className="font-semibold text-xs md:text-sm">Dec 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs md:text-sm text-gray-400">Vehicle:</span>
                  <span className="font-semibold text-xs md:text-sm">Falcon 9 Block 5</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 md:mt-12 pt-6 md:pt-8 pb-4 md:pb-6 px-4 sm:px-6 md:px-8 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs md:text-sm text-gray-500 gap-3 sm:gap-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span>© 2024 SpaceX Portfolio Dashboard</span>
            <span className="hidden sm:block">•</span>
            <span>Withdrawal requires activation. Terms apply.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-green-400 flex items-center text-xs md:text-sm">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              Systems Nominal
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;