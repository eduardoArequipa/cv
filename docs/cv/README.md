# CV tecnico

La fuente editable es `CV_Fullstack_Tecnico_Jorge_Arequipa.html`. El PDF publico
conserva su nombre para mantener los enlaces de descarga del portafolio.

## Regenerar

Requisitos: LibreOffice, la fuente Liberation Sans y las herramientas Poppler
(`pdfinfo`, `pdftotext`, `pdftoppm`). Ejecutar desde la raiz del repositorio:

```bash
mkdir -p /tmp/portfolio-cv-review
libreoffice -env:UserInstallation=file:///tmp/portfolio-cv-review/lo-profile \
  --headless \
  --convert-to 'pdf:writer_pdf_Export:{"UseTaggedPDF":{"type":"boolean","value":"true"}}' \
  --outdir /tmp/portfolio-cv-review \
  docs/cv/CV_Fullstack_Tecnico_Jorge_Arequipa.html

pdfinfo /tmp/portfolio-cv-review/CV_Fullstack_Tecnico_Jorge_Arequipa.pdf
pdfinfo -url /tmp/portfolio-cv-review/CV_Fullstack_Tecnico_Jorge_Arequipa.pdf
pdftotext -layout /tmp/portfolio-cv-review/CV_Fullstack_Tecnico_Jorge_Arequipa.pdf -
pdftoppm -scale-to 1500 -png -singlefile \
  /tmp/portfolio-cv-review/CV_Fullstack_Tecnico_Jorge_Arequipa.pdf \
  /tmp/portfolio-cv-review/preview
```

Confirmar una pagina A4, ocho enlaces y texto completo y legible. Revisar
`/tmp/portfolio-cv-review/preview.png` para detectar recortes o superposiciones.
Mantener el cuerpo de texto en 10.5 puntos como minimo.

Solo despues de revisar el resultado:

```bash
cp /tmp/portfolio-cv-review/CV_Fullstack_Tecnico_Jorge_Arequipa.pdf \
  public/CV_Fullstack_Tecnico_Jorge_Arequipa.pdf
```

La exportacion no requiere acceso a sitios externos. Los enlaces del documento
son destinos clicables; no se insertan imagenes ni recursos remotos.
