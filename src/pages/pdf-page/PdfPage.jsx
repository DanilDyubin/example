import PdfSchedule from './pdf-schedule/PdfSchedule';
import PdfForm from './pdf-form/PdfForm';

import s from './pdfPage.module.scss';

const PdfPage = () => {
  return (
    <div className={s.report}>
      <div className={s.container}>
        <h2 className={s.title}>Отчет о выполненных работах</h2>
        <PdfForm />
        <PdfSchedule />
        <PdfForm />
        <PdfSchedule />
      </div>
    </div>
  );
};

export default PdfPage;
