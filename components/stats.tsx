export const Stats = () => {
  return (
    <div className="stats stats-vertical md:stats-horizontal shadow bg-[#272b3c]">
      <div className="stat">
        <div className="stat-title">Msg intested / day</div>
        <div className="stat-value">1M</div>
      </div>

      <div className="stat">
        <div className="stat-title"># TG groups indexed</div>
        <div className="stat-value">15K</div>
      </div>

      <div className="stat">
        <div className="stat-title">AI models running</div>
        <div className="stat-value">32</div>
        <div className="stat-desc">↗︎ and growing</div>
      </div>
    </div>
  );
};
