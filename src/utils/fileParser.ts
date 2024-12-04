import * as XLSX from 'xlsx';
import Papa from 'papaparse';

export const parseExcelFile = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
        resolve(jsonData);
      } catch (err) {
        reject(new Error('Error parsing Excel file'));
      }
    };
    reader.onerror = () => reject(new Error('Error reading file'));
    reader.readAsArrayBuffer(file);
  });
};

export const parseCSVFile = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(new Error('Error parsing CSV file'));
      },
      header: false
    });
  });
};

export const parseHTMLFile = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const htmlContent = e.target?.result as string;
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const tables = doc.getElementsByTagName('table');
        
        if (tables.length === 0) {
          throw new Error('No tables found in HTML file');
        }

        const firstTable = tables[0];
        const rows = Array.from(firstTable.rows);
        const jsonData = rows.map(row => 
          Array.from(row.cells).map(cell => cell.textContent?.trim() || '')
        );
        
        resolve(jsonData);
      } catch (err) {
        reject(new Error('Error parsing HTML file'));
      }
    };
    reader.onerror = () => reject(new Error('Error reading file'));
    reader.readAsText(file);
  });
};

export const parseFile = async (file: File): Promise<any[]> => {
  const extension = file.name.split('.').pop()?.toLowerCase();
  
  switch (extension) {
    case 'xlsx':
    case 'xls':
      return parseExcelFile(file);
    case 'csv':
      return parseCSVFile(file);
    case 'html':
    case 'htm':
      return parseHTMLFile(file);
    default:
      throw new Error('Unsupported file format');
  }
};