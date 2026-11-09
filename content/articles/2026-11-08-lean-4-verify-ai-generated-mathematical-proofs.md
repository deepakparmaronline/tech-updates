---
title: "How Lean 4 Can Check AI-Generated Mathematical Proofs"
description: "PSI says its AI system produced a Lean-checked proof of a quantum conjecture. Learn how Lean verifies proof steps and what independent review remains."
category: "AI News"
author: "Tech Updates"
date: 2026-11-08
readingTime: "8 min read"
featuredImage: "/images/lean-4-verify-ai-generated-mathematical-proofs.svg"
tags:
  - "Lean 4"
  - "formal verification"
  - "AI mathematics"
  - "proof assistants"
  - "quantum computing"
keyTakeaways:
  - "Lean 4 is a proof assistant whose kernel checks formal proof terms against stated definitions and assumptions."
  - "PSI announced its AI-assisted Aaronson-Ambainis proof on November 6, 2026, not November 8."
  - "A Lean check is valuable evidence about formal steps but does not automatically validate the informal statement or every claim in a paper."
  - "The public PSI repository includes a Lean 4 formalization and notes about what is and is not formalized."
  - "Independent experts still need to examine the mathematical statement, paper and claimed consequences."
faqs:
  - question: "What is Lean 4?"
    answer: "Lean 4 is a programming language and proof assistant. Its small kernel checks proof terms, while tactics and automation help users construct them."
  - question: "Can Lean verify AI generated mathematics?"
    answer: "Lean can check a formal proof against definitions and assumptions encoded in Lean. It cannot by itself prove that the formal statement matches the original informal claim."
  - question: "What did PSI announce?"
    answer: "PSI announced on November 6, 2026 that an internal research system using a non-public Anthropic model produced a proof of the Aaronson-Ambainis conjecture, with a Lean formalization."
  - question: "Does Lean checking mean the research result is peer reviewed?"
    answer: "No. A kernel check verifies formal proof steps, while peer review and independent mathematical review assess the statement, assumptions, paper and claimed consequences."
  - question: "Can beginners use Lean 4?"
    answer: "Yes, but formal theorem proving has a learning curve. Start with the Lean tutorial, simple propositions and the community math library before trying a research proof."
  - question: "What should I check in an AI proof repository?"
    answer: "Check the formal statement, imports, axioms, placeholders, build instructions, Lean and Mathlib versions, theorem mapping and independent reproducibility."
contentType: "news"
---

Lean 4 is a proof assistant that lets a computer check whether a formal mathematical proof follows from its definitions and assumptions. It is useful when reviewing AI-generated mathematics because a model can propose a proof, while Lean's kernel checks the formal terms. The recent PSI announcement about the Aaronson-Ambainis conjecture is a practical example, but it was announced on November 6, 2026. This article is a guide to verification, not a claim that the announcement happened on November 8.

## News Summary

Physical Superintelligence (PSI) announced on November 6, 2026 that an internal research system using a non-public Anthropic model had produced a proof of the Aaronson-Ambainis conjecture. PSI published a paper and a Lean 4 formalization. Its research page says Lean accepted the formal proof, and the public repository describes the proof and verification notes. This article is a practical guide to understanding that verification process, not a new November 8 announcement.

The primary sources are PSI's [research announcement](https://psi.inc/research/aaronson-ambainis/) and the [public proof repository](https://github.com/physical-superintelligence/aaronson-ambainis). The [Lean Language Reference](https://lean-lang.org/doc/reference/latest/) explains the language and kernel model. The important distinction is that machine checking a formal proof is not identical to peer review of every mathematical claim in a paper.

## What Happened

PSI says its research system found a proof of the Aaronson-Ambainis conjecture, a question in quantum computing that had remained open since 2008. The company says instances of a non-public Anthropic model were used in its internal system. The proof was written up and formalized in Lean. The public repository contains the paper, Lean code and notes that explain the relationship between the written proof and the formal statements.

PSI's announcement is dated November 6, 2026. The public repository says the formal development includes four theorems with no placeholder and no added axiom, and that the Lean checks were repeated by two independent implementations of the Lean kernel within PSI's process. Those are claims and records published by the project authors. Readers should not turn them into a claim that independent outside teams have already reproduced the entire result.

The guide matters because it shows a way to separate model generated reasoning from machine checked proof terms. A model can suggest an argument, but a proof assistant requires the argument to be expressed in a formal language that the checker can evaluate.

## Why It Matters

Large language models can produce mathematical text that looks convincing while containing a gap. A proof assistant changes the task. Instead of judging only whether paragraphs sound plausible, a formal proof must be translated into a precise statement and a sequence of terms that satisfy the rules of the system. Lean checks those terms against its definitions and axioms.

