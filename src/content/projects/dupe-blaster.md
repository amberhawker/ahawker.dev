---
title: "Dupe Blaster"
year: 2026
role: "Client tooling · in progress"
shortDescription: "A multithreaded deduplication tool built for a client's photo archive - finds duplicate scans by content hash and quarantines them, with metadata restoration between paired scans in progress."
highlights:
  - "SHA-256 content hashing to detect true duplicates, not just matching filenames"
  - "Thread-pool directory traversal for large archives"
  - "Duplicates moved to a quarantine folder with a full results report"
  - "Planned: transfer metadata from back-of-photo scans onto the matching front scans"
tags: ["Python", "Multithreading", "SHA-256", "CLI", "File automation"]
featured: false
---

A client project involving a large archive of scanned photographs - where the same images had ended up duplicated across folders, and where many photos have a paired scan of the back of the print containing handwritten metadata.

Dupe Blaster walks the archive with a thread pool, hashes every file with SHA-256, and moves true duplicates into a quarantine directory organized by hash, writing out a full report of what it found. Hashing by content means it catches duplicates even when the filenames differ.

The next piece in progress is pairing front and back scans: copying the useful metadata captured in the back-of-photo scans onto the front image files, so the archive keeps the handwritten context without needing two files per photo.
