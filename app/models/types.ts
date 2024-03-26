export interface OriginalPDFtype {
  createdAt: string;
  newPDF: newPDFtype[] | [null];
  originalPdfId: string;
  originalPdfName: string;
}

export interface newPDFtype {
  id: string;
  name: string;
  createdAt: string;
}
