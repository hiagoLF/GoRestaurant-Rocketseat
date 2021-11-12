import { Container } from "./styles";

interface IconInterface {
  size: number;
}

interface InputProps {
  name: string;
  icon?: React.FC<IconInterface>;
  placeholder: string;
  onChange: (text: string) => void;
  initialValue?: string | number;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  onChange,
  initialValue,
  icon: Icon,
  value,
}) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input
        defaultValue={initialValue}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </Container>
  );
};

export default Input;
