"use client";

import { useRef, useState } from "react";
import { sections } from "../data";
import { REPORT_COLUMN_TITLES } from "../report-columns";
import { saveEntry, uploadSingleFile } from "./admin-api";
import { adminStrings as s } from "./admin-strings";

interface Props {
  onSaved: () => void;
}

export function ReportsAddForm({ onSaved }: Props) {
  const [colIndex, setColIndex] = useState(0);
  const [fileName, setFileName] = useState("");
  const [manualHref, setManualHref] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const section = sections.find((sec) => sec.slug === "about")!;
  const page = section.links.find((p) => p.slug === "reports")!;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const file = fileRef.current?.files?.[0] ?? null;
    const href = manualHref.trim();

    if (!fileName.trim()) {
      setMessage("Լracacrir fayli anunə.");
      return;
    }
    if (!file && !href) {
      setMessage("Verberner fayl kam manual hgum muti̋tcarir.");
      return;
    }

    setIsSaving(true);
    setMessage("");

    try {
      let fileHref = href;
      if (file) {
        const uploaded = await uploadSingleFile(file);
        fileHref = uploaded.href;
      }

      await saveEntry(
        {
          title: fileName.trim(),
          sectionSlug: section.slug,
          sectionTitle: section.title,
          pageSlug: page.slug,
          pageTitle: page.title,
          body: REPORT_COLUMN_TITLES[colIndex],
          files: [{ href: fileHref, text: fileName.trim() }],
        },
        false,
      );

      setFileName("");
      setManualHref("");
      if (fileRef.current) fileRef.current.value = "";
      setMessage("✓ " + s.saved);
      onSaved();
    } catch {
      setMessage(s.saveFailed);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>1. Ընտրել սյunакə</legend>
        <label>
          Сyunаk
          <select
            value={colIndex}
            onChange={(e) => setColIndex(Number(e.target.value))}
          >
            {REPORT_COLUMN_TITLES.map((title, i) => (
              <option key={i} value={i}>
                {i + 1}. {title}
              </option>
            ))}
          </select>
        </label>
        <a
          className="preview-link"
          href="/hy/section/about/reports"
          target="_blank"
        >
          {s.previewSelectedPage}
        </a>
      </fieldset>

      <fieldset>
        <legend>2. Fayli informacia</legend>
        <label>
          {s.titleLabel}
          <input
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Orіnak: 2025 tvakani 2-rd eramsyak"
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>{s.step3Legend}</legend>
        <label className="upload-box">
          <strong>{s.uploadFiles}</strong>
          <span>{s.uploadHint}</span>
          <input
            ref={fileRef}
            name="uploadFiles"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
          />
        </label>
        <label>
          Arxayin hgum (kam /hashvetvutiun/... path)
          <input
            value={manualHref}
            onChange={(e) => setManualHref(e.target.value)}
            placeholder="/hashvetvutiun/file.pdf   kam   https://..."
          />
        </label>
      </fieldset>

      {message && <p className="admin-hint">{message}</p>}

      <div className="admin-actions">
        <button type="submit" disabled={isSaving}>
          {isSaving ? s.saving : s.addButton}
        </button>
      </div>
    </form>
  );
}
