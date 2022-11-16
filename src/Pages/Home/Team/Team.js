import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("./Team.json")
      .then((response) => response.json())
      .then((jsonData) => setTeam(jsonData));
  }, []);
  return (
    <div className="py-10">
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-orange-500">Team</p>
        <h2 className="text-4xl font-bold my-4">Meet Our Team</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 shadow-sm md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {team.map((team) => (
          <TeamCard key={team._id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default Team;
