import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Search, Hash, Terminal } from "lucide-react";

const Show = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://codeforces.com/api/user.status?handle=avi_777")
      .then(res => res.json())
      .then(json => {
        if (json.status !== "OK") return;

        const saved = new Set();
        const result = [];

        json.result.forEach(sub => {
          if (sub.verdict !== "OK") return;

          const problem = sub.problem;
          const contest = problem.contestId || "practice";
          const index = problem.index;
          const name = problem.name;

          const key = `${contest}_${index}_${name}`;
          if (saved.has(key)) return;
          saved.add(key);

          result.push({
            contest,
            index,
            name,
            language: sub.programmingLanguage,
            id: sub.id
          });
        });

        setData(result);
      })
      .catch(err => console.log(err));
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(item.contest).includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-orange-500/30">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">CF</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Submissions</h1>
              <p className="text-xs text-white/40">Contest Explorer</p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input 
              type="text"
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none text-sm"
            />
          </div>

        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { label: 'Total', value: data.length, icon: Hash },
            { label: 'Languages', value: new Set(data.map(d => d.language)).size, icon: Terminal },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4"
            >
              <stat.icon className="w-5 h-5 text-orange-400" />
              <div>
                <p className="text-xs text-white/40">{stat.label}</p>
                <p className="text-lg font-bold">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#141414] border border-white/10 rounded-2xl p-5 hover:border-orange-500/30 transition"
              >
                <div className="flex justify-between mb-3">
                  <span className="text-xs text-orange-400">ID: {item.id}</span>
                  <span className="text-xs text-white/40">C: {item.contest}</span>
                </div>

                <h3 className="text-lg font-bold mb-2">
                  <span className="text-orange-500">{item.index}</span> {item.name}
                </h3>

                <p className="text-xs text-white/60">{item.language}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <div className="text-center mt-10 text-white/30">
            No submissions found
          </div>
        )}

      </main>
    </div>
  )
}

export default Show