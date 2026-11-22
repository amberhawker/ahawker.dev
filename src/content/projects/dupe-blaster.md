---
title: "Dupe Blaster"
year: 2026
role: "Family photo preservation · in progress"
shortDescription: "A multithreaded deduplication tool helping a family turn a lifetime of analog photos into an organized digital archive. It finds duplicate scans by content hash and quarantines them, with metadata restoration between paired scans in progress."
highlights:
  - "SHA-256 content hashing to detect true duplicates, not just matching filenames"
  - "Thread-pool directory traversal for large archives"
  - "Duplicates moved to a quarantine folder with a full results report"
  - "Planned: transfer metadata from back-of-photo scans onto the matching front scans"
tags: ["Python", "Multithreading", "SHA-256", "CLI", "File automation"]
featured: false
---

I'm helping a family digitize their analog photo collection. We have decades of prints being scanned in so they can be organized, shared, and preserved. The same images ended up duplicated across folders during scanning, and many photos have a paired scan of the back of the print containing handwritten notes about who's in the photo and when it was taken.

Dupe Blaster walks the archive with a thread pool, hashes every file with SHA-256, and moves true duplicates into a quarantine directory organized by hash, writing out a full report of what it found. Hashing by content means it catches duplicates even when the filenames differ.

The next piece in progress is pairing front and back scans: copying the context captured in the back-of-photo scans onto the front image files as metadata, so the archive keeps the handwritten notes without needing two files per photo. It's the kind of project where the tooling matters less than what it's for: making sure a family's history stays usable for the next generation.
