---
name: GitHub workflow push authentication
description: Why a fine-grained token may not bypass Replit OAuth workflow restrictions.
---

Git may rewrite `https://github.com/` URLs to Replit's internal GitHub proxy. Supplying a personal-token credential helper alone does not bypass that proxy.

**Why:** Workflow-file pushes continued to receive an OAuth workflow-scope rejection despite a repository-scoped token being available.

**How to apply:** Inspect the current Git URL rewrite rules before retrying. When the rewrite matches `https://github.com/`, an explicit `https://github.com:443/` URL avoids that prefix. Use a one-command credential helper that consumes the secret from the environment, clear inherited helpers for that command, and never print or persist the credential. Do not change the repository's remote permanently.
