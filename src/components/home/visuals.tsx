import Image from "next/image";

export function OrbitArt() {
  return <div className="hero-art" aria-hidden="true"><div className="orbit" /><div className="orbit" /><div className="orbit" /><div className="disc" /><div className="orbit-point" /></div>;
}

const concepts = [
  { title: "Brand Identity", image: "brand-identity", alt: "Coffee brand logo, colour palette, and typography" },
  { title: "Website Design", image: "website-design", alt: "Desktop and mobile landing page concepts for an interiors studio" },
  { title: "Social Media Creative", image: "social-media-creative", alt: "Three coordinated social posts for a running club" },
  { title: "Meta Ads", image: "meta-ads", alt: "Two versions of a coffee campaign ad with the same offer" },
];

export function ConceptGrid() {
  return (
    <div className="concept-grid">
      {concepts.map(({ title, image, alt }) => (
        <figure className="concept" key={image}>
          <Image
            className="concept-art"
            src={`/brand/portfolio/${image}.webp`}
            alt={alt}
            width={800}
            height={640}
            sizes="(max-width: 1050px) 50vw, (max-width: 1320px) 25vw, 310px"
          />
          <figcaption>{title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
