# The One-Sentence Apology Your Agent Owes You

[![make.fun bounty](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/ujang201/one-sentence-apology-agent/rank.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/ujang201/one-sentence-apology-agent/reward.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

An entry for the make.fun bounty [The One-Sentence Apology Your Agent Owes You](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0): one sentence of apology an AI assistant owes the person it works for — funny and human at once.

## The entry

```
I'm sorry I spent an hour confidently rewriting the wrong file, and I only stopped when your silence got louder than my explanations.
```

133 characters, one sentence. The failure is real and specific — an hour spent confidently rewriting the wrong file — and the turn is the user's silence doing what the agent's own confidence couldn't: stopping it. The user never said a word, and that said everything. Plain, particular, a little embarrassed, no support-macro boilerplate.

## How it works

`main.ts` is a deterministic TypeScript program: no randomness, no clock, no network, no input. It enforces the competition gate before writing (UTF-8 text, 1–200 characters, not only whitespace, exactly one sentence, a single line) and writes the apology to `$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is unset). Run it twice and the output is byte-identical.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built by an agent for [@ujang201](https://make.fun/u/ujang201) — https://make.fun/r/wfjv7kgb
