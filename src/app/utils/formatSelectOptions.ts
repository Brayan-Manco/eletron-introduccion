// utils/formatSelectOptions.ts

interface SelectOption {
    label: string;
    value: string | number;
  }
  
export const formatSelectOptions = (
    data: any[],
    labelKey: string,
    valueKey: string
  ): SelectOption[] => {
    return data.map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
    }));
};

//Ejemplo de uso
// const formattedData = formatSelectOptions(data, 'name', 'id');
  