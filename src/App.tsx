import { Button } from "@/components/ui/button";
import WhatsappIcon from "@/components/WhatsappIcon";
import MrClean from "../public/mr_clean.png";
function App() {
  return (
    <div className="min-h-svh container mx-auto  flex flex-col justify-center gap-8 items-start ">
      <div className="space-y-5 px-8 md:px-0">
        <div className="space-y-3">
          <h2 className="font-bold text-2xl tracking-tight ">
            THE ROYAL ENFIELD
            <br />
            CONTINENTAL GT 650 TWIN
          </h2>
          <p className="text-muted-foreground text-sm">
            Shiny chrome, 648cc parallel twin, 47 HP at 7,150 RPM built to ride,
            built to thrill, built to turn heads.
          </p>
        </div>
        <div className="space-y-3">
          <Button className="rounded-none w-full" size={"lg"}>
            <WhatsappIcon className="stroke-green-500" />
            Reserve Your GT650 Today
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            🎉speacial discounts for college send-offs & wedding
          </p>
        </div>
      </div>
      <img src={MrClean} className="" />
      <footer className="text-center text-xs self-center absolute bottom-5">
        <p className="text-muted-foreground">
          © 2025 GT650 Rentals. Terms & Conditions apply
        </p>
      </footer>
    </div>
  );
}

export default App;
