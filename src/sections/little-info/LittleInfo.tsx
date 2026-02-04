import Section from "@/components/section/Section";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

const LittleInfo = () => {
  const data = [
    { icon: "🏍️" },
    { icon: "⚽" },
    { icon: "🌇" },
    { icon: "📸" },
    { icon: "🎧" },
    { icon: "🧧" },
    { icon: "🙂" },
  ];

  return (
    <div className="w-full border-t border-b border-border border-dashed flex items-center justify-center py-7">
      <Section sectionName="little-info" className="h-auto w-full">
        <div className="w-full flex items-center justify-center flex-row flex-wrap gap-5 text-2xl md:text-3xl">
          {data.map((d, index) => (
            <span
              key={index}
              className="text-shadow-md"
              onMouseEnter={() => handleCursorEnter(4)}
              onMouseLeave={handleCursorLeave}
            >
              {d.icon}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default LittleInfo;
