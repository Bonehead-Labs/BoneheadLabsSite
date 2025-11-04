---
title: "Clankware Engineering - A breakdown of Agentic Development"
date: "2025-11-04"
excerpt: "Clankware Engineering"
tags: ["Agents", "vibe coding", "clanker", "clankware engineering"]
readTime: "10 min read"
image: "@blog-images/Cursor.png"
author: "George Nizoridis"
---
# Clankware Engineering

I have to be honest, clankware engineering seems far more prestigious than 'vibe coding'... don't you agree? No? Okay, that's fine :(
In all seriousness, techniques like agentic development and vibe coding are getting a mixed wrap at the moment.
On the one hand, you have expert software engineers writing code for critical and complex systems, they look at the performance of agents with amusment and disdain, as they fall short of what is required. On the other hand, you have aspiring solutions designers, those wanting to create and execute on their vision, who never would have tried if not for the power of agents.
You have several types of people between these two polar ends that conflate the sentiment, but I like to picture these two ends when considering building a solution with agents, as it helps me set my expectations.

# Video Breakdown
On the off chance you didn't arrive here from my video on clankware engineering, here it is!
https://www.youtube.com/watch?v=FVixFWGfuRU
Scroll down to find the AGENTS.md example :)

Furthermore, here is a quick summary of the video.

## Tools
| Tool | Cost [minimum] (USD) | Approx AUD | Rating (General) | Godot Rating | Explanation |
| --- | --- | --- | --- | --- | --- |
| **Codex** (OpenAI) | $20/mo (ChatGPT Plus) | A$30.6 | 7.5/10 | 4/10 | Strong at small-script completion and reasoning but outdated; lacks repo context and IDE integration. Godot support limited due to GDScript’s niche syntax. |
| **Claude Code** (Anthropic) | $17/mo (annual) or $20/mo (monthly) | A$26.0–30.6 | 9/10 | 5/10 | Excellent for comprehension, refactoring, and documentation. Slightly less accurate in real-time IDE use or GDScript contexts but great for architecture reasoning. |
| **Windsurf** | Free for individuals | A$0 | 8.5/10 | 7.5/10 | Intuitive, agentic editing with strong repo context. Free tier is generous; slightly slower than Cursor but excellent for iterative game logic writing. |
| **Cursor** | Free (Hobby) / Pro $20/mo | A$0 / A$30.6 | 9/10 | 8.5/10 | Most complete agentic coding experience. Excels at multi-file context and autonomous code improvement. Performs best for Godot users needing frequent script updates. |
| **GitHub Copilot** | Free (limited) / Pro $10/mo | A$0 / A$15.3 | 7.5/10 | 6/10 | Reliable auto-completion but limited reasoning depth. Good for boilerplate generation; weaker in context-heavy or GDScript tasks. |
| **Gemini Code Assist** (Google) | Free (individuals) | A$0 | 7.5–8/10 | 5/10 | High value: generous free tier, decent speed, and broad language coverage. Still maturing for complex repos and non-mainstream languages like GDScript. |

## General Process
**General Tips**

