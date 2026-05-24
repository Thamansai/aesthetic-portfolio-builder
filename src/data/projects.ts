import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  year: string;
  role: string;
  tags: string[];
  cover: string;
  summary: string;
  sections: { heading: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "atelier-noir",
    index: "01",
    title: "Atelier Noir",
    client: "Maison Noir",
    year: "2025",
    role: "Art Direction · Identity",
    tags: ["Identity", "Print", "Editorial"],
    cover: project1,
    summary:
      "A monochrome identity system for a Parisian atelier — built on a single rule: nothing extra.",
    sections: [
      {
        heading: "Premise",
        body: "Maison Noir came to us with a closet full of references and one demand: restraint. We answered with a single typographic system, three weights of paper, and a wordmark drawn over four weeks.",
      },
      {
        heading: "System",
        body: "The grid is a 12-column foundation broken on purpose. Headlines breathe across spreads. Captions live in the margins, set at 9/12. Every page is built from the same parts, arranged differently.",
      },
    ],
  },
  {
    slug: "ground-floor",
    index: "02",
    title: "Ground Floor",
    client: "Foster & Co. Architects",
    year: "2024",
    role: "Web · Editorial Design",
    tags: ["Web", "Architecture"],
    cover: project2,
    summary:
      "A portfolio site for a studio whose work is measured in concrete and light. We built one to match.",
    sections: [
      {
        heading: "Approach",
        body: "Architecture sites usually overcompensate with motion. We removed almost all of it. Long scrolls. Quiet transitions. Photography given the room it deserves.",
      },
      {
        heading: "Outcome",
        body: "Bounce rate down 38%. Average session length doubled. Three new commissions in the first quarter after launch.",
      },
    ],
  },
  {
    slug: "vessel",
    index: "03",
    title: "Vessel",
    client: "Studio Hayashi",
    year: "2024",
    role: "Packaging · Brand",
    tags: ["Packaging", "Ceramics"],
    cover: project3,
    summary:
      "Packaging and brand language for a ceramics studio working in single-fire stoneware.",
    sections: [
      {
        heading: "Material",
        body: "We sourced uncoated kraft and a single ink. The labels are letterpressed by hand in a workshop two blocks from the studio.",
      },
      {
        heading: "Voice",
        body: "Short sentences. Sentence case. Never more than the object needs.",
      },
    ],
  },
  {
    slug: "north-light",
    index: "04",
    title: "North Light",
    client: "Aperture Quarterly",
    year: "2023",
    role: "Editorial · Type Design",
    tags: ["Editorial", "Magazine"],
    cover: project1,
    summary:
      "A quarterly print object for a photography journal — designed to be kept on the shelf, not the coffee table.",
    sections: [
      { heading: "Format", body: "230 × 305mm. Smyth-sewn. Uncoated 120gsm interior, 300gsm cover, foil-stamped." },
      { heading: "Type", body: "A custom display cut drawn for the masthead. Body in Plus Jakarta Sans, set at 9.5/14." },
    ],
  },
  {
    slug: "low-frequency",
    index: "05",
    title: "Low Frequency",
    client: "Field Recordings Co.",
    year: "2023",
    role: "Identity · Web",
    tags: ["Music", "Identity"],
    cover: project2,
    summary:
      "Identity and digital platform for an ambient music label releasing one record per season.",
    sections: [
      { heading: "Rhythm", body: "Four releases a year. Four covers. Four colorways pulled from the recording's location at golden hour." },
      { heading: "Site", body: "Audio plays inline. Type sets in motion only when scrubbed. Nothing else moves." },
    ],
  },
  {
    slug: "after-hours",
    index: "06",
    title: "After Hours",
    client: "Hôtel Mira",
    year: "2022",
    role: "Brand · Signage",
    tags: ["Hospitality", "Signage"],
    cover: project3,
    summary:
      "Wayfinding and brand language for a late-night boutique hotel in the 11ème.",
    sections: [
      { heading: "Wayfinding", body: "Cast brass numerals, set at thigh height. Hand-painted directionals on raw plaster." },
      { heading: "Print", body: "Welcome cards letterpressed. Room directories bound in linen." },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
