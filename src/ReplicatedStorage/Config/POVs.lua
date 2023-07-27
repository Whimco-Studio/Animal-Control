local SelectionSpawn: BasePart = workspace.CharacterSelect.Spawn
local SelectionSpawnTop = SelectionSpawn.CFrame * CFrame.new(0, SelectionSpawn.Size.Y / 2, 0)

local POVs = {
	CharacterSelect = CFrame.lookAt((SelectionSpawnTop * CFrame.new(0, 2, -7)).Position, SelectionSpawnTop.Position)
		* CFrame.new(0, 1.25, 0),
}

POVs.CharacterCreate = POVs.CharacterSelect * CFrame.new(-3, 0, 0)

return POVs
