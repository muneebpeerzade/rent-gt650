import MrClean from "/mr_clean.png";
import CTA from "@/components/CTA";
const Hero = () => {
  return (
    <div className="min-h-svh container mx-auto z-10  flex flex-col justify-center gap-8 items-center ">
      <div className="space-y-5 px-8 md:px-0">
        <div className="space-y-3 text-center">
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight ">
            THE ROYAL ENFIELD <br className="" />
            CONTINENTAL GT 650 TWIN
          </h2>
          <p className="text-foreground text-sm md:text-base">
            Shiny chrome, 648cc parallel twin, 47 HP at 7,150 RPM built to ride,
            built to thrill, built to turn heads.
          </p>
        </div>
        <div className="space-y-3">
          <CTA />
          <p className="text-xs text-center text-muted-foreground">
            🎉speacial discounts for college send-offs & wedding
          </p>
        </div>
      </div>
      <img src={MrClean} className="max-h-96" />
      <footer className="text-center text-xs self-center absolute bottom-5">
        <p className="text-muted-foreground">
          © 2025 GT650 Rentals. Terms & Conditions apply
        </p>
      </footer>
    </div>
  );
};

export default Hero;
