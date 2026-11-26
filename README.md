# Qeflo (قفلو)

A study lock that stays locked until you pass a short exam on what you just studied.

**How it works**
1. Pick a subject and a study time.
2. Qeflo covers the screen with a lock and a countdown. Leaving the tab is counted.
3. When time ends, you take a multiple-choice exam from your own question bank. Pass the mark (default 80%) to unlock. Fail and you wait 20 seconds for a fresh exam.

**Features**
- Arabic and English UI (RTL aware)
- Question bank per subject, manual entry, JSON import/export
- Question generator: paste notes, get cloze multiple-choice questions (runs fully in the browser)
- Stats: sessions, pass rate, minutes studied, day streak
- Installable PWA, works offline; data stays in localStorage
- Optional zero-dependency Node backend that syncs state to JSON files

**Run**
```
npm start      # http://localhost:3000
```
Or open `public/index.html` / host `public/` on any static host (GitHub Pages works). Without the backend the app uses localStorage only.

**Honest limits**: a web page cannot lock the whole phone. This version locks the Qeflo page, warns before leaving, and logs when you leave. System-wide locking is the Android roadmap below.

## Roadmap
- Android app (Kotlin, foreground service + overlay / Digital Wellbeing app-block APIs) that blocks chosen apps until the exam passes
- Spaced repetition for failed questions
- Share question banks between classmates
- Better Arabic question generation (stemming-aware distractors)

MIT licensed.

## Research notes
Existing projects looked at (all Android or iOS app blockers gated by flashcards): Passlingo, ProcrastiLearn, AnkiBlock, Gatekeeper (OrenSegal), Scrolliosis, StudyLock. Qeflo differs by gating on a full short exam (pass mark) instead of one card, building the exam from your own notes, Arabic-first UI, and running with no install in a browser. Missed questions come up first in later exams.
