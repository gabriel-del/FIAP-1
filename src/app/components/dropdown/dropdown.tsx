import { useRef, useState } from "react";
import styles from "./dropdown.module.scss";
import { DropdownOption } from "@/app/models/dropdown-options";
import Image from "next/image";
import { useBasePath } from "../../hooks/useBasePath";

export type DropdownProps = Readonly<{
  options: DropdownOption[];
  placeholder: string;
  onSelect?: (option: DropdownOption) => void;
}>;

export default function Dropdown({
  placeholder,
  options,
  onSelect,
}: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(null);
  const { getAssetUrl } = useBasePath();
  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (option: DropdownOption) => {
    options.forEach((opt) => {
      opt.selected = false;
    });

    option.selected = true;
    setSelected(option);
    setOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className={styles.container} ref={ref}>
      <div
        className={`${styles.header} ${open ? styles.active : styles.inactive}`}
        onClick={toggleOpen}
        tabIndex={0}
      >
        {selected ? selected.label : placeholder}
        <div className={`${styles.arrow} ${open ? styles.rotateArrow : ""}`}>
          <Image
            src={getAssetUrl("/imagens/icons/arrow_drop_down.svg")}
            alt="Ícone seta dropdown"
            width={16}
            height={16}
          />
        </div>
      </div>
      {open && (
        <ul className={styles.options}>
          {options.map((op) => (
            <li
              key={op.value}
              className={op?.selected ? styles.bold : ""}
              onClick={() => handleSelect(op)}
            >
              {op.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
