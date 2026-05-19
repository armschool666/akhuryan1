import https from 'https';
import fs from 'fs';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function encodeFileUrl(url) {
  return url.replace(/[^\x00-\x7F]/g, c => encodeURIComponent(c));
}

function extractMainContent(html) {
  const headerEnd = html.indexOf('</header>');
  const footerStart = html.indexOf('<footer');
  if (headerEnd < 0 || footerStart < 0) return '';
  const main = html.substring(headerEnd, footerStart);
  return main
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/tr>/gi, '\n')
    .replace(/<\/td>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
    .split('\n').map(l => l.trim()).filter(l => l.length > 2)
    .join('\n');
}

async function main() {
  const staffHtml = await fetchPage(
    'https://hatsik.schoolsite.am/%D5%B8%D6%82%D5%BD%D5%B8%D6%82%D6%81%D5%B9%D5%A1%D5%AF%D5%A1%D5%B6-%D5%AF%D5%A1%D5%A6%D5%B4%D5%A8/'
  );
  const staffContent = extractMainContent(staffHtml);
  const lines = staffContent.split('\n');

  // Find split point: line starting with U+0553 (Փ = Piwr, starts "Փոխтнорен")
  let splitIdx = lines.length;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].codePointAt(0) === 0x0553) {
      splitIdx = i;
      break;
    }
  }

  // Remove only CSS/JS junk lines from director block (lines with { } selectors etc.)
  const directorLines = lines.slice(0, splitIdx).filter(l => {
    // skip CSS: lines containing { or starting with . : @ * or are pure ASCII keywords
    if (/[{}]/.test(l)) return false;
    if (/^[:\.@\*]/.test(l)) return false;
    if (/^(img|:root|\/\*|\*\/)/.test(l)) return false;
    return true;
  });

  const teacherLines = lines.slice(splitIdx);

  // Remove sidebar (starts with Վ U+054E "Вerdyin grarrumner" or "Паhocner" U+054A)
  let teacherEnd = teacherLines.length;
  for (let i = 0; i < teacherLines.length; i++) {
    const cp = teacherLines[i].codePointAt(0);
    if (cp === 0x054E || cp === 0x054A || teacherLines[i] === 'Meta') {
      teacherEnd = i;
      break;
    }
  }
  const cleanTeacherLines = teacherLines.slice(0, teacherEnd);

  const directorBody = directorLines.join('\n').trim();
  const teacherBody = cleanTeacherLines.join('\n').trim();
  // Director title = the line containing "Тнорen" keyword (U+054F = Տ)
  const directorTitle = directorLines.find(l => l.codePointAt(0) === 0x054F) || directorLines[1] || 'Տնօրեն';

  // Also fetch the real page title for "ousouцchain казм"
  const staffTitle = ((staffHtml.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '').split('|')[0].trim();

  // Read current materials.json and replace staff entries
  const current = JSON.parse(fs.readFileSync('data/materials.json', 'utf8'));
  const withoutStaff = current.filter(e => e.sectionSlug !== 'staff');

  const staffEntries = [
    {
      id: 'wp-staff-leadership-director',
      title: directorTitle,
      sectionSlug: 'staff',
      sectionTitle: 'Անձнакаzм',
      pageSlug: 'leadership',
      pageTitle: 'Tnorenututyun',
      body: directorBody,
      files: [],
      date: '2016-01-01',
    },
    {
      id: 'wp-staff-teachers-2024',
      title: staffTitle || 'ousouцchain казм',
      sectionSlug: 'staff',
      sectionTitle: 'Андnаkazm',
      pageSlug: 'teachers',
      pageTitle: staffTitle || 'oucouцchain казм',
      body: teacherBody,
      files: [],
      date: '2024-09-01',
    },
  ];

  const result = [...withoutStaff, ...staffEntries];
  fs.writeFileSync('data/materials.json', JSON.stringify(result, null, 2), 'utf8');

  staffEntries.forEach(e => {
    process.stdout.write('=== ' + e.pageSlug + ' ===\n');
    process.stdout.write('Title: ' + e.title + '\n');
    process.stdout.write(e.body.substring(0, 500) + '\n\n');
  });
  process.stdout.write('Done. materials.json updated.\n');
}

main().catch(console.error);
