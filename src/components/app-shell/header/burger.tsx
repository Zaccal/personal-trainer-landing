import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

interface BurgerProps {
  className?: string;
}

export default function Burger({ className }: BurgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className={className}
        render={
          <Button className="border-primary hover:bg-primary text-primary hover:text-white" size="icon-lg" variant="outline">
            <HugeiconsIcon icon={Menu01Icon} />
          </Button>
        }
      />

      <SheetContent className="border-none">
        <SheetHeader>
          <SheetTitle>Меню</SheetTitle>
          <SheetDescription>Выберите пункт из меню</SheetDescription>
          <nav className="mt-12">
            <ul className="flex text-xl flex-col [&_li]:border-l-2 [&_li]:border-primary [&_li]:px-4 gap-8 uppercase">
              <li onClick={() => setIsOpen(false)}>
                <a href="#about">ОБО МНЕ</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#workout-plans">Программы тренировок</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#prices">Цены</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#">Отзывы клиентов</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#">Галерея</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#">Частые вопросы</a>
              </li>
            </ul>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
