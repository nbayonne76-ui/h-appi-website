export default function ChapterHeader({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
        <span className="text-happi-blue">{number}</span> — {eyebrow}
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
}
