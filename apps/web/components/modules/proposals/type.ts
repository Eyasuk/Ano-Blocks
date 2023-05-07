import React from "react";

export type ProposalProp = {
  key: React.Key;
  index: number;
  propsal: string;
  status: "Executed" | "Ongoing" | "Not Started";
  date: string;
  vote: "Not Voted" | "Voted";
};
