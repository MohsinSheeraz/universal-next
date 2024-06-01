import { useEffect, useState } from "react"; // Import useState if you're not already using it.
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "./phone.css";
type Prop = {
  value: any;
  setValue?: any;
  label: string;
  setError: any;
  disabled?: boolean;
};

export default function PhoneNumberInput({
  value,
  setValue,
  label,
  setError,
  disabled,
}: Prop) {
  const [phoneInputValue, setPhoneInputValue] = useState(value);
  const isValid = phoneInputValue
    ? phoneInputValue && isValidPhoneNumber(phoneInputValue)
      ? true
      : false
    : true;
  useEffect(() => {
    setError(
      phoneInputValue && isValidPhoneNumber(phoneInputValue) ? true : false
    );
  }, [phoneInputValue]);
  useEffect(() => {
    setPhoneInputValue(value);
  }, [value]);
  useEffect(() => {
    setValue && setValue(phoneInputValue);
  }, [phoneInputValue]);
  return (
    <div className="w-full">
      <label
        htmlFor="phone-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <PhoneInput
        disabled={disabled}
        id="phone-input"
        className={`bg-gray-50 border ${
          isValid ? "!border-gray-300" : "!border-red-500"
        } text-gray-900 text-sm rounded-lg h-11  focus:ring-blue-500 focus:border-blue-500 block !w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder="Enter phone number"
        value={phoneInputValue}
        onChange={setPhoneInputValue}
      />
    </div>
  );
}
