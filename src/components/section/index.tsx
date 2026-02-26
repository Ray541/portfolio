type SectionProps = {
  sectionName: string;
  sectionNumber?: string;
  className?: string;
  sectionNumebrClassName?: string;
  children?: React.ReactNode;
};

const Section = ({
  className,
  sectionName,
  sectionNumber,
  sectionNumebrClassName,
  children,
}: SectionProps) => {
  return (
    <section
      id={sectionName}
      className="relative w-full bg-transparent flex items-center justify-center"
    >
      {sectionNumber && (
        <span className={`absolute ${sectionNumebrClassName}`}>{sectionNumber}</span>
      )}
      <div
        className={`w-full max-w-7xl container bg-transparent flex items-center justify-center ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
