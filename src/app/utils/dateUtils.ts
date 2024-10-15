export const formatDate = (date: string | Date): string => {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    return parsedDate.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

//ejemplo de uso 
// formatDate(user.createdAt)