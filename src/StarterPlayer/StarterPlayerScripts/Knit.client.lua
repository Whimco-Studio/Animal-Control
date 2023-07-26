local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local StarterGui = game:GetService("StarterGui")

-- Load core module:
local Knit = require(ReplicatedStorage.Packages.Knit)

Knit.Player = Players.LocalPlayer
Knit.Modules = ReplicatedStorage.Modules

--// Adding Conrollers
Knit.AddControllersDeep(ReplicatedStorage.Controllers)

-- Start Knit:
Knit.Start():catch(warn)