1. Know your limits and set your expectations.
What is your game scope? Are you looking for A.I to help you create GTA 6? Set reasonable expectations for the tool, and work within a managable complexity for you and the agent.
**Clankspectations**
2. Learn your programming language syntax at a minimum, ideally design patterns from tutorials
3. Create and [Agents.md](http://Agents.md) file setting guidelines in place (not perfect)
**Clankcument**
4. Plan, Write, test. Use A.I to write comprehensive project plans and actionable milestones to check off, test between each.
**ClankerPlan**
5. Model selection → GPT 5 medium and low are great for majority of tasks. gpt-5 high for planning and stubborn bugs. Claude is good but cost is a factor. Use Free models whenever possible for small simple tasks to preserve your usage.
**ClankerSelection**
6. **Clankerops**
Checkpoint often using Git & Github. Set up a local repo, publish to github. Ideally write commits after each milestone is reviewed and tested, but minimum get a.i to write a commit.
**Clankerops**

## Godot Tips
**Godot Specific**

1. MCP servers to leverage, Context7 and Deepwiki → essential for Godot (also a generally good approach)
2. Take care with preloads and node references
3. If something isn’t detecting, a quick checklist is
- collision layer check
- monitoring on and signal connected (Area2D)
- method of detection, in group, hasmethod etc.


## Agents.md file Example
```
# AGENTS.md

> **Goal:** Guide an autonomous coding agent to implement features **safely and correctly** in this Godot 4.x project (4.0–4.5 syntax acceptable), aligning with our architecture, performance targets, and repo hygiene.
> **Audience:** Code agents (Cursor/Codex/etc.) and humans reviewing their work.

---

## 1) Sources of Truth (read first, cite often)

* **Architecture:** `Systems_Design.md` (scene-first composition, shallow inheritance, component contracts).
* **Delivery & Ops:** `production_strategy.md` (branches, builds, releases, versioning, perf budgets).
* **Engine Docs:** **DeepWiki MCP** (primary reference) + Godot **4.x** docs (4.0–4.5). Prefer 4.5 APIs when available; avoid pre-4.0 patterns.
* **This file:** guardrails, workflows, and decision trees for the agent.

> When making decisions, **quote** the relevant line(s) from `Systems_Design.md` or `production_strategy.md`, and link the Godot 4.x reference from DeepWiki MCP in your task notes/commit messages.

---

## Reusable Learnings

### 1) Single Source of Truth for Stats
- Place all base stat values (max_health, move_speed, etc.) in `AttributesComponent` as the authoritative source.
- Other systems (HealthComponent, HUD, etc.) should subscribe to signals and mirror the data, not own it.
- Don't persist mirrored values - only save canonical state to avoid save/load races.

### 2) Enforce Invariants in Setters
- If `current_health <= max_health` is an invariant, enforce it in the `max_health` setter.
- Always call `set_health(_max_health)` in `max_health` setter to guarantee full heal when max increases.
- Use `set_health()` for clamping when max decreases.

### 3) UI Should Bind to Authoritative Data
- HUD should subscribe to the component that owns the data (`AttributesComponent.max_health_changed`), not secondary mirrors.
- Read current values from the appropriate source: `AttributesComponent` for stats, `HealthComponent` for current HP.

### 4) Prefer Direct Calls Over Reflection
- Use `node.get_health()` instead of `node.call("get_health")`.
- Direct calls prevent silent failures, improve readability, and surface errors earlier.
- Use reflection (`call()`) only when invoking methods by name dynamically.

### 5) Avoid Save/Load Races
- Only persist canonical state. Loading stale values into secondary components causes regressions after runtime changes.
- Example: Don't save `HealthComponent.max_health` if it's mirrored from `AttributesComponent`.

### 6) Upgrade Pipeline Should Complete All Updates
- When an upgrade changes a stat that affects live state, immediately update dependent systems.
- Example: After applying `max_health` upgrade to `AttributesComponent`, also set `HealthComponent.max_health` and `set_health()`.

---

## 2) Architecture Targets (working model)

* **Scene-first:** Only `.tscn` scenes are instanced in gameplay. Scripts/components are capabilities; scenes define composition.
* **Shallow inheritance:** ≤ 2 levels (Base → Derived). Use inheritance for *contracts & shared mechanics*; use components for optional/swappable behavior.
* **Strongly typed GDScript:** Use typed variables, function params/returns, and signals. Avoid `Variant` unless necessary.
* **Signals over polling:** Prefer event-driven communication and explicit interfaces.
* **DX + Performance:** Lean node trees, minimal physics, exported tuning vars, release-profile testing.

> Implementations must conform to the **Component Contracts** in `Systems_Design.md` (Health, FSM, Hitbox, etc.). If a contract is insufficient, follow the **Submodule Change Decision Tree** below.

---


## 3) Coding Standards (Godot 4.x, typed)

* **Language:** GDScript (Godot **4.0–4.5**). Use modern 4.x signal syntax and annotations. Prefer 4.5 APIs when available; **avoid pre-4.0 patterns** (pitfall).
* **Typing:**

  * Functions: `func take_damage(amount: int) -> void:`
  * Signals: `signal damaged(amount: int, source: Node)` with typed args.
  * Exported vars: `@export var max_hp: int = 10`
* **Node structure:** `Root → Components → Visuals`.
* **APIs:** Prefer Godot 4.5 API; 4.0–4.4 acceptable when equivalent. Validate with DeepWiki MCP.
* **Contracts:** Keep public APIs minimal, typed, and documented with tooltips.
* **Groups:** Use for coarse filters (e.g., `"enemies"`, `"projectiles"`), not as a logic bus.
* **class_name vs autoloads (CRITICAL):** **Never use `class_name` in autoload singleton scripts.** Autoload names become global identifiers and will conflict with `class_name` declarations, causing "hides an autoload singleton" errors. Use `class_name` only for non-autoload classes (components, resources, utilities). Ref: Godot 4.x docs on autoloads and global scope (DeepWiki MCP).

## 4) File & Project Layout

/src
  /Entities
    /Player
      Player.gd                  # extends CharacterBody2D (no addon dependency)
      Player.tscn                # FINAL scene with components
    /Enemies
      EnemyBase.gd
      Enemy_Broccoli.gd
      Enemy_Broccoli.tscn
  /Systems
    /EventBus
      EventBus.gd                # local copy (no class_name)
      EventTopics.gd
    /Input
      InputService.gd            # local copy (no class_name)
      InputConfig.gd
    /SceneFlow
      FlowManager.gd             # local copy (no class_name)
      Transitions/
    DataRegistry.gd
      Enemy_Broccoli.tscn
      components/…

/systems_adapters                 # Thin adapters to EventBus/Save/Input/SceneFlow
/examples                         # Golden & test scenes
/docs                             # Architecture, production, style


Naming: PascalCase for scenes; components suffixed with `Component`. Mirror names between `.gd` and `.tscn` when a script is the root.

---

## 6) Development Workflow (agent)

1. **Plan**

   * Read `Systems_Design.md` & `production_strategy.md`.
   * Query DeepWiki MCP to confirm Godot 4.x (prefer 4.5) APIs and patterns.
   * Write a short implementation plan with references cited.

2. **Implement**

   * Default to **local composition** (new components/adapters) over submodule edits.
   * Keep inheritance shallow and typed.
   * Wire signals in the scene editor or via `@onready` connections in code (typed).

3. **Verify**

   * Add/update a **standalone test scene** in `/examples`.
   * Manual smoke: run, spawn, exercise signals.
   * User will perform additional testing.

4. **Profile**

   * Test in **release** profile; check for unnecessary `_process`/`_physics_process`.
   * Validate culling, draw calls (Sprite/AnimatedSprite), and collision shape counts.

5. **Document**

   * Update docstrings and editor tooltips for exported vars.
   * Update `docs/CHANGELOG.md` (Unreleased) with a concise entry.

6. **Commit Strategy (solo project)**

   * **Frequent small commits** with clear messages.
   * Use **feature branches** for major changes to existing functionality (e.g., `feat/player-dash`, `refactor/fsm-api`).
   * Merge locally after self-review and smoke tests.
   * Keep `main` releasable.

---

## 7) When to Ask for Approval

* Any **submodule** modification or pointer bump.
* Any change to **component contracts** in `Systems_Design.md`.
* Any addition to **autoload systems** or global project settings.
* Any new **physics-heavy** system or **shader** with non-trivial cost.
* Any **asset pipeline** or **build** step change in `production_strategy.md`.

---

## 8) Performance Checklist (quick)

* Avoid polling; prefer signals/timers.
* Typed GDScript everywhere.
* Minimal physics nodes; combine where feasible.
* Keep per-frame allocations low; reuse arrays/dicts where safe.
* Cull offscreen effects; check particle counts and materials.
* Batch sprites (shared textures), mind atlas usage.
* Use `await get_tree().process_frame` sparingly; prefer signals.

---

## 9) Error Handling & Telemetry

* Graceful early returns; focus on actionable warnings.
* Avoid noisy prints in production builds.
* If telemetry is enabled by `production_strategy.md`, emit **structured events** via EventBus.

---

## 10) Agent Prompt Scaffold (for tasks)

> **Task:** Implement `<feature>` following **Scene-first Composition with Shallow Inheritance**.
> **Constraints:** Godot **4.0–4.5** APIs; strongly-typed GDScript; prefer components & signals.
> **Submodule Policy:** No edits without approval. If extension is needed, produce Option A (local bespoke) and Option B (submodule change) proposals.
> **References:** Quote relevant lines from `Systems_Design.md` / `production_strategy.md` and provide DeepWiki MCP Godot 4.x references.
> **Deliverables:**
>
> * Derived script(s) + final `.tscn` with components
> * Signal wiring + exported tuning vars with tooltips
> * `/examples/<Name>_TestScene.tscn`
> * Commit messages summarizing rationale and references

---

## 11) Common Pitfalls (avoid)

* Editing the **submodule** without explicit approval.
* Introducing **deep inheritance** to solve optional features.
* Polling inputs/AI each frame instead of using signals/timers.
* Hard-referencing sibling nodes in components (breaks reuse/testing).
* Using **pre-4.0 Godot syntax/APIs** (pitfall). Stick to **4.0–4.5**, prefer 4.5 when available.

### UI Overlay & Modal Management

* **Always check if an overlay already exists before creating a new one.** When implementing toggle functionality for UI overlays (inventory, pause menu, etc.), verify that an instance isn't already present in the scene tree before instantiating. Use `UIRoot.get_node_or_null("Control/ModalRoot/OverlayName")` to check, then either close the existing overlay or open a new one—never stack duplicates.
* **Track overlay state with flags and cleanup callbacks.** Use a boolean flag (e.g., `_inventory_overlay_open`) to prevent race conditions. Connect to the overlay's `tree_exiting` signal to reset the flag when the overlay is removed: `overlay.tree_exiting.connect(func(): _overlay_open = false)`.
* **Route all overlays through UIRoot for CanvasLayer display.** Always use `UIRoot.show_modal_from_scene()` to ensure overlays appear on the correct CanvasLayer and follow the camera. Fallback to direct instantiation only if UIRoot is unavailable (rare edge case).

### Area2D Collision Detection

* **Explicitly configure collision layers and masks.** When creating `Area2D` nodes for interactables (shops, pickups, triggers), always set:
  - `monitoring = true` (enables detection)
  - `collision_layer` to the appropriate layer (e.g., `1` for world objects)
  - `collision_mask` to the target layer(s) you want to detect (e.g., `32768` for player layer)
* **Verify collision settings in `.tscn` files.** Don't assume defaults will work. Check that the Area2D's collision shape is enabled and that layer/mask settings match the bodies you're trying to detect. Use the Godot editor's collision layer visualization to debug.
* **Test interactable visibility and feedback.** Add visible sprites or debug shapes to Area2D nodes during development so you can see where they are in the level. Use labels or prompts that appear on `body_entered` to confirm detection is working.

### Signal-Driven UI Updates

* **Connect to all relevant signals for live data.** When displaying dynamic values (health, XP, ammo), connect to both the primary change signal AND any related signals that affect the display. Example: for HP display, connect to both `health_changed` AND `max_health_changed` to ensure the UI updates when max HP increases from upgrades.

```

## Explore More of Bonehead Labs
- [The Lab (Projects)](https://boneheadlabs.org/projects) - Open source & premium software, interesting research.
- [Games](https://boneheadlabs.org/games) - Game library.
- [Contact](https://boneheadlabs.org/contact) 
- [About](https://boneheadlabs.org/about) - Learn more about bonehead labs.
