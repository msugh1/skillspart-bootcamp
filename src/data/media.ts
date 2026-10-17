const u = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export interface Media {
  id: string;
  src?: string;
  alt: string;
  credit?: string;
  pos: string;
}

export const MEDIA = {
  hero: { id: "", src: "/photos/hero-learners.png", alt: "Four young African learners studying together on the grass with laptops and notes", pos: "center 45%" },
  lab: { id: "1655720357872-ce227e4164ba", alt: "Three young women discussing their work on laptops and tablets", credit: "Iwaria Inc.", pos: "center 55%" },
  cyber: { id: "1604933762021-54a5858c9832", alt: "A young woman with long braids working on a laptop at a desk", credit: "Daniel Thomas", pos: "center 35%" },
  learner: { id: "1620829813573-7c9e1877706f", alt: "A young man concentrating while working on a laptop", credit: "Kojo Kwarteng", pos: "center 25%" },
  classroom: { id: "1719159381981-1327b22aff9b", alt: "Students working at computers in a bright school computer lab", credit: "Haseeb Modi", pos: "center 60%" },
} satisfies Record<string, Media>;

export const img = (key: keyof typeof MEDIA, w: number, h: number) => {
  const m: Media = MEDIA[key];
  return m.src ?? u(m.id, w, h);
};
