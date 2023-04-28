import JsPDF from "jspdf";
import html2canvas from "html2canvas";
export const htmlStringToPdf = async (
  invoiceNo: string | number = 1,
  htmlString: any
) => {
  const doc = new JsPDF();
  html2canvas(htmlString).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    doc.addImage(
      imgData,
      "PNG",
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight()
    );

    doc.save(`invoice${invoiceNo}.pdf`);
  });
};
