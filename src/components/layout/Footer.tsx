import { lang, useTranslate } from "@/lib/translation";
import { getFullName, getFullNameFa } from "@/lib/utils";

interface pr {
  lang: lang
}
const Footer = ({lang}:pr) => {
  const t = useTranslate(lang)
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          {t(
            `© 2024 ${getFullName()}. Built with Next.js and Tailwind CSS`,
            `© 2024 ${getFullNameFa()}. ساخته شده با Next.js و Tailwind CSS`,
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
