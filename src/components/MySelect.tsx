import { Option } from "../types/index";

type Props = {
  name: string;
  value: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
};
const MySelect = ({ value, options, name, onChange }: Props) => {
  return (
    <div className="my-select">
      <div className="my-select__name text-white">{name}</div>
      <select
      onChange={(e) => onChange(e)}
        value={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
