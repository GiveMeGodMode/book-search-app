type Props = {
  placeholder: string;
  value: string;
  setValue: (text: string) => void;
  onChangeQuery: () => void;
};
const SearchInput = ({ placeholder, value, setValue, onChangeQuery }: Props) => {
  return (
    <div className="search-input">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onChangeQuery()}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
