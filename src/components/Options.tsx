"use client";
import React, { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UseChatContext from "@/app/hooks/useChatContext";
import { GptModels } from "@/store/store";

const models: GptModels[] = ["gpt-4-1106-preview", "gpt-3.5-turbo"];

function Options() {
  const { setOptions, options } = UseChatContext();

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="flex items-center gap-4">
          <Separator className="flex-1/3" />
          <AccordionTrigger className="flex items-center  gap-1 border-none uppercase  hover:text-gray-400">
            Options
          </AccordionTrigger>
          <Separator className="flex-1/3" />
        </div>
        <AccordionContent>
          <Select
            onValueChange={(e: GptModels) =>
              setOptions({ ...options, model: e })
            }
            defaultValue={options.model}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={options.model} />
            </SelectTrigger>
            <SelectContent>
              {models.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Options;
