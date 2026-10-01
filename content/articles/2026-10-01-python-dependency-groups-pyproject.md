---
title: "Python Dependency Groups: A Cleaner pyproject.toml Workflow"
description: "Python dependency groups give projects a standard place for development tools such as tests and linters without publishing them as package dependencies."
category: Python
author: Tech Updates
date: 2026-10-01
readingTime: "8 min read"
featuredImage: "/images/python-dependency-groups-pyproject.svg"
tags:
  - Python
  - pyproject.toml
  - packaging
  - dependencies
  - developer tools
keyTakeaways:
  - "PEP 735 defines dependency groups for development and other internal dependency sets."
  - "Dependency groups are stored in pyproject.toml and are not published as package metadata."
  - "Projects should still choose installation and locking tools deliberately because the PEP does not define a universal installation command."
faqs:
  - question: "What are Python dependency groups?"
    answer: "They are named dependency lists in pyproject.toml intended for development and other internal project environments."
  - question: "Are dependency groups published to PyPI as package dependencies?"
    answer: "PEP 735 specifies that dependency group data is not included as published distribution metadata."
  - question: "Are dependency groups the same as package extras?"
    answer: "No. Extras are package metadata for optional runtime features, while dependency groups are intended for internal development and project environments."
  - question: "Can dependency groups include other groups?"
    answer: "Yes. The specification defines an include-group mechanism for composing groups."
  - question: "Does PEP 735 define a pip install command?"
    answer: "No. The PEP leaves installation interfaces to tools that support dependency groups."
  - question: "Should every Python project switch immediately?"
    answer: "No. Evaluate your package manager, build backend, lockfile strategy, and supported tooling before changing an established workflow."
---

## What Happened?

Python packaging has gained a standardized concept for a problem that many projects previously solved with ad-hoc files. PEP 735 defines Dependency Groups in pyproject.toml for storing requirements used by development environments and other internal workflows.

The specification was finalized in October 2024. Its purpose is to give projects a standard place for groups such as testing, documentation, linting, or development dependencies without treating those packages as part of the published package's runtime interface. See https://peps.python.org/pep-0735/.

The distinction matters because a Python project can have two very different dependency questions: What does a user need to run my package? And what does a developer need to test and maintain the repository? Dependency groups are designed for the second question.

## Why People Are Talking About It

Python projects often accumulate several dependency files. One file may contain production requirements, another test packages, another documentation tools, and another development utilities. That works, but the structure becomes harder to understand as a project grows.

The Python Packaging User Guide now documents dependency groups as a standardized subset of the capabilities people historically used requirements.txt files for. It specifically calls out internal development use cases such as linting and testing and projects that do not build distributions. See https://packaging.python.org/en/latest/specifications/dependency-groups/.

The benefit is not that pyproject.toml magically solves dependency management. The benefit is that the project can express its intent in a standardized format that packaging tools can discover and support.

## What Users Experienced

The practical problem is familiar to developers: a test dependency accidentally becomes a runtime dependency, a documentation tool gets installed into production, or a large requirements directory becomes the only place where the project's dependency structure is documented.

Dependency groups separate that intent. A project can define, for example, test, docs, and lint groups. The specification's examples show that groups can contain normal dependency specifiers and can include other groups.

That does not mean the ecosystem has one universal command for installing them. PEP 735 explicitly leaves the installation interface to tools that implement the feature. This is an important limitation: adopting the syntax is only one part of adopting the workflow.

For teams, the practical question is therefore not only Can I write this table? It is Which tool resolves this table in my local environment and CI, and how will developers know which group they need?

## Why It Happens

Historically, Python packaging had several overlapping ways to describe dependencies. Runtime project metadata expresses packages needed by the application or library. Extras can describe optional features that users may install. requirements.txt files are widely used for environment installation. Tools such as tox, Nox, Hatch, Poetry, uv, pip, and build backends have also developed their own workflows.

Dependency groups address a specific gap: named sets of requirements that are useful inside the project but should not become part of the published package metadata.

PEP 735 also explains that dependency groups are not intended to be a place for lockfile data. A project still needs a deliberate strategy for reproducible environments and pinned or resolved versions. In other words, dependency groups describe what belongs in a development group, while a lock or resolution mechanism can describe exactly what gets installed.

This separation is valuable in CI. A test job can request the test group, a documentation job can request the docs group, and a developer can use a broader development group. The repository can express these purposes without pretending they are runtime package features.

## Working Fixes

If you are adopting dependency groups, start with the project's current dependency model rather than deleting existing files immediately.

Create a small group first:

    [dependency-groups]
    test = [
      "pytest",
      "coverage",
    ]

Then identify which tool in your workflow understands the group and how it expects the group to be installed. The Python Packaging User Guide lists guides for virtual environments, package installation, project dependencies, and publishing workflows. See https://packaging.python.org/en/latest/guides/.

Use separate groups when the intent is genuinely different. A docs group may need Sphinx or a documentation generator. A lint group may contain formatting and static-analysis tools. A test group can contain test runners and coverage tools. A broader dev group can include other groups when your tooling supports the specified include mechanism.

Keep runtime dependencies separate. If a package needs requests at runtime, that belongs in the package's runtime dependency metadata rather than a development-only group.

Next, update CI in a controlled change. The CI job should install the same development group that a developer would use locally. This prevents a common failure where local environments have tools that the CI environment never installs.

Finally, test the built distribution. The defining property of dependency groups is that their contents are not included as published distribution metadata. That is useful, but only if your build and installation workflow actually matches the project's goals.

## What Doesn't Work

Do not copy a requirements.txt file into a dependency group without understanding why each package exists. A group is most useful when it expresses a clear environment purpose.

Do not treat dependency groups as a lockfile. PEP 735 explicitly says they are not intended as a location for locked dependency data.

Do not assume every package installer supports the same command. The PEP deliberately does not define one universal installation interface.

And do not mix optional runtime features with internal development tooling simply because both are optional. Package extras are part of a package's published interface; dependency groups are not.

Another mistake is changing dependency structure without testing the actual wheel or source distribution. Packaging behavior should be checked at the artifact level, especially when the project is published for other users.

## Official Response

PEP 735 is the normative source for the feature. It defines the dependency-groups table, named groups, group inclusion, and the rule that group contents are not published as package metadata.

The Python Packaging User Guide provides the practical ecosystem guidance around installing packages, virtual environments, building and publishing distributions, and dependency management. The two documents should be read together: the PEP explains the standard, while the guide explains the surrounding workflow.

The specification also makes an important boundary clear: tools decide how users install dependency groups. That means a project should document the chosen command in its contributor guide rather than assuming that the syntax alone is self-explanatory.

## Key Takeaways

Dependency groups are a useful improvement for Python projects that have outgrown a collection of loosely related requirements files. They make the purpose of development dependencies explicit and put the information in the project's central pyproject.toml.

The important limitation is equally clear: dependency groups are not a complete dependency-management system. Choose the installer, resolver, lockfile, and CI workflow separately.

For an existing project, migrate incrementally. Add a group, make the CI and local development workflow understand it, verify the resulting environment, and only then remove redundant dependency definitions.

The goal is not fewer files for its own sake. The goal is a dependency model where a new contributor can understand what is needed to run, test, lint, document, and build the project without guessing.

## Related Reading

Start with PEP 735 at https://peps.python.org/pep-0735/, then use the Python Packaging User Guide at https://packaging.python.org/en/latest/ for installation and environment-management guidance. The virtual-environment documentation is especially useful when testing dependency changes without contaminating a system Python installation.
