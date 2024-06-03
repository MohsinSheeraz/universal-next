import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

type Props = {
    placeholder?: string;
    list?: any;
};

export default function SearchInput({ placeholder, list }: Props) {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(null);

    const filteredPeople =
        query === ""
            ? list
            : list?.filter((itm: any) => {
                return itm.name.toLowerCase().includes(query.toLowerCase());
            });

    return (
        <div className="">
            <Combobox value={selected} onChange={(value) => setSelected(value)}>
                <div className="relative">
                    <ComboboxInput
                        className={clsx(
                            "w-full rounded-lg border border-gray-400 bg-white py-1.5 pr-8 pl-3 font-normal text-sm text-zinc-600",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                        displayValue={(person: any) => person?.name}
                        onChange={(event: any) => setQuery(event.target.value)}
                        placeholder={placeholder ?? ""}
                    />
                    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                        <ChevronDownIcon className="size-4 fill-gray-500 group-data-[hover]:fill-gray-700" />
                    </ComboboxButton>
                </div>
                <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                >
                    <ComboboxOptions
                        anchor="bottom"
                        className="w-[var(--input-width)] rounded-xl border border-gray-400 bg-white p-1 [--anchor-gap:var(--spacing-1)]"
                    >
                        {filteredPeople?.map((person: any) => (
                            <ComboboxOption
                                key={person.id}
                                value={person}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                            >
                                <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
                                <div className="text-sm/6 text-zinc-500">{person.name}</div>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Transition>
            </Combobox>
        </div>
    );
}
