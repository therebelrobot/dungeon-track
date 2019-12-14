## Abstract

### Actions needed

- Player
  - create
  - set cursor
  - list
  - delete
- Campaign
  - create
  - set cursor
  - edit
  - list
  - delete
- Character
  - create
  - set cursor
  - edit
  - list
  - delete
- Attribute
  - create
  - edit
  - list
  - delete
- Roll Against
  - basic roll
  - stat
  - skill
  - spell
  - attack
  - save
  - death saving
    - all the above with:
      - normal
      - advantage
      - disadvantage

### Data Structure

Data is to be stored in separate S3 json files to allow for portability and ease of use.

- players
  - uid (slack or uuid)
  - name
- campaign
  - name
  - date of creation
  - last edited
  - system
  - id
  - playersIds
- character
  - name
  - race
  - class
  - background
  - feats
  - level
  - xp
  - stats
  - features
  - bio/backstory
  - inventory
  - proficiencies
    - skill
    - language
    - tool
    - weapon
    - armor
    - other
  - hp
  - ac
  - speed
  - attacks
  - spells
    - saves
    - slots
      - cantrips
      - 1st level
      - etc.
    - known
    - prepared
    - special
