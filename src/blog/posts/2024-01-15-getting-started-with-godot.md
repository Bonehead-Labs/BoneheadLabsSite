---
title: "Why We Chose Godot for Bonehead Labs"
date: "2024-01-15"
excerpt: "Our journey from Unity to Godot and why we believe it's the perfect engine for indie game development in 2024."
tags: ["gamedev", "godot", "tools", "workflow"]
readTime: "6 min read"
image: "/BoneheadLabsSite/Assets/godot-logo.png"
---

# Why We Chose Godot for Bonehead Labs

After years of working with various game engines, we made the decision to standardize on **Godot** for all future Bonehead Labs projects. This wasn't a decision we took lightly, and we want to share our reasoning and experience with the transition.

## The Search for the Right Tool

When we started Bonehead Labs, we evaluated several options:

- **Unity**: Industry standard with excellent documentation
- **Unreal Engine**: Powerful but heavyweight for our needs  
- **GameMaker**: Great for 2D but limited in scope
- **Godot**: Open source with a growing community

## Why Godot Won

### 1. **Open Source Philosophy**

Being open source means we never have to worry about:
- Licensing fees or revenue sharing
- Engine availability (it can't be discontinued)
- Platform restrictions or arbitrary policy changes
- Access to source code when we need to debug deep issues

```gdscript
# Godot's GDScript is Python-inspired and readable
extends CharacterBody2D

func _ready():
    print("Hello from Bonehead Labs!")

func _physics_process(delta):
    velocity.y += gravity * delta
    move_and_slide()
```

### 2. **Lightweight and Fast**

Godot's editor is incredibly fast to start up and navigate. Coming from Unity's lengthy load times, this was a breath of fresh air.

**Startup Comparison:**
- Unity 2022.3: ~45 seconds to open a project
- Godot 4.2: ~3 seconds to open the same project

### 3. **Node-Based Architecture**

Godot's scene system is intuitive and promotes good architectural practices:

```
Main (Node2D)
├── Player (CharacterBody2D)
│   ├── Sprite2D
│   ├── CollisionShape2D
│   └── AnimationPlayer
├── UI (CanvasLayer)
│   └── HealthBar (Control)
└── World (Node2D)
    ├── TileMap
    └── Enemies (Node2D)
```

This hierarchy makes it easy to understand project structure at a glance.

### 4. **Built-in Scripting Language**

GDScript might seem like a limitation, but it's actually a strength:

**Advantages of GDScript:**
- Designed specifically for game development
- Tight integration with the engine
- Python-like syntax that's easy to learn
- No compilation step (faster iteration)
- Built-in support for common game patterns

```gdscript
# Signal connections are first-class citizens
signal health_changed(new_health)

@export var max_health: int = 100
var current_health: int:
    set(value):
        current_health = clamp(value, 0, max_health)
        health_changed.emit(current_health)
```

### 5. **Excellent 2D Support**

While Godot handles 3D well, its 2D capabilities are exceptional:

- Pixel-perfect rendering options
- Dedicated 2D physics engine
- Built-in animation tools
- Efficient sprite batching
- Advanced lighting and shader support

## The Migration Process

### Project Structure Changes

Moving from Unity required rethinking our project organization:

**Unity Approach:**
```
Assets/
├── Scripts/
├── Prefabs/
├── Scenes/
└── Materials/
```

**Godot Approach:**
```
scenes/
├── player/
│   ├── Player.tscn
│   └── Player.gd
├── enemies/
│   └── goblin/
└── ui/
scripts/
├── autoload/
└── utilities/
```

### Script Conversion

Converting C# Unity scripts to GDScript was surprisingly smooth:

**Unity C#:**
```csharp
public class Player : MonoBehaviour 
{
    public float speed = 5.0f;
    
    void Update() 
    {
        float horizontal = Input.GetAxis("Horizontal");
        transform.position += Vector3.right * horizontal * speed * Time.deltaTime;
    }
}
```

**Godot GDScript:**
```gdscript
extends CharacterBody2D

@export var speed: float = 5.0

func _physics_process(delta):
    var horizontal = Input.get_axis("ui_left", "ui_right")
    velocity.x = horizontal * speed
    move_and_slide()
```

## Challenges We Faced

### 1. **Learning Curve**

The biggest challenge was unlearning Unity patterns and embracing Godot's way of doing things.

**Key Mindset Shifts:**
- From GameObjects to Nodes
- From Prefabs to Scenes
- From MonoBehaviour to Node inheritance
- From Update() to _process() and _physics_process()

### 2. **Third-Party Assets**

Godot's asset ecosystem is smaller than Unity's, meaning we had to:
- Build more tools ourselves
- Convert existing assets
- Find alternative solutions

### 3. **Documentation Gaps**

While Godot's documentation is good, it's not as comprehensive as Unity's. We often had to:
- Read source code
- Experiment with features
- Rely on community forums

## Performance Comparison

For our types of games (2D platformers and physics simulations), Godot consistently outperformed Unity:

### Pete the Pig Performance:
- **Unity Build**: 45MB, 120 FPS average
- **Godot Build**: 28MB, 144 FPS average

### Bonehead Friend Performance:
- **Unity Build**: 38MB, 90 FPS with physics
- **Godot Build**: 22MB, 120 FPS with physics

## Development Workflow Improvements

### 1. **Faster Iteration**
No compilation step means instant testing of script changes.

### 2. **Better Debugging**
Godot's debugger is integrated and responsive:
- Real-time scene inspection
- Live property editing
- Clear error messages with stack traces

### 3. **Version Control Friendly**
Godot's file formats are more VCS-friendly than Unity's:
- Text-based scene files
- Fewer binary assets
- Cleaner diffs

## Tools Integration

We've built several tools to enhance our Godot workflow:

### Custom Import Pipeline
```gdscript
# Custom resource importer for our sprite sheets
@tool
extends EditorImportPlugin

func _get_importer_name():
    return "bonehead_sprite_importer"

func _get_visible_name():
    return "Bonehead Sprite Sheet"

func _get_recognized_extensions():
    return ["bspr"]

func _import(source_file, save_path, options, r_platform_variants, r_gen_files):
    # Custom import logic here
    return OK
```

### Automated Build System
We use GitHub Actions to build and deploy our Godot games automatically:

```yaml
name: Build Godot Game
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Godot
        uses: lihop/setup-godot@v1
        with:
          godot-version: '4.2'
      - name: Build
        run: godot --headless --export "Web" ./build/game.html
```

## Future with Godot

Looking ahead, we're excited about Godot's roadmap:
- Improved 3D renderer
- Better C# support
- Enhanced web export
- Mobile performance improvements

## Recommendations for Other Indie Developers

**Choose Godot if you:**
- Want full control over your tools
- Prefer lightweight, fast iteration
- Are building primarily 2D games
- Value open source principles
- Want to avoid licensing concerns

**Stick with Unity if you:**
- Need extensive third-party asset support
- Are building complex 3D games
- Have existing Unity expertise
- Require specific platform features

## Conclusion

The switch to Godot has been transformative for Bonehead Labs. Our development velocity has increased, our builds are smaller and faster, and we have complete confidence in the long-term viability of our toolchain.

While every engine has its trade-offs, Godot aligns perfectly with our values and development style. We're not just using Godot; we're investing in its future through contributions and community involvement.

---

*Interested in learning Godot? Check out our [upcoming tutorial series](/blog) where we'll dive deep into specific techniques we use at Bonehead Labs.*
