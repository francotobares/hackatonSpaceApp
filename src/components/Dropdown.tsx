import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Provincias from '../const/Provincias';

type Props = {
  onChangeText: (value: any) => void;
};

const Dropdown: React.FC<Props> = ({onChangeText}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(''); // Default value is an empty string
  const [items, setItems] = useState(Provincias.provincias);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={onChangeValue => {
        console.log(onChangeValue);
        onChangeText(onChangeValue);
      }}
    />
  );
};

export default Dropdown;
