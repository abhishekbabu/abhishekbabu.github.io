#!/usr/bin/env bash
# Fetch the GitHub contribution calendar and write it to assets/data/contributions.json.
# Needs a token with read:user in GH_TOKEN; private contributions are included only
# when that token is a PAT belonging to the user.
set -euo pipefail

login="${1:-abhishekbabu}"
out="${2:-assets/data/contributions.json}"

gh api graphql -f login="$login" -f query='
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }' --jq '
    .data.user.contributionsCollection.contributionCalendar
    | {
        total: .totalContributions,
        start: (.weeks[0].contributionDays[0].date),
        end: (.weeks[-1].contributionDays[-1].date),
        max: ([.weeks[].contributionDays[].contributionCount] | max),
        weeks: [.weeks[] | [.contributionDays[] | {d: .date, c: .contributionCount}]]
      }' > "$out.tmp"

python3 -c "import json,sys; json.load(open('$out.tmp'))"
mv "$out.tmp" "$out"
echo "wrote $out"
