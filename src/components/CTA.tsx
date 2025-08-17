import WhatsappIcon from "@/components/WhatsappIcon";
import { Button } from "@/components/ui/button";
const CTA = () => {
  const phone = "+918050616307";
  const message = "Hey, I'd like to rent your bike";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Button
      className="rounded-none w-full"
      size={"lg"}
      variant={"default"}
      onClick={() => window.open(whatsappUrl, "_blank")}
    >
      <WhatsappIcon className="stroke-green-500" />
      Reserve Your GT650 Today
    </Button>
  );
};

export default CTA;
