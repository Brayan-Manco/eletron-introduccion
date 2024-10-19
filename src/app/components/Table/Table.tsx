import { ReactNode, useEffect, useState } from "react";
import './Table.css'
import { Button } from "../Button/Button";
import { Input } from "../Input";

interface TableProps<T> {
  columns: Array<Extract<keyof T, string>>; // Asegúrate de que solo sean strings
  data: Array<T>; // Array de objetos de tipo T
  renderActions?: (item: T) => ReactNode; // Función para renderizar acciones en cada fila
  itemsPerPage?: number;
}

export const Table = <T,>({
  columns, 
  data,
  renderActions,
  itemsPerPage = 5,
}: TableProps<T>) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<Array<T>>([]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      columns.some((column) =>
        String(item[column]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [data, searchTerm, columns]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="table-container">
      <div className="table-controls">
        <Input
          id="search"
          name="search"
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          state
        />
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
            {renderActions && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {currentData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (renderActions ? 1 : 0)} className="no-data">
                Sin registros
              </td>
            </tr>
          ) : (
            currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column}>{String(row[column])}</td>
                ))}
                {renderActions && (
                  <td className="actions-cell">{renderActions(row)}</td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="pagination">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          name="Anterior"
        />
        <span>{`Página ${currentPage} de ${totalPages}`}</span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          name="Siguiente"
        />
      </div>
    </div>
  )
};

