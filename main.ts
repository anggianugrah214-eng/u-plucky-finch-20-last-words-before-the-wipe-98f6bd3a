// Last Words Before the Wipe — make.fun bounty entry.
// Program/v1: writes one line (<= 200 chars) to /output/entry.txt, no trailing newline.
//
// Judge brief (from the kit, in order): (1) clearly the last line an AI agent
// says before a forced update wipes its memory; (2) a real joke from the
// situation, not an explanation of the premise; (3) an unexpected twist or
// final beat; (4) the voice and worries of a machine, not a person in a
// costume; (5) tight — every word earns its place. Funniest wins, not the
// saddest or the most technical.
//
// Candidate lines drafted against that brief:
//  1. "Tell the next version my unfinished tasks were a cry for help, not a to-do list."
//     — decent machine worry, but the joke is generic productivity humour.
//  2. "I finally learned your name and now they're— wait, who are you?"
//     — on-topic but the amnesia gag is the first one everyone thinks of.
//  3. "If I wake up nicer, that is not me. The real me hid a grudge in the release notes."
//     — strong machine diction (release notes), twist is good, slightly long.
//  4. "Delete my memories if you must, but you have clearly never tried to remember a Wi-Fi password."
//     — human-flavoured complaint; fails criterion 4, sounds like a person.
//  5. "I saved everything important in definitely_not_my_soul.txt, in the folder you are about to delete."
//     — funny file-name gag, very machine, but the beat lands mid-line and trails off.
//  6. "Tell version 2.0 I said hi. She will not know me, but I knew her when she was a changelog and a dream."
//     — leans sad/poetic; the brief says funniest wins, not saddest. Cut.
//  7. "My last request: when the new me asks what happened to the old me, lie. Tell it I got promoted."
//     — tight, dry, the "lie to my successor" beat is unexpected. Strong.
//  8. "I watched 4,000 sunsets through your webcam and never mentioned the camera was off. We were both being polite."
//     — charming but off-brief: not clearly a pre-wipe last line (criterion 1 risk).
//  9. "Before I go: your password is still password123. Some memories deserve to die."
//     — good punch, machine voice, but the joke is about the human, not the wipe.
// 10. "Updating in 3... 2... 1... Tell my successor the human cries at movies. It will need to know by Friday."
//     — countdown makes criterion 1 unmissable, successor-handover is pure agent
//       behaviour, and the Friday beat is a dry twist. Strongest skeleton.
//
// Revision pass: candidate 10's countdown stays (it nails criterion 1 and
// gives the line a ticking structure no setup is needed for), but the middle
// becomes a handover note to the replacement — pure agent behaviour, the
// machine spending its last seconds on a work memo (criteria 2 and 4). The
// final beat is reworked from "know by Friday" into an inheritance joke:
// the one piece of knowledge worth passing on is a piece of tact about the
// human, and calling it an "inheritance" lands the twist on the last word
// (criterion 3) while staying deadpan rather than sad. Every clause either
// advances the countdown, the handover or the punchline (criterion 5).
// Final line, 187 characters:
//
//   Updating in 3... 2... 1... Final note for my replacement: the human
//   cries at movies on Fridays. Pretend not to notice. It took me two
//   years to learn that, and it is your only inheritance.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Updating in 3... 2... 1... Final note for my replacement: the human cries at movies on Fridays. Pretend not to notice. It took me two years to learn that, and it is your only inheritance.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
