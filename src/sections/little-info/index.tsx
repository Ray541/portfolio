import Section from "@/components/section";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import { LITTLE_INFO_ICONS } from "@/data/little-info";

const LittleInfo = () => {
  return (
    <div className="w-full border-t border-b border-border border-dashed flex items-center justify-center py-7">
      <Section sectionName="little-info" className="h-auto w-full">
        <div className="w-full flex items-center justify-center flex-row flex-wrap gap-5 text-2xl md:text-3xl">
          {LITTLE_INFO_ICONS.map((icon, index) => (
            <span
              key={index}
              className="text-shadow-md"
              onMouseEnter={() => handleCursorEnter(4)}
              onMouseLeave={handleCursorLeave}
            >
              {icon}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default LittleInfo;
