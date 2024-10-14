import { ReactNode } from "react";

interface TableProps<T> {
  columns: Array<Extract<keyof T, string>>; // Asegúrate de que solo sean strings
  data: Array<T>; // Array de objetos de tipo T
  renderActions?: (item: T) => ReactNode; // Función para renderizar acciones en cada fila
}

export const Table = <T,>({
  columns, 
  data,
  renderActions
}: TableProps<T>) => {
  
  return (
    <table style={{ width: 'auto', borderCollapse: 'collapse', margin: '10px'}}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} style={{ border: '1px solid #ddd', padding: '8px' }}>

              {column}
            </th>
          ))}
        {renderActions && <th style={{ border: '1px solid #ddd', padding: '8px' }}>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={2}>Sin registros</td>
          </tr>
        ): (
          data.map((row, rowIndex) =>(
            <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column} style={{ border: '1px solid #ddd', padding: '4px', paddingLeft:  '8px', paddingRight: '8px' }}>

                {String(row[column])}
              </td>
            ))}
            {renderActions && (
              <td style={{ border: '1px solid #ddd', padding: '4px',  paddingLeft: '8px', paddingRight: '8px' }}>

                {renderActions(row)}
              </td>
            )}
          </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

