import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Info {
  title: string;
  icon: DecoImage;
}

export interface Button {
  title: string;
  href: string;
}

export interface Props {
  /** @format textarea */
  preHeadline?: string;
  headline?: string;
  headlineSubtitle?: string;
  infos?: Array<Info>;
  scrollButton?: Array<Button>;
  bannerHero?: DecoImage;
  titleImg?: string;
}

export default function Hero({
  preHeadline = "Webinar",
  headline = "Construa a sua landing page para a Black Friday em 5 minutos",
  headlineSubtitle =
    "Nesse webinar vamos te mostrar como é simples e rápido criar uma landing page +90 PageSpeed usando a deco.cx",

  infos = [
    { title: "20 de Setembro de 2023", "icon": "/callendar.svg" },
    { title: "14h BRT", "icon": "/clock.svg" },
    { title: "200 lugares", "icon": "/capacity.svg" },
  ],

  scrollButton = [
    { title: "Reserve seu lugar", "href": "#form" },
  ],

  bannerHero = "Escolha uma Imagem",
  titleImg = "Escolha uma Imagem",
}: Props) {
  return (
    <div className="flex items-center px-8 md:px-12 lg:px-16 py-16 gap-16 md: lg:py-20 lg:max-w-[1440px] xl:px-16">
      {/* <div className="absolute right-[-254px] top-[-42px] z-[-99999]">
        <div className="absolute bottom-[-420px] right-[321px] w-[821px] h-[821px] bg-gradient-to-br from-[#00FF80] to-[#D9D9D900] rounded-[821px] opacity-80 blur-3xl"></div>
        <div className="absolute right-[541px] w-[541px] h-[541px] bg-gradient-to-tl from-[#09BBB7B2] to-[#D9D9D900] rounded-[541px] opacity-70 blur-3xl "></div>
      </div> */}
      <div class="flex flex-col-reverse items-start justify-between self-sttretch font-albert-sans md:gap-4 lg:gap-6 xl:gap-12 md:flex-row lg:container lg:max-w-[1440px] text-xl md:text-base">
        <div class="flex flex-col gap-8 md:w-[46%] lg:max-w-[561px] items-start">
          <div class="text-black opacity-60 leading-3">{preHeadline}</div>
          <h1 class="text-h1-color font-bold text-3xl lg:text-5xl xl:text-6.5xl leading-tight tracking-[-0.64px]">
            {headline}
          </h1>
          <h2 class="text-h2-color font-normal opacity-60 text-xl/9 lg:text-2xl xl:text-3.5xl leading-tight">
            {headlineSubtitle}
          </h2>
          {!!infos?.length && (
            <ul class="flex flex-col md:flex-col gap-2 md:gap-3">
              {infos.map(({ icon, title }) => (
                <li class="flex flex-row items-center gap-5">
                  <img
                    class="object-cover"
                    src={icon}
                    alt={title}
                  />
                  <p aria-label={title} class="align-middle">{title}</p>
                </li>
              ))}
            </ul>
          )}
          {scrollButton.map(({ href, title }) => (
            <a
              target="_blank"
              href={href}
              aria-label={title}
              class="flex text-[16px] bg-[#02F67C] py-4 px-[22px] w-52 h-14 font-medium text-h2-color rounded-3xl items-center justify-center text-center gap-2 hover:opacity-75"
            >
              {title}
            </a>
          ))}
        </div>
        <div class="relative flex w-[48%] max-w-[583px] h-[100%]">
            <div class="absolute md:w-[400px] md:top-[-18vh] h-[400px] xl:w-[821px] xl:h-[821px] bg-gradient-to-tl from-[#00FF80] to-[#D9D9D9] rounded-full top-[-400px] left-[90%] transform -translate-x-1/2 blur-3xl z-[-999] opacity-70"></div>
            <div class="absolute md:w-[270px] md:bottom-0 h-[270px] xl:w-[541px] xl:h-[541px] bg-gradient-to-r from-[#09BBB7B2] to-[#D9D9D9] rounded-full bottom-8 left-1/4 transform -translate-x-1/2 blur-3xl z-[-999] opacity-80"></div>
            <div className="flex aspect-[53/65] xl:w-[583px] w-[100%] h-[100%] z-20">
                <img
                    className="bg-[#053535] h-[94%] w-[100%]"
                    alt={titleImg}
                    src={bannerHero}
                />
            </div>
        </div>
      </div>
    </div>
  );
}