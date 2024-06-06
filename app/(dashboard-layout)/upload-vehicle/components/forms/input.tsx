type Props = {
  labelTXT: string;
};

export default function FormInput({ labelTXT }: Props) {
  return (
    <div className="w-full">
      <label htmlFor="" className="font-medium text-sm">
        {labelTXT}
      </label>
      <div className="w-full">
        <input
          type="text"
          className="w-full rounded-lg border border-gray-400 bg-white py-1.5 pr-8 pl-3 font-normal text-sm text-zinc-600"
        />
      </div>
    </div>
  );
}