This does not make mathematical review unnecessary. A proof assistant verifies the formal statement that was entered. If the formal statement is weaker than the original conjecture, the system can still accept a correct proof of the wrong or incomplete statement. A human must check that the definitions, assumptions and theorem correspond to the intended mathematics.

For AI research, this creates a useful division of labour. A model can search for ideas, propose lemmas and help write formal code. A human researcher can set the problem, inspect the assumptions and interpret the result. Lean's kernel provides a separate check of the formal proof. Each part reduces a different kind of risk, but none should be treated as a complete substitute for the others.

## Key Details

Lean 4 is both a programming language and an interactive theorem prover. Its core theory is based on dependent type theory. The kernel is deliberately small and checks proof terms. Tactics and automation help construct those terms, but the resulting proof still has to pass the kernel check. This design means a bug in a tactic does not automatically make an invalid theorem accepted, provided the kernel and foundations remain trusted.

A Lean project usually imports definitions and lemmas from a library such as Mathlib. The code states objects, assumptions and the theorem to prove. Tactics can search for a proof, simplify expressions or apply known results. At the end, Lean checks the proof term. A build can also verify that the project compiles with its declared Lean and library versions.

The [Lean reference manual](https://lean-lang.org/doc/reference/latest/) is a technical reference, not a beginner course. New users should start with the official learning material and small examples before trying a research formalization. Understanding the theorem statement is just as important as learning the syntax.

## How to Check an AI Proof

Start by finding the exact theorem statement in the repository. Read the informal claim and the formal definition side by side. Identify every variable, condition and bound. Ask whether the formal statement includes the full assumptions from the paper. If a theorem uses a helper lemma, follow the dependency chain rather than checking only the final theorem name.

Next, inspect imports, axioms and placeholders. Search for sorry, admit, custom axioms or unsafe escape hatches. A project may have legitimate assumptions, but they should be visible and explained. Review the Lean and Mathlib versions in the project configuration. A proof that compiles only with a specific version should be tested with that version before anyone claims reproducibility.

Run the build from a clean checkout using the repository's documented commands. Record the toolchain, dependency versions and output. Do not edit the source to make the build pass unless you are clearly documenting your own change. Then compare the formal proof with the paper and check any statements that are not formalized. In the PSI repository, the project notes explain which paper sections have no Lean counterpart, so a reviewer can see the scope of the machine check.

## Common Problems

A proof may compile while the reader still does not understand the result. This often happens because the theorem name is short but the statement is encoded in several definitions. Open the definitions and inspect the assumptions. Do not assume that a file called Main contains the entire argument or that a theorem name describes its exact strength.

A repository may also fail to build because the Lean version or Mathlib dependency has changed. Check the project's toolchain file and dependency lock file before updating anything. Reproducing the authors' recorded build is a different task from upgrading the project to a newer Lean release.

Another common issue is a gap between the paper and formal code. The paper may contain intuition, consequences or discussion that is not formalized. That does not invalidate the formal proof, but it limits what the machine check covers. Use a paper to Lean mapping when one exists, and record the statements that have no formal counterpart.

Finally, a public repository is not proof that an independent party has run it. Look for public build logs or a separate reproduction report. If only the authors' logs are available, describe the verification as author reported rather than independently reproduced.

## What Does Not Work

Lean does not automatically understand a paragraph in a mathematics paper and decide whether it is true. A human or an AI system must translate the mathematical claim into a formal statement and provide a proof in Lean. The checker then verifies that formal proof. The translation step is important because an incorrect or incomplete formal statement can be proved correctly.

A successful build does not prove that the mathematical consequences in the paper follow unless those consequences are also formalized and linked to the checked theorem. In the PSI example, the repository explains which parts of the paper have no Lean counterpart. A reviewer should not extend the kernel check to claims outside that scope.

A proof assistant is also not a substitute for domain expertise. It can verify a theorem from assumptions, but a researcher must decide whether the assumptions represent the intended problem, whether the result is novel and how it changes the field. Independent review remains important for both formal and informal parts of the work.

## What to Check Before Trusting the Result

A careful review should ask at least six questions. What exact statement did the authors formalize? Does it match the conjecture or only a special case? Which assumptions and imported results does it use? Are any placeholders or additional axioms present? Can another person reproduce the build from a clean checkout? Which parts of the paper are not covered by the formalization?

For the PSI repository, the public README says the formal development contains no placeholder and no added axiom in the stated theorems. It also says the proof was checked by two independent Lean kernel implementations. The repository notes identify parts of the paper without a Lean counterpart. Those details are useful, but they are not the same as an outside team independently checking the full paper and its consequences.

A good report should state what the machine checked, what the authors claim, what the repository makes available and what remains for independent review. This avoids both extremes: dismissing a formal proof because AI helped write it, or treating a successful kernel check as proof that every related claim is settled.


## Who Is Affected

This development is relevant to mathematicians who work on quantum information, researchers who use AI for theorem discovery, and developers who want a reliable way to check formal arguments. It is also useful for educators who want to show students the difference between a plausible written explanation and a proof that a formal system can verify. The PSI example is not a reason for every developer to install Lean immediately. It is a concrete case for people who need to understand how proof assistants can support research.

The practical audience includes anyone who reviews AI generated mathematical claims. A researcher can inspect the theorem statement and proof dependencies. A software engineer can reproduce the Lean build. A reader can check the repository notes and distinguish author reported checks from an independent reproduction. Each role can verify a different part of the claim.

## What Happens Next

The next useful step is independent review of the formalization and the paper to Lean mapping. Researchers can clone the public repository, install the declared Lean toolchain, run the documented build and compare the formal theorem with the conjecture as stated in the paper. Any report should identify the commit, toolchain and exact command used, so another person can repeat the check.

A second review should focus on the mathematical interpretation. Does the formal statement capture the intended conjecture? Are the assumptions equivalent to those in the paper? Are the consequences described by the authors also formalized, or are they arguments in the paper that still need human review? These questions help separate a verified formal proof from broader claims about what the result means for quantum computing.

## What We Know and Do Not Know

The public PSI announcement is dated November 6, 2026. PSI says its internal system used a non-public Anthropic model and that the resulting proof was formalized in Lean 4. The repository provides source code, a paper and notes about the formalization. Its README states that the named formal theorems contain no placeholder and no added axiom, and describes checks using two Lean kernel implementations within the project.

The public material does not establish that an independent outside research group has reproduced every part of the result or reviewed every consequence in the paper. It also does not mean that every sentence in the paper is formalized. The repository notes identify portions without a Lean counterpart. The careful conclusion is that PSI reports a Lean checked formal proof for the stated development, while the wider mathematical interpretation remains a matter for expert review.

## Key Takeaways

- Lean 4 checks formal proof terms against precise definitions and assumptions.
- PSI announced its AI-assisted Aaronson-Ambainis proof on November 6, 2026.
- A successful Lean check verifies the formal statement, not automatically the informal paper or all its consequences.
- Review the theorem statement, imports, axioms, placeholders, toolchain and paper to Lean mapping.
- Independent reproduction and mathematical review remain important.

## Related Reading

Read PSI's [original announcement](https://psi.inc/research/aaronson-ambainis/) and inspect the [public Lean repository](https://github.com/physical-superintelligence/aaronson-ambainis). The [Lean Language Reference](https://lean-lang.org/doc/reference/latest/) explains the proof assistant's kernel and language. Our [OpenAI Agents API guide](/articles/openai-agents-api-practical-guide/) covers another area where a machine generated result still needs a clear verification boundary.

### Practical review checklist

A practical review can be organised into a repeatable checklist. First, save the exact repository commit so the source does not change during review. Second, install the Lean version and library dependencies specified by the project. Third, run the documented build without changing files and keep the full output. Fourth, inspect the theorem statement and its assumptions, then trace every imported lemma that carries a major part of the argument. Fifth, compare the formal theorem with the paper and record any unformalized claims. Sixth, ask another reviewer to check whether the formal statement actually captures the original problem. For a major research claim, a second build on a separate machine is useful, but it does not replace independent mathematical scrutiny. The strongest public report is precise about what was checked, who checked it and what remains open.

## Sources and further reading

- Physical Superintelligence: [A proof of the Aaronson-Ambainis conjecture, November 6, 2026](https://psi.inc/research/aaronson-ambainis/)
- Physical Superintelligence: [Public Lean 4 proof repository](https://github.com/physical-superintelligence/aaronson-ambainis)
- Lean: [The Lean Language Reference](https://lean-lang.org/doc/reference/latest/)
- AI Proved What?: [Independent status notes on the PSI claim](https://aiprovedwhat.com/episodes/psi06-aaronson-ambainis-conjecture/)

## FAQ

### What is Lean 4?

Lean 4 is a programming language and proof assistant. Its small kernel checks proof terms, while tactics and automation help users construct them.

### Can Lean verify AI generated mathematics?

Lean can check a formal proof against definitions and assumptions encoded in Lean. It cannot by itself prove that the formal statement matches the original informal claim.

### What did PSI announce?

PSI announced on November 6, 2026 that an internal research system using a non-public Anthropic model produced a proof of the Aaronson-Ambainis conjecture, with a Lean formalization.

### Does Lean checking mean the research result is peer reviewed?

No. A kernel check verifies formal proof steps, while peer review and independent mathematical review assess the statement, assumptions, paper and claimed consequences.

### Can beginners use Lean 4?

Yes, but formal theorem proving has a learning curve. Start with the Lean tutorial, simple propositions and the community math library before trying a research proof.

### What should I check in an AI proof repository?

Check the formal statement, imports, axioms, placeholders, build instructions, Lean and Mathlib versions, theorem mapping and independent reproducibility.
