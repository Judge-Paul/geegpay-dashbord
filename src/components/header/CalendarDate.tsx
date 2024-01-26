import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";

export default function CalendarDate() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-[240px] justify-start text-left font-semibold"
          variant="ghost"
        >
          <CalendarDays className="mr-1 h-4 w-4 -translate-x-1" />
          {formattedDate}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar initialFocus mode="single" />
      </PopoverContent>
    </Popover>
  );
}
